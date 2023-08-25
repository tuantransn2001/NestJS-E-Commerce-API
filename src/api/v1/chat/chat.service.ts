import { v4 as uuidv4 } from 'uuid';
import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { Server } from 'socket.io';
import { ObjectType } from '../ts/types/common';
import { STATUS_CODE, STATUS_MESSAGE } from '../ts/enums/api_enums';
import { Conversation } from '../ts/interfaces/conversation.d.type';
import { ClientSendRoomMessDTO } from './dto/clientSendRoomMessageDTO';
import { DeleteMessageDTO } from './dto/deleteMessageDTO';
import { TypingDTO } from './dto/typingDTO';
import { MODEL_NAME } from '../ts/enums/model_enums';
import { EVENTS } from '../common/constants/common';
import RestFullAPI from '../utils/apiResponse';
import { handleServerError } from '../utils/serverErrorHandler';
import { DeleteConversationDTO } from './dto/deleteConversationDTO';
import {
  handleGetAllMessageByConversationID,
  handleGetAllMessageByConversationMembers,
  handleGetLastMessage,
} from './helpers';
import { RequestRoomMessageDTO } from './dto/requestRoomMessageDTO';
import { RequestContactListDTO } from './dto/requestContactListDTO';

@Injectable()
export class ChatService {
  constructor(
    @Inject(MODEL_NAME.CONVERSATION)
    private conversationModel: Model<Conversation>,
  ) {}
  public handleClientJoinRoom<D extends ObjectType, S extends Server>(
    { roomID }: D,
    server: S,
  ) {
    server.sockets.socketsJoin(roomID);
    server.sockets.emit(
      EVENTS.SERVER.JOINED_ROOM,
      RestFullAPI.onSuccess(
        STATUS_CODE.STATUS_CODE_200,
        STATUS_MESSAGE.SUCCESS,
        { roomID },
      ),
    );
  }
  public async handleClientSendRoomMessage<
    D extends ClientSendRoomMessDTO,
    S extends Server,
  >({ conversationID, message }: D, server: S) {
    await this.conversationModel
      .findOneAndUpdate(
        { id: conversationID },
        {
          $push: { messages: { ...message, id: uuidv4() } },
        },
      )
      .then(async () => {
        const responseConversation = await handleGetAllMessageByConversationID(
          this.conversationModel,
          conversationID,
        );

        server.sockets.emit(
          EVENTS.SERVER.RECEIVED_ROOM_MESSAGE,
          responseConversation,
        );
      })
      .catch((err) => {
        server.sockets.emit(
          EVENTS.SERVER.RECEIVED_ROOM_MESSAGE,
          handleServerError(err),
        );
      });
  }

  public async handleClientSendFirstRoomMessage<
    D extends ClientSendRoomMessDTO,
    S extends Server,
  >({ members, message }: D, server: S) {
    const conversationID = uuidv4();
    const newConversationDocument: Conversation = {
      id: conversationID,
      members,
      messages: [{ ...message, id: uuidv4() }],
      name: '',
    };
    await this.conversationModel
      .create(newConversationDocument)
      .then(async (response) => {
        const responseConversation = await handleGetAllMessageByConversationID(
          this.conversationModel,
          conversationID,
        );
        server.sockets.socketsJoin(response.id);
        server.sockets.emit(
          EVENTS.SERVER.RECEIVED_ROOM_MESSAGE,
          responseConversation,
        );
      })
      .catch((err) => {
        server.sockets.emit(
          EVENTS.SERVER.RECEIVED_ROOM_MESSAGE,
          handleServerError(err),
        );
      });
  }
  public async deleteConversation<
    D extends DeleteConversationDTO,
    S extends Server,
  >({ id }: D, server: S) {
    await this.conversationModel
      .updateOne({ id }, { $set: { isDelete: true } })
      .then(() => {
        server.sockets.emit(
          EVENTS.SERVER.DELETE_CONVERSATION_RESULT,
          RestFullAPI.onSuccess(
            STATUS_CODE.STATUS_CODE_201,
            STATUS_MESSAGE.SUCCESS,
          ),
        );
      })
      .catch((err) => {
        server.sockets.emit(
          EVENTS.SERVER.DELETE_CONVERSATION_RESULT,
          handleServerError(err),
        );
      });
  }
  public async deleteMessageConversation<
    D extends DeleteMessageDTO,
    S extends Server,
  >({ conversationID, messageID }: D, server: S) {
    await this.conversationModel
      .updateOne(
        { id: conversationID, 'messages.id': messageID },
        { $set: { 'messages.$.isDelete': true } },
      )
      .then(() => {
        server.sockets.emit(
          EVENTS.SERVER.DELETE_MESSAGE_RESULT,
          RestFullAPI.onSuccess(
            STATUS_CODE.STATUS_CODE_201,
            STATUS_MESSAGE.SUCCESS,
          ),
        );
      })
      .catch((err) => {
        server.sockets.emit(
          EVENTS.SERVER.DELETE_MESSAGE_RESULT,
          handleServerError(err),
        );
      });
  }

  public async handleGetContactList<
    D extends RequestContactListDTO,
    S extends Server,
  >({ id }: D, server: S) {
    const foundUserContactList = await this.conversationModel.find(
      {
        members: { $elemMatch: { id } },
        isDelete: false,
      },
      {
        isDelete: 0,
        _id: 0,
        'members._id': 0,
      },
    );
    server.emit(
      EVENTS.SERVER.RECEIVED_CONTACT_LIST,
      RestFullAPI.onSuccess(
        STATUS_CODE.STATUS_CODE_200,
        STATUS_MESSAGE.SUCCESS,
        foundUserContactList.map((userContactItem: Conversation) => {
          const {
            id: conversationID,
            members,
            name,
            messages,
            createdAt,
            updatedAt,
          } = userContactItem;

          return {
            conversationID,
            name,
            members,
            lastMessage: handleGetLastMessage(messages),
            createdAt,
            updatedAt,
          };
        }),
      ),
    );
  }
  public async typing<D extends TypingDTO, S extends Server>(
    { sender, isTyping }: D,
    server: S,
  ) {
    server.sockets.emit(
      EVENTS.SERVER.IS_TYPING,
      RestFullAPI.onSuccess(
        STATUS_CODE.STATUS_CODE_200,
        STATUS_MESSAGE.SUCCESS,
        { sender, isTyping },
      ),
    );
  }
  public async handleRequestRoomMessage<
    D extends RequestRoomMessageDTO,
    S extends Server,
  >(requestRoomMessageDTO: D, server: S) {
    const isConversationExist = requestRoomMessageDTO.id !== '';

    if (isConversationExist) {
      return server.emit(
        EVENTS.SERVER.RECEIVED_ROOM_MESSAGE,
        await handleGetAllMessageByConversationID(
          this.conversationModel,
          requestRoomMessageDTO.id,
        ),
      );
    } else {
      return server.emit(
        EVENTS.SERVER.RECEIVED_ROOM_MESSAGE,
        await handleGetAllMessageByConversationMembers(
          this.conversationModel,
          requestRoomMessageDTO.members,
        ),
      );
    }
  }
}
