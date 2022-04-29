import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { getTypeOrmConfig } from 'src/configs/typeorm.config';
import { configModuleOptions } from 'src/configs/config.config';
import { HelloModule } from 'src/modules/hello/hello.module';
import { UserModule } from 'src/modules/user/user.module';
import { TodoModule } from 'src/modules/todo/todo.module';
import { AuthModule } from 'src/modules/auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot(configModuleOptions),
    TypeOrmModule.forRoot(getTypeOrmConfig()),
    UserModule,
    TodoModule,
    HelloModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
