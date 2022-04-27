import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateHelloDto } from './dto/create-hello.dto';
import { UpdateHelloDto } from './dto/update-hello.dto';
import { Hello } from './entities/hello.entity';

@Injectable()
export class HelloService {
  constructor(
    @InjectRepository(Hello) private helloRepository: Repository<Hello>,
  ) {}

  create(createHelloDto: CreateHelloDto) {
    console.log(createHelloDto);
    return 'This action adds a new hello';
  }

  findAll() {
    return this.helloRepository.find();
  }

  findOne(id: number) {
    return this.helloRepository.findOne(id);
  }

  update(id: number, updateHelloDto: UpdateHelloDto) {
    console.log(updateHelloDto);
    return `This action updates a #${id} hello`;
  }

  remove(id: number) {
    return `This action removes a #${id} hello`;
  }
}
