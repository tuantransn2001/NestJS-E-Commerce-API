import { Message, User } from '../../ts/interfaces/conversation.d.type';
export declare class ClientSendRoomMessDTO {
    conversationID?: string;
    members: User[];
    message: Message;
}
