import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Message } from 'src/entities/message.entity';
import { Chat } from 'src/entities/chat.entity';
import { CreateMessageDto } from 'src/dtos/create-message.dto';

@Injectable()
export class MessagesService {
    constructor(
        @InjectRepository(Message) private readonly msgsRepo: Repository<Message>,
        @InjectRepository(Chat) private readonly chatsRepo: Repository<Chat>,
    ) {}

    public async addMessage(msg: CreateMessageDto): Promise<number> {
        const dbMsg = this.msgsRepo.create(msg)
        const { id: addedMsgId } = await this.msgsRepo.save(dbMsg)
        return addedMsgId
    }

    public async getChatMessages(id: number): Promise<Message[]> {
        const chat = await this.chatsRepo.findOne({
            where: { id },
            relations: { messages: true },
            order: { messages: { createdAt: 'ASC' } },
        })
        return chat.messages
    }
}
