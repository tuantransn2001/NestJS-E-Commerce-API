import { OnGatewayConnection, OnGatewayDisconnect } from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { ChatService } from './chat.service';
import { ClientJoinRoomDTO } from './dto/clientJoinRoomDTO';
import { ClientSendRoomMessDTO } from './dto/clientSendRoomMessageDTO';
import { TypingDTO } from './dto/typingDTO';
import { DeleteMessageDTO } from './dto/deleteMessageDTO';
import { DeleteConversationDTO } from './dto/deleteConversationDTO';
import { RequestContactListDTO } from './dto/requestContactListDTO';
import { RequestRoomMessageDTO } from './dto/requestRoomMessageDTO';
export declare class ChatGateway implements OnGatewayConnection, OnGatewayDisconnect {
    private chatService;
    private readonly logger;
    webSocketServer: Server;
    constructor(chatService: ChatService);
    handleConnection(client: Socket): void;
    handleDisconnect(client: Socket): void;
    listenClientJoinRoom({ roomID }: ClientJoinRoomDTO): void;
    listenClientRequestRoomMessage(requestRoomMessageDTO: RequestRoomMessageDTO): Promise<boolean>;
    listenClientRequestContactList(requestContactListDTO: RequestContactListDTO): Promise<void>;
    listenClientSendRoomMessage(payload: ClientSendRoomMessDTO): Promise<void>;
    listenUserTyping(payload: TypingDTO): Promise<void>;
    listenUserDeleteMessageByID(payload: DeleteMessageDTO): Promise<void>;
    listenUserDeleteConversationByID(payload: DeleteConversationDTO): Promise<void>;
}
