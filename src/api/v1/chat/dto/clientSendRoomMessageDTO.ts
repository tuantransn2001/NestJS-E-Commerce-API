import { Member, Message } from '../../ts/interfaces/conversation.d.type';

export class ClientSendRoomMessDTO {
  conversationID?: string;
  members: Member[];
  message: Message;
}
