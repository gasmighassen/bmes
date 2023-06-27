import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './model/user.model';
import { CreateUserDto } from './dto/user.create.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async create(createuserdto: CreateUserDto) {
    return this.userRepository.save(createuserdto);
  }

  async findUser(id: number) {
    return await this.userRepository.findOne({
      where: { id: id },
    });
  }

  async findAll() {
    return this.userRepository.find();
  }
}
