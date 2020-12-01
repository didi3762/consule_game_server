import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from "passport-google-oauth20";
import { validate } from "class-validator";
import { ConfigService } from "@nestjs/config";

@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy, 'google') {


    constructor(private confgService:ConfigService){
        super({
            clientID:'195579605398-jfg770im6mvnig5i80craednl1ci1c93.apps.googleusercontent.com'
            //  confgService.get('CLIENT_ID')
             ,
            clientSecret: 'g44D0SMiv8yzdShSR-_uAvxY',
            callbackURL: 'http://localhost:3000/auth/google/callback',
            passReqToCallBack: true,
            scope:['profile']
        })

        
    }

    async validate(request: any, accessToken:string, refreshToken:string, profile , done:Function){
          try {
              console.log(profile);
              done(null, profile)
          } catch (err) {
              done()
          }  
    }

}
