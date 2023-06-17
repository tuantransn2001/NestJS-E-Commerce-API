import { Body, Controller, Post } from '@nestjs/common';
import { LoginDTO } from '../ts/dto/auth.dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/login')
  async login(@Body() { email, password }: LoginDTO) {
    return this.authService.login({ email, password });
  }
}
