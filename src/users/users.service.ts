import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { UsersRepository } from './users.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, DeleteResult } from 'typeorm';
import { AuthService } from '.././auth/auth.service';
import { switchMap } from 'rxjs/operators';
import e from 'express';
import { AppGateway } from '.././app.gateway';
import { GamesService } from '../games/games.service';

@Injectable()
export class UsersService {

  constructor(
    @InjectRepository(User)
   private readonly repo:Repository<User>,
   private authService:AuthService,
   private gateway: AppGateway,
   ){}

  public async create(createUserDto: CreateUserDto) {
    const passwordHash = await this.authService.hashPassword(createUserDto.password)
    const new_user = new User();
    new_user.email = createUserDto.email;
    new_user.user_name = createUserDto.user_name;
    new_user.name= createUserDto.full_name;
    new_user.password =  passwordHash;
    new_user.scores= createUserDto.scores;
    new_user.photo_url = createUserDto.photo_url
    new_user.is_active = true
    console.log(new_user);
    
    this.gateway.server.emit('new_user', new_user)
    const user = await this.repo.save(new_user);
    const {password, ...result} =  user;
     return result
  }

  public async findAll() {
    const users = await this.repo.find();
    users.forEach(function (e) {delete e.password})
    return users
  }

  public async findByMail(_email: string) {
    const user = await this.findBy(_email);
    if (user) {
      const {password, ...result} =  user;
      return result
    }
    return
    
  }

  public async findBy(_email: string) {
    return await this.repo.findOne(_email,{relations: ["scores"]});
  }

  public async update(_email: string, updateUserDto: UpdateUserDto) {
    const user = await this.repo.findOne(_email,{relations:['scores']});
    
    
   if (user.role!='admin') {
    user.sum_score = updateUserDto.sum_score;
    user.scores = updateUserDto.scores;
    user.save()
     
   }
    
    
  }

 

  async login(createUserDto: CreateUserDto){
    const user = await this.validateUser(createUserDto.email,createUserDto.password); 
    if (user) {
      const token = await this.authService.generateJWT(user)
      return {...user,token}
    }else{
      console.log('Wrong Credentials');
      
      // return {message:'סיסמא שגויה'}
    }
  }

  async validateUser(_email: string , password:string){
    const user = await this.repo.findOne(_email,{relations: ["scores"]});
    if (user) {
      const match = await this.authService.comparePasswords(password,user.password)
    if (match) {
      user.is_active = true;
      user.save()
      const {password, ...result} =  user;
      return result
    }else{
      console.log('error');
      // throw Error;
      
    }
    }
    
  }

  public async sign_out(_email: string){
    console.log(_email);
    
    const user = await this.repo.findOne(_email,{relations:['scores']});
    user.is_active = false
    user.save()
    const user_default = await this.repo.findOne("d@default.com",{relations:['scores']});
    return user_default

  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
