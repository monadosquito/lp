import { Controller, Body, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from 'src/dtos/create-user.dto';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    @Post('/add')
    public async addUser(@Body() user: CreateUserDto): Promise<number> {
        const addedUserId = await this.usersService.addUser(user)
        return addedUserId
    }
}
