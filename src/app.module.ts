import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/entities/user.entity';
import { Message } from 'src/entities/message.entity';
import { UsersController } from 'src/users/users.controller';
import { UsersService } from 'src/users/users.service';
import { Chat } from 'src/entities/chat.entity';
import { ChatsController } from 'src/chats/chats.controller';
import { ChatsService } from 'src/chats/chats.service';
import { MessagesController } from 'src/messages/messages.controller';
import { MessagesService } from 'src/messages/messages.service';

@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: 'postgres',
            username: 'lp',
            password: '123',
            host: 'postgresql',
            entities: [User, Message, Chat],
            synchronize: true,
        }),
        TypeOrmModule.forFeature([User, Message, Chat]),
    ],
    controllers: [AppController, UsersController, ChatsController, MessagesController],
    providers: [AppService, UsersService, ChatsService, MessagesService],
})
export class AppModule {}
