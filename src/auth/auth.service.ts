import { Injectable } from '@nestjs/common';
import { LoginUserDto } from './dto/login-user.dto';

@Injectable()
export class AuthService {
  login(payload: LoginUserDto) {
    return payload;
  }

  signup(payload: LoginUserDto) {
    return payload;
  }
}
