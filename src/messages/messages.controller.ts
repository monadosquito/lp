import { Controller, Post, Body } from '@nestjs/common';
import { MessagesService } from 'src/messages/messages.service';
import { CreateMessageDto } from 'src/dtos/create-message.dto';
import { Message } from 'src/entities/message.entity';

@Controller('messages')
export class MessagesController {
    constructor(private readonly msgsService: MessagesService) {}

    @Post('/add') 
    public async addMessage(@Body() msg: CreateMessageDto): Promise<number> {
        const addedMsgId = await this.msgsService.addMessage(msg)
        return addedMsgId
    }

    @Post('/get') 
    public async getChatMessages(
        @Body() { chat }: { chat: number },
    ): Promise<Message[]> {
        const chatMsgs = await this.msgsService.getChatMessages(chat)
        return chatMsgs
    }
}
