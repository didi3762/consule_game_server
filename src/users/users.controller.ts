import { Controller, Get, Post, Body, Put, Param, Delete , Query, Req, UseInterceptors, UploadedFile, Res} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Request } from 'express';
import { diskStorage } from 'multer';
import { FileInterceptor } from '@nestjs/platform-express';
import * as path from 'path';
import {v4 as uuidv4} from 'uuid';
import { join } from 'path'
import { Observable, from } from 'rxjs';
import { User } from './entities/user.entity';
import { map } from 'rxjs/operators';

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

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
 public async create(@Body() createUserDto: CreateUserDto) {
    const player = await this.usersService.create(createUserDto);
    
    return player
  }

  @Post('upload')
  @UseInterceptors(FileInterceptor('uploadfile',storge))
 public async loadFile(@UploadedFile() file) {
    return { filename: file.filename }
  }

  @Get('/get_upload/:filename')
 public async getUploadFile(@Param('filename') filename,@Res() res) {
    return await res.sendFile(join(process.cwd(),'uploads/profileimages', filename))
  }


  // @Get()
  // index(
  //   @Query('page') page:number = 1,
  //   @Query('limit') limit:number = 10,
  //   @Query('username') username:string
  // ): Observable<Pagination<User>> {
  //   limit = limit > 100 ? 100 : limit;

  //   if (username === null || username === undefined) {
  //     return from(paginate<User>).pipe(
  //       map((usersPageAble:Pagination<User>) =>{
  //         usersPageAble.items.forEach((v) => {delete v.password})
  //         return usersPageAble
  //       })
  //     ))
  //   }else{
  //     return from()
  //   }
      
  // }
 


  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  // @Get(':email')
  // findOne(@Param('email') email: string) {
  //    return this.usersService.findByMail(email);
  // }

  @Get('/login')
  async logined(@Query() query) {
    console.log(query);
    
     return await this.usersService.login(query);
  }

  @Put(':email')
  update(@Param('email') email: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(email, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }
}
