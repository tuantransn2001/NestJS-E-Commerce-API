"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChatModule = void 0;
const common_1 = require("@nestjs/common");
const database_module_1 = require("../database/database.module");
const chat_gateway_1 = require("./chat.gateway");
const chat_service_1 = require("./chat.service");
const provider_1 = require("../common/provider");
const conversation_schema_1 = require("../schema/conversation.schema");
const model_enums_1 = require("../ts/enums/model_enums");
let ChatModule = class ChatModule {
};
exports.ChatModule = ChatModule;
exports.ChatModule = ChatModule = __decorate([
    (0, common_1.Module)({
        imports: [database_module_1.DatabaseModule],
        providers: [
            ...(0, provider_1.modelDefineProvider)(model_enums_1.MODEL_NAME.CONVERSATION, conversation_schema_1.ConversationSchema),
            chat_gateway_1.ChatGateway,
            chat_service_1.ChatService,
        ],
    })
], ChatModule);
//# sourceMappingURL=chat.module.js.map