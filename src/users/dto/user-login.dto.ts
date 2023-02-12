import { IsEmail, IsString } from 'class-validator';

export class UserLoginDto {
	@IsEmail({}, { message: 'Не верный email' })
	email: string;

	@IsString({ message: 'Не указан логин' })
	password: string;
}
