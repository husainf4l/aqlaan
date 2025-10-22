import {
    Controller,
    Get,
    Post,
    Body,
    Param,
    Delete,
    Query,
    Patch,
} from '@nestjs/common';
import { MessagesService } from './messages.service';
import { CreateMessageDto } from './dto/create-message.dto';

@Controller('messages')
export class MessagesController {
    constructor(private readonly messagesService: MessagesService) { }

    @Post()
    create(@Body() createMessageDto: CreateMessageDto) {
        return this.messagesService.create(createMessageDto);
    }

    @Get()
    findAll(@Query('sessionId') sessionId?: string) {
        return this.messagesService.findAll(sessionId);
    }

    @Get('session/:sessionId')
    findBySession(@Param('sessionId') sessionId: string) {
        return this.messagesService.findBySession(sessionId);
    }

    @Patch(':id/read')
    markAsRead(@Param('id') id: string, @Query('userId') userId: string) {
        return this.messagesService.markAsRead(id, userId);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.messagesService.remove(id);
    }
}
