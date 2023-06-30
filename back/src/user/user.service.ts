import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './model/user.model';
import { CreateUserDto } from './dto/user.create.dto';
import * as bcrypt from 'bcrypt';
import { Request } from 'express';
@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}


  async findUser(id: number) {
    return await this.userRepository.findOne({
      where: { id: id },
    });
  }

  async findAll() {
    return this.userRepository.find();
  }

  // Register user
  async createUser(createUserDto: CreateUserDto, req: Request) {
    const verifyEmail = await this.userRepository.findOne({
      where: { email: createUserDto.email },
    });
    if (verifyEmail === null) {
      const hashPassword = await bcrypt.hash(createUserDto.password, 10);

      const user = await this.userRepository.save({
        ...createUserDto,
        password: hashPassword,
      });
      return user;
    } else throw new BadRequestException('email exist');
  }

  async login(email: string,password:string) {
    const loginUser = await this.userRepository.findOneBy({ email });
    if (!loginUser) {
      throw new BadRequestException('invalid email or password');
    }
    return loginUser;
  }
}
