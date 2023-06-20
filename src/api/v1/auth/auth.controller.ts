import { Body, Controller, Post } from '@nestjs/common';
import { LoginDTO, RegisterDTO } from '../ts/dto/auth.dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/login')
  async login(@Body() { email, password }: LoginDTO) {
    return await this.authService.login({ email, password });
  }
  @Post('/register')
  async register(
    @Body()
    {
      type,
      firstName,
      lastName,
      address,
      email,
      phoneNumber,
      password,
    }: RegisterDTO,
  ) {
    return await this.authService.register({
      type,
      firstName,
      lastName,
      address,
      email,
      phoneNumber,
      password,
    });
  }
}
