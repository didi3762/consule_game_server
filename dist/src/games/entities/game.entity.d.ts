import { BaseEntity } from 'typeorm';
export declare class Game extends BaseEntity {
    id: number;
    name: string;
    description: string;
    sum_enteries: number;
    user_email: string;
    user_score: number;
    photo_url: string;
    html_url: string;
}
