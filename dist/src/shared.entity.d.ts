import { BaseEntity } from 'typeorm';
import { User } from './users/entities/user.entity';
import { Game } from './games/entities/game.entity';
export declare class Shared extends BaseEntity {
    user_email: string;
    game_id: string;
    user: User;
    game: Game;
}
