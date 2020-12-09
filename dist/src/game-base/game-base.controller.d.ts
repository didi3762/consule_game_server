import { GameBaseService } from './game-base.service';
import { CreateGameBaseDto } from './dto/create-game-base.dto';
import { UpdateGameBaseDto } from './dto/update-game-base.dto';
export declare class GameBaseController {
    private readonly gameBaseService;
    constructor(gameBaseService: GameBaseService);
    create(createGameBaseDto: CreateGameBaseDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateGameBaseDto: UpdateGameBaseDto): string;
    remove(id: string): string;
}
