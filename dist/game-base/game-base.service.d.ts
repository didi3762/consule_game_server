import { CreateGameBaseDto } from './dto/create-game-base.dto';
import { UpdateGameBaseDto } from './dto/update-game-base.dto';
export declare class GameBaseService {
    create(createGameBaseDto: CreateGameBaseDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateGameBaseDto: UpdateGameBaseDto): string;
    remove(id: number): string;
}
