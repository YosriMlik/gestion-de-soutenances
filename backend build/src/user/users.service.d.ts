import { User } from './user.entity';
export declare class UsersService {
    private readonly users;
    findOne(email: string): Promise<User | undefined>;
}
