import { UserRegisterDto } from './dto/user-register.dto';
import { User } from './user.entity';
import { IUserService } from './users.services.interface';
import 'reflect-metadata';
import { inject, injectable } from 'inversify';
import { IConfigService } from '../config/config.service.interface';
import { TYPES } from '../types';
import { IUsersRepository } from './users.repositoty.interface';
import { UserModel } from '@prisma/client';

@injectable()
export class UserService implements IUserService {
	constructor(
		@inject(TYPES.ConfigService) private configService: IConfigService,
		@inject(TYPES.UsersRepository) private usersRepository: IUsersRepository,
	) {}
	async createUser({ email, password, name }: UserRegisterDto): Promise<UserModel | null> {
		const newUser = new User(email, name);
		const salt = this.configService.get('SALT');
		await newUser.setPassword(password, Number(salt));
		const existedUser = await this.usersRepository.find(email);
		if (existedUser) {
			return null;
		}
		return this.usersRepository.create(newUser);
	}

	async validateUser(dto: UserRegisterDto): Promise<boolean> {
		return true;
	}
}
