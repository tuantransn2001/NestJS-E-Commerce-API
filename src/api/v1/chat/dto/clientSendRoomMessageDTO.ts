import { Message, User } from '../../ts/interfaces/conversation.d.type';

export class ClientSendRoomMessDTO {
  conversationID?: string;
  members: User[];
  message: Message;
}
