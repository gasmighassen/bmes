import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './model/user.model';
import { CreateUserDto } from './dto/user.create.dto';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('/create')
  async create(@Body() createuserdto: CreateUserDto) {
    return this.userService.create(createuserdto);
  }

  @Get()
  async findAll() {
    return this.userService.findAll();
  }
  @Get(':id')
  async findOneBy(@Param('id') id: number) {
    return this.userService.findUser(id);
  }
}
