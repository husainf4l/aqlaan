import {
  WebSocketGateway,
  SubscribeMessage,
  MessageBody,
  WebSocketServer,
  ConnectedSocket,
  OnGatewayConnection,
  OnGatewayDisconnect,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';

interface SendMessageDto {
  sessionId: string;
  content: string;
  senderId: string;
}

interface JoinRoomDto {
  sessionId: string;
  userId: string;
}

@Injectable()
@WebSocketGateway({
  cors: {
    origin: '*',
  },
})
export class ChatGateway implements OnGatewayConnection, OnGatewayDisconnect {
  @WebSocketServer()
  server: Server;

  private connectedUsers = new Map<string, string>(); // userId -> socketId

  constructor(private prisma: PrismaService) { }

  async handleConnection(client: Socket) {
    console.log(`Client connected: ${client.id}`);
  }

  async handleDisconnect(client: Socket) {
    console.log(`Client disconnected: ${client.id}`);
    // Remove user from connected users map
    for (const [userId, socketId] of this.connectedUsers.entries()) {
      if (socketId === client.id) {
        this.connectedUsers.delete(userId);
        break;
      }
    }
  }

  @SubscribeMessage('joinRoom')
  async handleJoinRoom(
    @MessageBody() data: JoinRoomDto,
    @ConnectedSocket() client: Socket,
  ) {
    const { sessionId, userId } = data;

    // Join the room
    client.join(sessionId);

    // Track connected user
    this.connectedUsers.set(userId, client.id);

    // Send confirmation
    client.emit('joinedRoom', { sessionId, userId });

    // Notify others in the room
    client.to(sessionId).emit('userJoined', { userId, sessionId });

    return { event: 'joinedRoom', data: { sessionId, userId } };
  }

  @SubscribeMessage('sendMessage')
  async handleSendMessage(
    @MessageBody() data: SendMessageDto,
    @ConnectedSocket() client: Socket,
  ) {
    const { sessionId, content, senderId } = data;

    try {
      // Save message to database
      const message = await this.prisma.message.create({
        data: {
          sessionId,
          senderId,
          content,
        },
        include: {
          sender: {
            select: {
              id: true,
              name: true,
              role: true,
            },
          },
        },
      });

      // Broadcast message to room
      this.server.to(sessionId).emit('newMessage', message);

      return { event: 'messageSent', data: message };
    } catch (error) {
      console.error('Error sending message:', error);
      client.emit('error', { message: 'Failed to send message' });
    }
  }

  @SubscribeMessage('typing')
  async handleTyping(
    @MessageBody() data: { sessionId: string; userId: string; isTyping: boolean },
    @ConnectedSocket() client: Socket,
  ) {
    const { sessionId, userId, isTyping } = data;

    // Broadcast typing status to others in the room
    client.to(sessionId).emit('userTyping', {
      userId,
      isTyping,
      timestamp: new Date(),
    });
  }

  @SubscribeMessage('leaveRoom')
  async handleLeaveRoom(
    @MessageBody() data: { sessionId: string; userId: string },
    @ConnectedSocket() client: Socket,
  ) {
    const { sessionId, userId } = data;

    client.leave(sessionId);
    this.connectedUsers.delete(userId);

    // Notify others
    client.to(sessionId).emit('userLeft', { userId, sessionId });

    return { event: 'leftRoom', data: { sessionId, userId } };
  }
}
