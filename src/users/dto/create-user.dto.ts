import { IsString, IsEmail, IsNumber } from "class-validator"
import { Game } from "src/games/entities/game.entity"
import { Score } from "../../score/entities/score.entity"

export class CreateUserDto {

    @IsString()
    user_name?:string

    @IsString()
    full_name?:string

    @IsEmail()
    email?:string
    
    @IsString()
    password?:string

    @IsString()
    photo_url?:string

    @IsNumber()
    sum_score?:number

    scores?:Score[];
}
