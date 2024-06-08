import { IsString, IsArray } from "class-validator";


export class CreateChatDto {
    @IsString()
    name: string

    @IsArray()
    users: number[]
}
