import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { Observable, from, of } from 'rxjs';
import { hash , compare } from 'bcrypt'

@Injectable()
export class AuthService {

    constructor(private readonly jwtService: JwtService){}

    async generateJWT(user: CreateUserDto): Promise <string>{
        
        const jwt = await this.jwtService.signAsync({user})
        console.log('i haera',jwt);
        return  await jwt 
    }

    async generateToken(token:string): Promise <string>{
        
        const jwt = await this.jwtService.verify(token)
        // console.log('i verify',jwt);
        return  await {...jwt.user }
    }

    async hashPassword(password:string): Promise <string>{
        return await <string>(hash(password,12))
    }

    async comparePasswords(newPassword:string , passwordHash:string): Promise <any | boolean>{
            return  await <any | boolean>(compare(newPassword,passwordHash))
    }
}
