import { Injectable } from '@nestjs/common';
import { LoginDto } from '../dto/login.dto';
import { RegisterDto } from '../dto/register.dto';

@Injectable()
export class UserService {
  login(loginDto: LoginDto): string {
    return 'Hello World!';
  }

  register(registerDto: RegisterDto): string {
    return 'Hello World!';
  }
}
