import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { CognitoJwtStrategy } from './cognito-jwt.strategy';

@Module({
  imports: [PassportModule],
  providers: [CognitoJwtStrategy],
  exports: [PassportModule],
})
export class AuthModule {}
