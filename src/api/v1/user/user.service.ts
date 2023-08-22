import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { SearchUserDTO } from './dto/SearchUserDTO';
import { User } from '../ts/interfaces/user.d.type';
import { getAllRecordHandler } from '../common';
import { MODEL_NAME } from '../ts/enums/model_enums';

@Injectable()
export class UserService {
  constructor(
    @Inject(MODEL_NAME.USER)
    private userModel: Model<User>,
  ) {}

  public async handleSearchUser(payload: SearchUserDTO) {
    const { name, page_number, page_size } = payload;

    const searchQuery = { firstName: { $regex: name, $options: 'i' } };

    const result = await getAllRecordHandler(
      this.userModel,
      {
        page_number,
        page_size,
      },
      ['id', 'firstName', 'avatar', 'type'],
      searchQuery,
    );

    return result;
  }
}
