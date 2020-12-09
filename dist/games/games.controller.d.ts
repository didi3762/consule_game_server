import { GamesService } from './games.service';
import { CreateGameDto } from './dto/create-game.dto';
import { UpdateGameDto } from './dto/update-game.dto';
import { Observable } from 'rxjs';
import { Game } from './entities/game.entity';
export declare const GAME_ENTRIES_URL = "http://localhost:3000/games";
export declare const storge: {
    storage: any;
};
export declare class GamesController {
    private readonly gamesService;
    constructor(gamesService: GamesService);
    create(createGameDto: CreateGameDto): Promise<Game>;
    uploadFile(file: any, req: any): {
        filename: any;
    };
    getall(): Promise<Game[]>;
    index(page?: number, limit?: number): Observable<import("nestjs-typeorm-paginate").Pagination<Game>>;
    indexByUser(page: number, limit: number, game_name: number): Observable<import("nestjs-typeorm-paginate").Pagination<Game>>;
    findImage(imagename: any, res: any): Observable<Object>;
    getSearch(start: string): Promise<Game[]>;
    update(id: string, updateGameDto: UpdateGameDto): string;
    remove(id: string): Promise<Game[]>;
}
