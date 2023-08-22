import {
  ConnectedSocket,
  MessageBody,
  OnGatewayConnection,
  OnGatewayDisconnect,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Logger } from '@nestjs/common';
import { Server, Socket } from 'socket.io';
import { ChatService } from './chat.service';
import { ClientJoinRoomDTO } from './dto/clientJoinRoomDTO';
import { ClientSendRoomMessDTO } from './dto/clientSendRoomMessageDTO';
import { TypingDTO } from './dto/typingDTO';
import { DeleteMessageDTO } from './dto/deleteMessageDTO';
import { DeleteConversationDTO } from './dto/deleteConversationDTO';
import { EVENTS } from '../common/constants/common';
import { RequestContactListDTO } from './dto/requestContactListDTO';
import { RequestRoomMessageDTO } from './dto/requestRoomMessageDTO';
@WebSocketGateway({ cors: true })
export class ChatGateway implements OnGatewayConnection, OnGatewayDisconnect {
  private readonly logger = new Logger();

  @WebSocketServer()
  webSocketServer: Server;
  constructor(private chatService: ChatService) {}
  // ? ====================================================
  // ? ===================== CONNECT ====================== /* =>> DONE
  // ? ====================================================
  public handleConnection(@ConnectedSocket() client: Socket) {
    this.logger.log(`⚡: Client is connected { id: ${client.id} }`);
  }
  // ? ====================================================
  // ? ==================== DISCONNECT ==================== /* =>> DONE
  // ? ====================================================
  public handleDisconnect(@ConnectedSocket() client: Socket) {
    this.logger.log(`⚡️: Client disconnected { id: ${client.id} }`);
  }
  // ? ====================================================
  // ? ==================== JOIN ROOM ===================== /* =>> DONE
  // ? ====================================================
  @SubscribeMessage(EVENTS.CLIENT.JOIN_ROOM)
  public listenClientJoinRoom(@MessageBody() { roomID }: ClientJoinRoomDTO) {
    this.logger.log(`client join room with roomID:${roomID}`);
    return this.chatService.handleClientJoinRoom(
      { roomID },
      this.webSocketServer,
    );
  }
  // ? ====================================================
  // ? =============  REQUEST ALL ROOM MESSAGE ============ /* =>> TODO
  // ? ====================================================
  @SubscribeMessage(EVENTS.CLIENT.REQUEST_ROOM_MESSAGE)
  public async listenClientRequestRoomMessage(
    @MessageBody() { id }: RequestRoomMessageDTO,
  ) {
    return await this.chatService.handleGetAllMessageByConversationID(id);
  }
  // ? ====================================================
  // ? ===============  REQUEST CONTACT LIST ============== /* =>> TODO
  // ? ====================================================
  @SubscribeMessage(EVENTS.CLIENT.REQUEST_CONTACT_LIST)
  public async listenClientRequestContactList(
    @MessageBody() { id }: RequestContactListDTO,
  ) {
    return await this.chatService.handleGetContactList(
      { id },
      this.webSocketServer,
    );
  }
  // ? ====================================================
  // ? ================ SEND ROOM MESSAGE ================= /* =>> DONE
  // ? ====================================================
  @SubscribeMessage(EVENTS.CLIENT.SEND_ROOM_MESSAGE)
  public async listenClientSendRoomMessage(
    @MessageBody() payload: ClientSendRoomMessDTO,
  ) {
    const isConversationExist =
      payload.hasOwnProperty('conversationID') && payload.conversationID !== '';

    if (isConversationExist) {
      return await this.chatService.handleClientSendRoomMessage(
        payload,
        this.webSocketServer,
      );
    } else {
      return await this.chatService.handleClientSendFirstRoomMessage(
        payload,
        this.webSocketServer,
      );
    }
  }
  // ? ====================================================
  // ? ===================== TYPING ======================= /* =>> DONE
  // ? ====================================================
  @SubscribeMessage(EVENTS.CLIENT.TYPING)
  public async listenUserTyping(@MessageBody() payload: TypingDTO) {
    return this.chatService.typing(payload, this.webSocketServer);
  }
  // ? ====================================================
  // ? ================= DELETE MESSAGE =================== /* =>> DONE
  // ? ====================================================
  @SubscribeMessage(EVENTS.CLIENT.DELETE_MESSAGE)
  public async listenUserDeleteMessageByID(
    @MessageBody() payload: DeleteMessageDTO,
  ) {
    return await this.chatService.deleteMessageConversation(
      payload,
      this.webSocketServer,
    );
  }
  // ? ====================================================
  // ? =============== DELETE CONVERSATION ================ /* =>> DONE
  // ? ====================================================
  @SubscribeMessage(EVENTS.CLIENT.DELETE_CONVERSATION)
  public async listenUserDeleteConversationByID(
    @MessageBody() payload: DeleteConversationDTO,
  ) {
    return await this.chatService.deleteConversation(
      payload,
      this.webSocketServer,
    );
  }
}
