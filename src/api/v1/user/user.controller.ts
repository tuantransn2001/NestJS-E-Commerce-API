import { Controller, Get, Query } from '@nestjs/common';
import { SearchUserDTO } from './dto/SearchUserDTO';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Get('/search')
  public async searchUser(
    @Query()
    searchUserDTO: SearchUserDTO,
  ) {
    return this.userService.handleSearchUser(searchUserDTO);
  }
}
