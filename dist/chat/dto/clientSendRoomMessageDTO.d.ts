import { Member, Message } from '../../ts/interfaces/conversation.d.type';
export declare class ClientSendRoomMessDTO {
    conversationID?: string;
    members: Member[];
    message: Message;
}
