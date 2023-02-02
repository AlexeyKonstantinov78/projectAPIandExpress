import { UserRegisterDto } from './dto/user-register.dto';
import { User } from './user.entity';
import { IUserService } from './users.services.interface';
import 'reflect-metadata';
import { injectable } from 'inversify';

@injectable()
export class UserService implements IUserService {
	async createUser({ email, password, name }: UserRegisterDto): Promise<User | null> {
		const newUser = new User(email, name);
		await newUser.setPassword(password);
		return null;
	}

	async validateUser(dto: UserRegisterDto): Promise<boolean> {
		return true;
	}
}
