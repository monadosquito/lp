import { User } from './user.entity'
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm'
import { Chat } from 'src/entities/chat.entity'


@Entity()
export class Message {
    @PrimaryGeneratedColumn()
    id: number 

    @ManyToOne(() => Chat, chat => chat.id)
    chat: number

    @ManyToOne(() => User, user => user.id)
    author: number

    @Column()
    text: string

    @Column({ default: () => 'CURRENT_TIMESTAMP' })
    createdAt: Date
}
