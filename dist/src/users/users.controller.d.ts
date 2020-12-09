import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
export declare const storge: {
    storage: any;
};
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    create(createUserDto: CreateUserDto): Promise<{
        email: string;
        user_name: string;
        name: string;
        photo_url: string;
        sum_score: number;
        role: string;
        is_active: boolean;
        scores: import("../score/entities/score.entity").Score[];
    }>;
    loadFile(file: any): Promise<{
        filename: any;
    }>;
    getUploadFile(filename: any, res: any): Promise<any>;
    findAll(): Promise<User[]>;
    logined(query: any): Promise<{
        token: string;
        email: string;
        user_name: string;
        name: string;
        photo_url: string;
        sum_score: number;
        role: string;
        is_active: boolean;
        scores: import("../score/entities/score.entity").Score[];
    }>;
    update(email: string, updateUserDto: UpdateUserDto): Promise<void>;
    sign_out(email: string, updateUserDto: UpdateUserDto): Promise<User>;
    remove(id: string): string;
}
