import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { HelloService } from './hello.service';
import { HelloController } from './hello.controller';
import { Hello } from './entities/hello.entity';

@Module({
  controllers: [HelloController],
  providers: [HelloService],
  imports: [TypeOrmModule.forFeature([Hello])],
})
export class HelloModule {}
