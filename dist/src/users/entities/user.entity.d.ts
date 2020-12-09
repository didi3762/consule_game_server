import { BaseEntity } from 'typeorm';
import { Score } from '../../score/entities/score.entity';
export declare class User extends BaseEntity {
    email: string;
    user_name: string;
    name: string;
    password: string;
    photo_url: string;
    sum_score: number;
    role: string;
    is_active: boolean;
    scores: Score[];
    emailToLowerCase(): void;
}
