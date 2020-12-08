import { Injectable, CanActivate, ExecutionContext, HttpStatus, HttpException } from "@nestjs/common";
import { UsersService } from "./users.service";

@Injectable()
export class ExisstingGuard implements CanActivate {
  constructor(private userService: UsersService) {}

   async canActivate(context: ExecutionContext):Promise< boolean> {
    const req = context.switchToHttp().getRequest();
    const check_user = await this.userService.findByMail(req.body.email);
    if (check_user) {
      console.log(check_user);
      
      throw new HttpException("כתובת אמייל כבר קיימת במערכת!!! ", HttpStatus.FORBIDDEN)
    }
    
   
      return true;
    

  
    
  }

  
}