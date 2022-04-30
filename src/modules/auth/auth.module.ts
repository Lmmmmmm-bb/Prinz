import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from '../user/user.module';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UserAuth } from './entities/user-auth.entity';

@Module({
  controllers: [AuthController],
  providers: [AuthService],
  imports: [
    UserModule,
    TypeOrmModule.forFeature([UserAuth]),
    JwtModule.registerAsync({
      useFactory: () => ({ secret: process.env.JWT_SECRET }),
    }),
  ],
  exports: [JwtModule, AuthService],
})
export class AuthModule {}
