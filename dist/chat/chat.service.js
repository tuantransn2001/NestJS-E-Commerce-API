"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChatService = void 0;
const uuid_1 = require("uuid");
const common_1 = require("@nestjs/common");
const mongoose_1 = require("mongoose");
const api_enums_1 = require("../ts/enums/api_enums");
const model_enums_1 = require("../ts/enums/model_enums");
const common_2 = require("../common/constants/common");
const apiResponse_1 = require("../utils/apiResponse");
const serverErrorHandler_1 = require("../utils/serverErrorHandler");
const helpers_1 = require("./helpers");
let ChatService = exports.ChatService = class ChatService {
    constructor(conversationModel) {
        this.conversationModel = conversationModel;
    }
    handleClientJoinRoom({ roomID }, server) {
        server.sockets.socketsJoin(roomID);
        server.sockets.emit(common_2.EVENTS.SERVER.JOINED_ROOM, apiResponse_1.default.onSuccess(api_enums_1.STATUS_CODE.STATUS_CODE_200, api_enums_1.STATUS_MESSAGE.SUCCESS, { roomID }));
    }
    async handleClientSendRoomMessage({ conversationID, message }, server) {
        await this.conversationModel
            .findOneAndUpdate({ id: conversationID }, {
            $push: { messages: { ...message, id: (0, uuid_1.v4)() } },
        })
            .then(async () => {
            const responseConversation = await (0, helpers_1.handleGetAllMessageByConversationID)(this.conversationModel, conversationID);
            server.sockets.emit(common_2.EVENTS.SERVER.RECEIVED_ROOM_MESSAGE, responseConversation);
        })
            .catch((err) => {
            server.sockets.emit(common_2.EVENTS.SERVER.RECEIVED_ROOM_MESSAGE, (0, serverErrorHandler_1.handleServerError)(err));
        });
    }
    async handleClientSendFirstRoomMessage({ members, message }, server) {
        const conversationID = (0, uuid_1.v4)();
        const newConversationDocument = {
            id: conversationID,
            members,
            messages: [{ ...message, id: (0, uuid_1.v4)() }],
            name: '',
        };
        await this.conversationModel
            .create(newConversationDocument)
            .then(async (response) => {
            const responseConversation = await (0, helpers_1.handleGetAllMessageByConversationID)(this.conversationModel, conversationID);
            server.sockets.socketsJoin(response.id);
            server.sockets.emit(common_2.EVENTS.SERVER.RECEIVED_ROOM_MESSAGE, responseConversation);
        })
            .catch((err) => {
            server.sockets.emit(common_2.EVENTS.SERVER.RECEIVED_ROOM_MESSAGE, (0, serverErrorHandler_1.handleServerError)(err));
        });
    }
    async deleteConversation({ id }, server) {
        await this.conversationModel
            .updateOne({ id }, { $set: { isDelete: true } })
            .then(() => {
            server.sockets.emit(common_2.EVENTS.SERVER.DELETE_CONVERSATION_RESULT, apiResponse_1.default.onSuccess(api_enums_1.STATUS_CODE.STATUS_CODE_201, api_enums_1.STATUS_MESSAGE.SUCCESS));
        })
            .catch((err) => {
            server.sockets.emit(common_2.EVENTS.SERVER.DELETE_CONVERSATION_RESULT, (0, serverErrorHandler_1.handleServerError)(err));
        });
    }
    async deleteMessageConversation({ conversationID, messageID }, server) {
        await this.conversationModel
            .updateOne({ id: conversationID, 'messages.id': messageID }, { $set: { 'messages.$.isDelete': true } })
            .then(() => {
            server.sockets.emit(common_2.EVENTS.SERVER.DELETE_MESSAGE_RESULT, apiResponse_1.default.onSuccess(api_enums_1.STATUS_CODE.STATUS_CODE_201, api_enums_1.STATUS_MESSAGE.SUCCESS));
        })
            .catch((err) => {
            server.sockets.emit(common_2.EVENTS.SERVER.DELETE_MESSAGE_RESULT, (0, serverErrorHandler_1.handleServerError)(err));
        });
    }
    async handleGetContactList({ id }, server) {
        const foundUserContactList = await this.conversationModel.find({
            members: { $elemMatch: { id } },
            isDelete: false,
        }, {
            isDelete: 0,
            _id: 0,
            'members._id': 0,
        });
        server.emit(common_2.EVENTS.SERVER.RECEIVED_CONTACT_LIST, apiResponse_1.default.onSuccess(api_enums_1.STATUS_CODE.STATUS_CODE_200, api_enums_1.STATUS_MESSAGE.SUCCESS, foundUserContactList.map((userContactItem) => {
            const { id: conversationID, members, name, messages, createdAt, updatedAt, } = userContactItem;
            return {
                conversationID,
                name,
                members,
                lastMessage: (0, helpers_1.handleGetLastMessage)(messages),
                createdAt,
                updatedAt,
            };
        })));
    }
    async typing({ sender, isTyping }, server) {
        server.sockets.emit(common_2.EVENTS.SERVER.IS_TYPING, apiResponse_1.default.onSuccess(api_enums_1.STATUS_CODE.STATUS_CODE_200, api_enums_1.STATUS_MESSAGE.SUCCESS, { sender, isTyping }));
    }
    async handleRequestRoomMessage(requestRoomMessageDTO, server) {
        const isConversationExist = requestRoomMessageDTO.id !== '';
        if (isConversationExist) {
            return server.emit(common_2.EVENTS.SERVER.RECEIVED_ROOM_MESSAGE, await (0, helpers_1.handleGetAllMessageByConversationID)(this.conversationModel, requestRoomMessageDTO.id));
        }
        else {
            return server.emit(common_2.EVENTS.SERVER.RECEIVED_ROOM_MESSAGE, await (0, helpers_1.handleGetAllMessageByConversationMembers)(this.conversationModel, requestRoomMessageDTO.members));
        }
    }
};
exports.ChatService = ChatService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(model_enums_1.MODEL_NAME.CONVERSATION)),
    __metadata("design:paramtypes", [mongoose_1.Model])
], ChatService);
//# sourceMappingURL=chat.service.js.map