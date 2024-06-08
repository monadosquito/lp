import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { In, Repository } from 'typeorm';
import { Chat } from 'src/entities/chat.entity';
import { User } from 'src/entities/user.entity';
import { CreateChatDto } from 'src/dtos/create-chat.dto';

@Injectable()
export class ChatsService {
    constructor(
        @InjectRepository(Chat) private readonly chatsRepo: Repository<Chat>,
        @InjectRepository(User) private readonly usersRepo: Repository<User>,
    ) {}

    public async addChat({ name, users }: CreateChatDto): Promise<number> {
        const dbUsers = await this.usersRepo.findBy({ id: In(users) })
        const dbChat = this.chatsRepo.create({ name, users: dbUsers })
        const { id: addedChatId } = await this.chatsRepo.save(dbChat)
        return addedChatId
    }

    public async getUserChats(id: number): Promise<Chat[]> {
        const user = await this.usersRepo.findOne({
            where: { id },
            relations: { chats: true },
            order: { chats: { createdAt: 'DESC' } }
        })
        return user.chats
    }
}
