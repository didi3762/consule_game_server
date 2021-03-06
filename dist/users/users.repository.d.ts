import { CreateUserDto } from "./dto/create-user.dto";
import { User } from "./entities/user.entity";
import { Repository } from "typeorm";
export declare class UsersRepository extends Repository<User> {
    createNewPlayer(createUserDto: CreateUserDto): Promise<User>;
    getall(): Promise<User[]>;
}
