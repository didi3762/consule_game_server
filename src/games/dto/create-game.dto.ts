import { IsString } from "class-validator"

export class CreateGameDto {

    
    @IsString()
    name?:string

    @IsString()
    description?:string

    @IsString()
    user_email?:string

    @IsString()
    photo_url?:string

    @IsString()
    html_url?:string
}
