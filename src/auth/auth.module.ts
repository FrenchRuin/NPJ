import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { AuthProviders } from './auth.providers';
import { DatabaseModule } from 'src/db/database.module';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from './jwt.strategy';

@Module({
  imports: [
    DatabaseModule,
    PassportModule.register({ defaultStrategy: 'jwt' }), // passport
    JwtModule.register({
      // jwt
      secret: 'Secret1234',
      signOptions: {
        expiresIn: 3600,
      },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, ...AuthProviders, JwtStrategy],
  exports: [JwtStrategy, PassportModule],
})
export class AuthModule {}
