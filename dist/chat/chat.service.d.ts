import { Model } from 'mongoose';
import { Server } from 'socket.io';
import { ObjectType } from '../ts/types/common';
import { Conversation, Member } from '../ts/interfaces/conversation.d.type';
import { ClientSendRoomMessDTO } from './dto/clientSendRoomMessageDTO';
import { DeleteMessageDTO } from './dto/deleteMessageDTO';
import { TypingDTO } from './dto/typingDTO';
import HttpException from '../utils/http.exception';
import { DeleteConversationDTO } from './dto/deleteConversationDTO';
export declare class ChatService {
    private conversationModel;
    constructor(conversationModel: Model<Conversation>);
    handleClientJoinRoom<D extends ObjectType, S extends Server>({ roomID }: D, server: S): void;
    handleClientSendRoomMessage<D extends ClientSendRoomMessDTO, S extends Server>({ conversationID, message }: D, server: S): Promise<void>;
    private handleFilterMessageAlreadyExist;
    handleGetAllMessageByConversationID(id: string): Promise<{
        statusCode: number;
        message: string;
        data: any;
    } | {
        statusCode: number;
        error: HttpException;
    }>;
    handleClientSendFirstRoomMessage<D extends ClientSendRoomMessDTO, S extends Server>({ members, message }: D, server: S): Promise<void>;
    deleteConversation<D extends DeleteConversationDTO, S extends Server>({ id }: D, server: S): Promise<void>;
    deleteMessageConversation<D extends DeleteMessageDTO, S extends Server>({ conversationID, messageID }: D, server: S): Promise<void>;
    private handleGetLastMessage;
    handleGetContactList<D extends Member, S extends Server>({ id }: D, server: S): Promise<void>;
    typing<D extends TypingDTO, S extends Server>({ sender, isTyping }: D, server: S): Promise<void>;
}
