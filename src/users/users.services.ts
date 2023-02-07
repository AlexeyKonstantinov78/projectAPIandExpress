import { UserRegisterDto } from './dto/user-register.dto';
import { User } from './user.entity';
import { IUserService } from './users.services.interface';
import 'reflect-metadata';
import { inject, injectable } from 'inversify';
import { IConfigService } from '../config/config.service.interface';
import { TYPES } from '../types';

@injectable()
export class UserService implements IUserService {
	constructor(@inject(TYPES.ConfigService) private ConfigService: IConfigService) {}
	async createUser({ email, password, name }: UserRegisterDto): Promise<User | null> {
		const newUser = new User(email, name);
		const salt = this.ConfigService.get('SALT');
		console.log(salt);
		await newUser.setPassword(password, Number(salt));
		return null;
	}

	async validateUser(dto: UserRegisterDto): Promise<boolean> {
		return true;
	}
}
