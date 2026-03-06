import { Controller, Get, Post, Put, Delete } from '@nestjs/common';
import { UserService } from './user.service';
import { LoginDto } from '../dto/login.dto';
import { RegisterDto } from '../dto/register.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('login')
  async login(loginDto: LoginDto): Promise<string> {
    const login = this.userService.login(loginDto);

    return 'A';
  }

  @Post('register')
  async register(registerDto: RegisterDto): Promise<string> {
    const register = this.userService.register(registerDto);
    return 's';
  }
}
