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
exports.ChatGateway = void 0;
const websockets_1 = require("@nestjs/websockets");
const common_1 = require("@nestjs/common");
const socket_io_1 = require("socket.io");
const chat_service_1 = require("./chat.service");
const clientJoinRoomDTO_1 = require("./dto/clientJoinRoomDTO");
const clientSendRoomMessageDTO_1 = require("./dto/clientSendRoomMessageDTO");
const typingDTO_1 = require("./dto/typingDTO");
const deleteMessageDTO_1 = require("./dto/deleteMessageDTO");
const deleteConversationDTO_1 = require("./dto/deleteConversationDTO");
const common_2 = require("../common/constants/common");
const requestContactListDTO_1 = require("./dto/requestContactListDTO");
const requestRoomMessageDTO_1 = require("./dto/requestRoomMessageDTO");
let ChatGateway = exports.ChatGateway = class ChatGateway {
    constructor(chatService) {
        this.chatService = chatService;
        this.logger = new common_1.Logger();
    }
    handleConnection(client) {
        this.logger.log(`⚡: Client is connected { id: ${client.id} }`);
    }
    handleDisconnect(client) {
        this.logger.log(`⚡️: Client disconnected { id: ${client.id} }`);
    }
    listenClientJoinRoom({ roomID }) {
        this.logger.log(`client join room with roomID:${roomID}`);
        return this.chatService.handleClientJoinRoom({ roomID }, this.webSocketServer);
    }
    async listenClientRequestRoomMessage({ id }) {
        return await this.chatService.handleGetAllMessageByConversationID(id);
    }
    async listenClientRequestContactList({ id }) {
        return await this.chatService.handleGetContactList({ id }, this.webSocketServer);
    }
    async listenClientSendRoomMessage(payload) {
        const isConversationExist = payload.hasOwnProperty('conversationID') && payload.conversationID !== '';
        if (isConversationExist) {
            return await this.chatService.handleClientSendRoomMessage(payload, this.webSocketServer);
        }
        else {
            return await this.chatService.handleClientSendFirstRoomMessage(payload, this.webSocketServer);
        }
    }
    async listenUserTyping(payload) {
        return this.chatService.typing(payload, this.webSocketServer);
    }
    async listenUserDeleteMessageByID(payload) {
        return await this.chatService.deleteMessageConversation(payload, this.webSocketServer);
    }
    async listenUserDeleteConversationByID(payload) {
        return await this.chatService.deleteConversation(payload, this.webSocketServer);
    }
};
__decorate([
    (0, websockets_1.WebSocketServer)(),
    __metadata("design:type", socket_io_1.Server)
], ChatGateway.prototype, "webSocketServer", void 0);
__decorate([
    __param(0, (0, websockets_1.ConnectedSocket)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [socket_io_1.Socket]),
    __metadata("design:returntype", void 0)
], ChatGateway.prototype, "handleConnection", null);
__decorate([
    __param(0, (0, websockets_1.ConnectedSocket)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [socket_io_1.Socket]),
    __metadata("design:returntype", void 0)
], ChatGateway.prototype, "handleDisconnect", null);
__decorate([
    (0, websockets_1.SubscribeMessage)(common_2.EVENTS.CLIENT.JOIN_ROOM),
    __param(0, (0, websockets_1.MessageBody)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [clientJoinRoomDTO_1.ClientJoinRoomDTO]),
    __metadata("design:returntype", void 0)
], ChatGateway.prototype, "listenClientJoinRoom", null);
__decorate([
    (0, websockets_1.SubscribeMessage)(common_2.EVENTS.CLIENT.REQUEST_ROOM_MESSAGE),
    __param(0, (0, websockets_1.MessageBody)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [requestRoomMessageDTO_1.RequestRoomMessageDTO]),
    __metadata("design:returntype", Promise)
], ChatGateway.prototype, "listenClientRequestRoomMessage", null);
__decorate([
    (0, websockets_1.SubscribeMessage)(common_2.EVENTS.CLIENT.REQUEST_CONTACT_LIST),
    __param(0, (0, websockets_1.MessageBody)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [requestContactListDTO_1.RequestContactListDTO]),
    __metadata("design:returntype", Promise)
], ChatGateway.prototype, "listenClientRequestContactList", null);
__decorate([
    (0, websockets_1.SubscribeMessage)(common_2.EVENTS.CLIENT.SEND_ROOM_MESSAGE),
    __param(0, (0, websockets_1.MessageBody)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [clientSendRoomMessageDTO_1.ClientSendRoomMessDTO]),
    __metadata("design:returntype", Promise)
], ChatGateway.prototype, "listenClientSendRoomMessage", null);
__decorate([
    (0, websockets_1.SubscribeMessage)(common_2.EVENTS.CLIENT.TYPING),
    __param(0, (0, websockets_1.MessageBody)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typingDTO_1.TypingDTO]),
    __metadata("design:returntype", Promise)
], ChatGateway.prototype, "listenUserTyping", null);
__decorate([
    (0, websockets_1.SubscribeMessage)(common_2.EVENTS.CLIENT.DELETE_MESSAGE),
    __param(0, (0, websockets_1.MessageBody)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [deleteMessageDTO_1.DeleteMessageDTO]),
    __metadata("design:returntype", Promise)
], ChatGateway.prototype, "listenUserDeleteMessageByID", null);
__decorate([
    (0, websockets_1.SubscribeMessage)(common_2.EVENTS.CLIENT.DELETE_CONVERSATION),
    __param(0, (0, websockets_1.MessageBody)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [deleteConversationDTO_1.DeleteConversationDTO]),
    __metadata("design:returntype", Promise)
], ChatGateway.prototype, "listenUserDeleteConversationByID", null);
exports.ChatGateway = ChatGateway = __decorate([
    (0, websockets_1.WebSocketGateway)({ cors: true }),
    __metadata("design:paramtypes", [chat_service_1.ChatService])
], ChatGateway);
//# sourceMappingURL=chat.gateway.js.map