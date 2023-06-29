import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Req,
  UseGuards,
  SetMetadata,
} from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './model/user.model';
import { CreateUserDto } from './dto/user.create.dto';
import { Request, request } from 'express';
import { UserAuth } from 'src/authentification/user.auth.service';
import { UseLoginDto } from './dto/user.login.dto';
import { JwtAuthGuard } from 'src/authentification/jwt.auth.guard';
import { Role } from 'src/authentification/roles.enum';

import { Reflector } from '@nestjs/core';

@Controller('users')
export class UserController {
  constructor(
    private readonly userService: UserService,
    private readonly authService: UserAuth,
    private reflector: Reflector,
  ) {}

  @Post('/register')
  async register(@Body() createUserDto: CreateUserDto, @Req() req: Request) {
    return await this.userService.createUser(createUserDto, req);
  }

  @Get()
  @UseGuards(JwtAuthGuard)
  /*   @SetMetadata('role', ['admin']) */
  async findAll() {
    return this.userService.findAll();
  }
  @Get(':id')
  async findOneBy(@Param('id') id: number) {
    return this.userService.findUser(id);
  }
  @Post('/login')
  async login(@Body() userlogindto: UseLoginDto) {
    return await this.authService.login(
      userlogindto.email,
      userlogindto.password,
    );
  }
}
