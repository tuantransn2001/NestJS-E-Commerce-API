import { User } from '../ts/interfaces/common';
import { v4 as uuidv4 } from 'uuid';
import { USER_ROLE } from '../ts/enums/user_enum';
import {
  randomIntFromInterval,
  randomStringByCharsetAndLength,
} from '../common';

export const USER_ARRAY: User[] = [];

for (let index = 0; index < 49; index++) {
  const userType = index % 2 === 0 ? USER_ROLE.CUSTOMER : USER_ROLE.GUEST;
  const newUser: User = {
    id: uuidv4(),
    type: userType,
    firstName:
      userType + ' ' + randomStringByCharsetAndLength('alphabetic', 4, false),
    lastName:
      userType + ' ' + randomStringByCharsetAndLength('alphabetic', 4, false),
    address: `Số nhà ${randomIntFromInterval(
      1,
      100,
    )},địa chỉ: ${randomStringByCharsetAndLength(
      'alphabetic',
      10,
      false,
    )},Tp.HCM`,
    email: `${randomStringByCharsetAndLength(
      'alphabetic',
      4,
      false,
    )}@gmail.com`,
    phoneNumber: `0${randomStringByCharsetAndLength('numeric', 9, false)}`,
    password: randomStringByCharsetAndLength('alphabetic', 8, true),
  };

  USER_ARRAY.push(newUser);
}
