import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}

  findUserById(id: number) {
    return this.userRepository.findOne(id);
  }

  create(createUserdto: CreateUserDto) {
    return this.userRepository.save(createUserdto);
  }

  delete(id: string) {
    return this.userRepository.delete(id);
  }
}
