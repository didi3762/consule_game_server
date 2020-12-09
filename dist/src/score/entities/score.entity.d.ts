import { User } from '../../users/entities/user.entity';
export declare class Score {
    id: number;
    game_name: string;
    user_score: number;
    user: User;
}
