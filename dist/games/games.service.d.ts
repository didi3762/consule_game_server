import { CreateGameDto } from './dto/create-game.dto';
import { UpdateGameDto } from './dto/update-game.dto';
import { Repository } from 'typeorm';
import { Game } from './entities/game.entity';
import { UsersService } from '../users/users.service';
import { Observable } from 'rxjs';
import { Pagination, IPaginationOptions } from 'nestjs-typeorm-paginate';
export declare class GamesService {
    private readonly repo;
    private readonly userSvc;
    constructor(repo: Repository<Game>, userSvc: UsersService);
    create(createGameDto: CreateGameDto): Promise<Game>;
    findAll(): Promise<Game[]>;
    findUsers(_start: any): Promise<Game[]>;
    updateOne(id: number, game: Game): Observable<any>;
    paginateAll(options: IPaginationOptions): Observable<Pagination<Game>>;
    paginateByUser(options: IPaginationOptions, game_name: number): Observable<Pagination<Game>>;
    findOne(id: number): string;
    update(id: number, updateGameDto: UpdateGameDto): string;
    remove(id: number): Promise<Game[]>;
}
