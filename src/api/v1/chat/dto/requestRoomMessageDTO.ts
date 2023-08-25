import { User } from '../../ts/interfaces/conversation.d.type';

export class RequestRoomMessageDTO {
  id: string;
  members?: User[];
}
