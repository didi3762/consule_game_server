import { Controller, Get, UseGuards, Req, Res } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthGuard } from '@nestjs/passport';
import { Request } from 'express';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Get('google')
  @UseGuards(AuthGuard('google'))
  googlelogin(){

  }

  @Get('google/callback')
  @UseGuards(AuthGuard('google'))
  googleloginCallBAck(@Req() req:Request ,@Res() res){
    const jwt_token = 'dddd'
        console.log(req);
        // if (jwt_token) {
        //   res.redirect('http://localhost:4200/')
        // }
        // else{
        //   res.redirect('http://localhost:4200/login')
        // }
        return res.send(req.user)
        
  }
}
