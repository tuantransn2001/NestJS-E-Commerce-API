import { Body, Controller, Get, Post } from '@nestjs/common';
import { User as UserDecorator } from '../common/decorator/user.decorator';
import { LoginDTO, RegisterDTO } from '../ts/dto/auth.dto';
import { STATUS_CODE, STATUS_MESSAGE } from '../ts/enums/api_enums';
import { User } from '../ts/interfaces/user.d.type';
import RestFullAPI from '../ts/utils/apiResponse';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}
  @Post('/login')
  public async login(@Body() { email, password }: LoginDTO) {
    return await this.authService.login({ email, password });
  }
  @Post('/register')
  public async register(
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

  @Get('/me')
  public async me(@UserDecorator() user: User) {
    return RestFullAPI.onSuccess(
      STATUS_CODE.STATUS_CODE_200,
      STATUS_MESSAGE.SUCCESS,
      user,
    );
  }
}
