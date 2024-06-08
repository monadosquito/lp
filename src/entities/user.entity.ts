import { Entity, PrimaryGeneratedColumn, Column, ManyToMany } from 'typeorm'
import { Chat } from './chat.entity'


@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    username: string

    @ManyToMany(() => Chat, Chat => Chat.users)
    chats?: Chat[]

    @Column({ default: () => 'CURRENT_TIMESTAMP' })
    createdAt: Date
}
