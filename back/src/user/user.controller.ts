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

import { LocalAuthGuard } from 'src/authentification/local-auth.guard';
import { LocalStrategy } from 'src/authentification/local.strategy';
import { GetUser } from './user.decorator';

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
  @UseGuards(JwtAuthGuard)
  @Get('/current')
  async currentUser(@GetUser() user: User) {
    const currentUser = await this.userService.findUser(user.id);
    return currentUser;
  }

  @UseGuards(LocalStrategy)
  @Post('/login')
  async login(@Body() userlogindto: UseLoginDto) {
    return await this.authService.login(
      userlogindto.email,
      userlogindto.password,
    );
  }
}
