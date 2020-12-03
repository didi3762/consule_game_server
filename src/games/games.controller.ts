import { Controller, Get, Post, Body, Put, Param, Delete, Res, Query, UseInterceptors, UploadedFile, Request, UseGuards } from '@nestjs/common';
import { GamesService } from './games.service';
import { CreateGameDto } from './dto/create-game.dto';
import { UpdateGameDto } from './dto/update-game.dto';
import { diskStorage } from 'multer';
import { v4 as uuidv4 } from 'uuid';
import * as path from 'path';
import { join} from 'path';
import { FileInterceptor } from '@nestjs/platform-express';
import { Observable, of } from 'rxjs';
import { Game } from './entities/game.entity';
import { tap, map } from 'rxjs/operators';
import { Roles } from './role.decorator';
import { Role } from './role.enum';
import { RolesGuard } from './role.guard';

export const GAME_ENTRIES_URL ='http://localhost:3000/games';

export const storge = {
  storage: diskStorage({
    destination:'./uploads/profileimages',
    filename: (req, file , cb) => {
      const filenme: string = path.parse(file.originalname).name.replace(/\s/g,'') + uuidv4();
      const extension: string = path.parse(file.originalname).ext;
        cb(null , `${filenme}${extension}`)
    }
  })
}

@Controller('games')
@UseGuards(RolesGuard)
export class GamesController {
  constructor(private readonly gamesService: GamesService) {}

  @Roles(Role.Admin)
  @Post()
  public async create(@Body() createGameDto: CreateGameDto) {
    return await this.gamesService.create(createGameDto);
  }

 
    @Post('upload')
    @UseInterceptors(FileInterceptor('uploadfile', storge))
    uploadFile(@UploadedFile() file, @Request() req){
        // const user: Game = req.user;
        console.log(file);
        

        return { filename: file.filename }

        // return this.gamesService.updateOne(user.id, {profileImage: file.filename}).pipe(
        //     tap((game: Game) => console.log(user)),
        //     map((game:Game) => ({profileImage: game.profileImage}))
        // )
    }

    @Get()
    public async getall() {
         return await this.gamesService.findAll()
    }

    
    @Get('paginittion/')
    index(
        @Query('page') page: number = 1,
        @Query('limit') limit: number = 10
    ) {
        limit = limit > 100 ? 100 : limit;
        

        return this.gamesService.paginateAll({
            limit: Number(limit),
            page: Number(page),
            route: GAME_ENTRIES_URL
        })
    }

    @Get('user/:user')
    indexByUser(
        @Query('page') page: number = 1,
        @Query('limit') limit: number = 10,
        @Param('user') game_name: number
    ) {
        limit = limit > 100 ? 100 : limit;

        return this.gamesService.paginateByUser({
            limit: Number(limit),
            page: Number(page),
            route: GAME_ENTRIES_URL + '/user/' + game_name
        }, Number(game_name))
    }

    @Get('image/:imagename')
    findImage(@Param('imagename') imagename, @Res() res): Observable<Object> {
        return of(res.sendFile(join(process.cwd(), 'uploads/profileimages/' + imagename)));
    }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.gamesService.findUsers(id);
  // }

  @Get('/search')
  getSearch(@Query('startsWith') start: string) {
    console.log(start);
    
    return this.gamesService.findUsers(start);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateGameDto: UpdateGameDto) {
    return this.gamesService.update(+id, updateGameDto);
  }

  @Roles(Role.Admin)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.gamesService.remove(+id);
  }
}
