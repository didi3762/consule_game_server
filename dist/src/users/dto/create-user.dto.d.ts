import { Score } from "../../score/entities/score.entity";
export declare class CreateUserDto {
    user_name?: string;
    full_name?: string;
    email?: string;
    password?: string;
    photo_url?: string;
    sum_score?: number;
    scores?: Score[];
}
