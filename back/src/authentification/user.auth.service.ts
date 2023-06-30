import { BadRequestException, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from '../user/user.service';
import * as bcrypt from 'bcrypt';
import * as dotenv from 'dotenv';
import { User } from '../user/model/user.model';
import { JwtPayload } from './jwt.payload';
dotenv.config();

@Injectable()
export class UserAuth {
  constructor(
    private readonly userService: UserService,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, password: string) {
    const user = await this.userService.login(email, password);
    // comparaison password
    if (await bcrypt.compare(password, user.password)) {
      //delete password for security reason
      delete user.password;
      // return user login
      return user as User;
    }
    return null;
  }
  async login(email: string, password: string) {
    const userData = await this.validateUser(email, password);
    if (userData === null) {
      throw new BadRequestException('invalid credentials');
    }
    const payload: JwtPayload = {
      id: userData.id,
      email: userData.email,
      username: userData.username,
      city: userData.city,
      phone: userData.phone,
      role: userData.role,
    };
    const result = {
      access_token: await this.jwtService.signAsync(payload, {
        secret: process.env.JWT_SECRET,
      }),
      payload,
    };
    console.log(result.access_token);
    return result;
  }
}
