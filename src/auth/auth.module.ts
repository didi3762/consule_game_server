import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt'
import { PassportModule } from '@nestjs/passport';
import { GoogleStrategy } from './google.strategy';
import { JwtStrategy } from './jwt.strategy';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    JwtModule.registerAsync({
      useFactory: () => ({
        secret:'secret',
        signOptions: {expiresIn:'1h'}
      })
    }),
    PassportModule.register({ defaultStrategy: 'jwt'}),
    ConfigModule
  ],
  controllers: [AuthController],
  providers: [AuthService,GoogleStrategy,JwtStrategy,ConfigService],
  exports: [PassportModule,AuthService,GoogleStrategy,JwtStrategy,ConfigService,JwtModule]
})
export class AuthModule {}
