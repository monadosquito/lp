import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from 'src/entities/user.entity';
import { CreateUserDto } from 'src/dtos/create-user.dto';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User) private readonly usersRepo: Repository<User>,
    ) {}

    public async addUser({ username }: CreateUserDto): Promise<number> {
        const dbUser = this.usersRepo.create({ username })
        const { id: addedUserId } = await this.usersRepo.save(dbUser)
        return addedUserId
    }
}
