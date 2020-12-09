import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { AuthService } from '.././auth/auth.service';
import { AppGateway } from '.././app.gateway';
export declare class UsersService {
    private readonly repo;
    private authService;
    private gateway;
    constructor(repo: Repository<User>, authService: AuthService, gateway: AppGateway);
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
    findAll(): Promise<User[]>;
    findByMail(_email: string): Promise<{
        email: string;
        user_name: string;
        name: string;
        photo_url: string;
        sum_score: number;
        role: string;
        is_active: boolean;
        scores: import("../score/entities/score.entity").Score[];
    }>;
    findBy(_email: string): Promise<User>;
    update(_email: string, updateUserDto: UpdateUserDto): Promise<void>;
    login(createUserDto: CreateUserDto): Promise<{
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
    validateUser(_email: string, password: string): Promise<{
        email: string;
        user_name: string;
        name: string;
        photo_url: string;
        sum_score: number;
        role: string;
        is_active: boolean;
        scores: import("../score/entities/score.entity").Score[];
    }>;
    sign_out(_email: string): Promise<User>;
    remove(id: number): string;
}
