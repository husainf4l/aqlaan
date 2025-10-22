import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { CreateMessageDto } from './dto/create-message.dto';

@Injectable()
export class MessagesService {
    constructor(private prisma: PrismaService) { }

    async create(createMessageDto: CreateMessageDto) {
        const { sessionId, senderId, content } = createMessageDto;

        // Verify session exists
        const session = await this.prisma.session.findUnique({
            where: { id: sessionId },
        });

        if (!session) {
            throw new NotFoundException('Session not found');
        }

        // Verify sender exists
        const sender = await this.prisma.user.findUnique({
            where: { id: senderId },
        });

        if (!sender) {
            throw new NotFoundException('Sender not found');
        }

        return this.prisma.message.create({
            data: {
                sessionId,
                senderId,
                content,
            },
            include: {
                sender: {
                    select: { id: true, name: true, role: true },
                },
                session: {
                    select: { id: true, status: true },
                },
            },
        });
    }

    async findAll(sessionId?: string) {
        if (sessionId) {
            return this.findBySession(sessionId);
        }

        return this.prisma.message.findMany({
            include: {
                sender: {
                    select: { id: true, name: true, role: true },
                },
                session: {
                    select: { id: true, status: true },
                },
            },
            orderBy: { createdAt: 'desc' },
            take: 100,
        });
    }

    async findBySession(sessionId: string) {
        // Verify session exists
        const session = await this.prisma.session.findUnique({
            where: { id: sessionId },
        });

        if (!session) {
            throw new NotFoundException('Session not found');
        }

        return this.prisma.message.findMany({
            where: { sessionId },
            include: {
                sender: {
                    select: { id: true, name: true, role: true },
                },
            },
            orderBy: { createdAt: 'asc' },
        });
    }

    async markAsRead(messageId: string, userId: string) {
        const message = await this.prisma.message.findUnique({
            where: { id: messageId },
        });

        if (!message) {
            throw new NotFoundException('Message not found');
        }

        // Only mark as read if the current user is not the sender
        if (message.senderId !== userId) {
            return this.prisma.message.update({
                where: { id: messageId },
                data: { isRead: true },
            });
        }

        return message;
    }

    async remove(id: string) {
        const message = await this.prisma.message.findUnique({
            where: { id },
        });

        if (!message) {
            throw new NotFoundException('Message not found');
        }

        return this.prisma.message.delete({
            where: { id },
        });
    }
}
