import { Injectable, CanActivate, ExecutionContext, HttpException, HttpService, HttpStatus } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Role } from './role.enum';
import { ROLES_KEY } from './role.decorator';
import { AuthService } from '../auth/auth.service';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector,private authService: AuthService) {}

   async canActivate(context: ExecutionContext):Promise< boolean> {
    const requiredRoles = this.reflector.get<string[]>('roles', context.getHandler());
    
    // const requiredRoles = this.reflector.getAllAndOverride<Role[]>(ROLES_KEY, [
    //   context.getHandler(),
    //   context.getClass(),
    // ]);
    if (!requiredRoles) {
      
      return true;
    }
    const req = context.switchToHttp().getRequest();
    // console.log(req.headers);
    if (!req.headers.authorization) {
      console.log(req.headers);
        return false;
    }
    const user = await this.validateToken(req.headers.authorization);
    // console.log(user);
    return await this.matchRoles(requiredRoles,user['role'])
  
    
  }

  async validateToken(auth:string){
      
      if (auth.split(' ')[0] !== 'Bearer') {
        console.log(auth.split(' ')[0]);
          throw new HttpException('invalid _token', HttpStatus.FORBIDDEN)
      }
      const token = auth.split(' ')[1]
      try{
          const decode = await  this.authService.generateToken(token);
        return decode
    }catch(err){
      
        const message = "Token error: " + (err.message || err.name);
        console.log(message);
        throw new HttpException(message, HttpStatus.FORBIDDEN)
    }

  }

  async matchRoles(requiredRoles,user_role){
    
      if (requiredRoles[0] == user_role) {
        return true;
      }else{
           throw new HttpException("אין לך הרשאת מנהל", HttpStatus.FORBIDDEN)
      }

      
  }
}