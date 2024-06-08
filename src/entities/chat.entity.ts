import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToMany,
    JoinTable,
    OneToMany,
} from "typeorm";
import { User } from "src/entities/user.entity";
import { Message } from "src/entities/message.entity";


@Entity()
export class Chat {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @OneToMany(() => Message, msg => msg.chat)
    messages: Message[]

    @ManyToMany(() => User, user => user.chats)
    @JoinTable()
    users?: User[]

    @Column({ default: () => 'CURRENT_TIMESTAMP' })
    createdAt: Date
}
