import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { getTypeOrmConfig } from 'src/common/configs/typeorm.config';
import { configModuleOptions } from 'src/common/configs/config.config';
import { HelloModule } from 'src/modules/hello/hello.module';

@Module({
  imports: [
    ConfigModule.forRoot(configModuleOptions),
    TypeOrmModule.forRoot(getTypeOrmConfig()),
    HelloModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
