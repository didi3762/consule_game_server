import { Injectable } from '@nestjs/common';
import { CreateGameDto } from './dto/create-game.dto';
import { UpdateGameDto } from './dto/update-game.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Game } from './entities/game.entity';
import { UsersService } from '../users/users.service';
import { UpdateUserDto } from '../users/dto/update-user.dto';
import { Observable, from } from 'rxjs';
import { switchMap, map } from 'rxjs/operators';
import { Pagination, IPaginationOptions, paginate } from 'nestjs-typeorm-paginate';

@Injectable()
export class GamesService {

  constructor(
    @InjectRepository(Game)
   private readonly repo:Repository<Game>,
   private readonly userSvc:UsersService){}


   public async create(createGameDto: CreateGameDto) {
     console.log(createGameDto);
     
    const new_game = new Game();
    new_game.name = createGameDto.name;
    new_game.description = createGameDto.description;
    new_game.photo_url = createGameDto.photo_url;
    new_game.html_url= createGameDto.html_url;
   return await this.repo.save(new_game)
  }

  async findAll() {
     const games = await this.repo.find();
      return games
  }

  async findUsers(_start){
     const games = await this.repo.find();
     const filter = await games.filter(game=> game.name.includes(_start))
    console.log(filter);
    
    // const games_ad = await games.find(game=>{
    //   game['user']['email'] == _email
    // })
    // console.log(games_ad);
    
    return await filter
  }

  updateOne(id: number, game: Game): Observable<any> {
    delete game.name;
    delete game.description;
    // delete user.role;

    return from(this.repo.update(id, game)).pipe(
        switchMap(() => this.findOne(id))
    );
}

paginateAll(options: IPaginationOptions): Observable<Pagination<Game>> {
  return from(paginate<Game>(this.repo, options, {
      // relations: ['author']
  })).pipe(
      map((gameEntries: Pagination<Game>) => gameEntries)
  )
}

paginateByUser(options: IPaginationOptions, game_name: number): Observable<Pagination<Game>> {
  return from(paginate<Game>(this.repo, options, {
      // relations: ['author'],
      where: [
          {name: game_name}
      ]
  })).pipe(
      map((gameEntries: Pagination<Game>) => gameEntries)
  )
}

  findOne(id: number) {
    return `This action returns a #${id} game`;
  }

  update(id: number, updateGameDto: UpdateGameDto) {
    return `This action updates a #${id} game`;
  }

  async remove(id: number) {
     await this.repo.delete(id);
     return await this.repo.find()
  }
}
