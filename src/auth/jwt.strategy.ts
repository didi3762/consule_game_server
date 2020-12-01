import { Injectable } from "@nestjs/common";
import { Strategy, ExtractJwt } from "passport-jwt";
import { PassportStrategy } from "@nestjs/passport";
import { ConfigService } from "@nestjs/config";

@Injectable()
export class JwtStrategy
//  extends PassportStrategy(Strategy)
  {

    constructor(private confgService:ConfigService){
        // super({
        //     jwtFromRequest: ExtractJwt.fromHeader('authorization'),
        //     secretOrKey : confgService.get('JWT_SECRET')
        // })
    }
}
