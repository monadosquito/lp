import { Controller, Body, Post } from '@nestjs/common';
import { ChatsService } from 'src/chats/chats.service';
import { CreateChatDto } from 'src/dtos/create-chat.dto';
import { Chat } from 'src/entities/chat.entity';

@Controller('chats')
export class ChatsController {
    constructor(private readonly chatsService: ChatsService) {}

    @Post('add')
    public async addChat(@Body() chat: CreateChatDto): Promise<number> {
        const addedChatId = await this.chatsService.addChat(chat) 
        return addedChatId
    }

    @Post('get')
    public async getUserChats(
        @Body() { user }: { user: number },
    ): Promise<Chat[]> {
        const userChats = await this.chatsService.getUserChats(user)
        return userChats
    }
}
