import { IsNotEmpty, IsEmail } from "class-validator";

export class createUserDto {
    @IsNotEmpty()
    username: string;

    @IsEmail()
    email: string;
}