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
    if (!req.headers.authorization) {
        return false;
    }
    const user = await this.validateToken(req.headers.authorization);
    
    return await this.matchRoles(requiredRoles,user['role'])
  
    
  }

  async validateToken(auth:string){
      
      if (auth.split(' ')[0] !== 'Bearer') {
          throw new HttpException('invalid _token', HttpStatus.FORBIDDEN)
      }
      const token = auth.split(' ')[1]
      try{
          const decode = await  this.authService.generateToken(token);
        return decode
    }catch(err){
        const message = "Token error: " + (err.message || err.name);
        throw new HttpException(message, HttpStatus.FORBIDDEN)
    }

  }

  async matchRoles(requiredRoles,user_role){
    try{

        return  requiredRoles[0] == user_role
  }catch(err){
      const message = "Role error: " + (err.message || err.name);
      throw new HttpException("Role error: ", HttpStatus.FORBIDDEN)
  }
      
  }
}