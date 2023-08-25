"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleGetAllMessageByConversationMembers = exports.handleGetAllMessageByConversationID = exports.handleFilterMessageAlreadyExist = exports.handleGetLastMessage = void 0;
const common_1 = require("../../common");
const api_enums_1 = require("../../ts/enums/api_enums");
const apiResponse_1 = require("../../utils/apiResponse");
const serverErrorHandler_1 = require("../../utils/serverErrorHandler");
const handleGetLastMessage = (messages) => {
    const { content, updatedAt: timeMessage } = messages[messages.length - 1];
    return { content, timeMessage };
};
exports.handleGetLastMessage = handleGetLastMessage;
const handleFilterMessageAlreadyExist = (messages) => {
    return (0, common_1.isEmpty)(messages)
        ? []
        : messages.reduce((messList, { content, sender, isDelete, id, createdAt, updatedAt }) => {
            !isDelete &&
                messList.push({
                    id,
                    content,
                    sender,
                    createdAt,
                    updatedAt,
                });
            return messList;
        }, []);
};
exports.handleFilterMessageAlreadyExist = handleFilterMessageAlreadyExist;
const handleGetAllMessageByConversationID = async (conversationModel, id) => {
    try {
        const foundConversation = await conversationModel.findOne({
            id,
            isDelete: false,
        }, {
            __v: 0,
            isDelete: 0,
            _id: 0,
            'messages._id': 0,
        });
        if (!(0, common_1.isEmpty)(foundConversation)) {
            const responseData = {
                conversationID: id,
                members: foundConversation.members,
                messages: (0, exports.handleFilterMessageAlreadyExist)(foundConversation.messages),
            };
            return apiResponse_1.default.onSuccess(api_enums_1.STATUS_CODE.STATUS_CODE_200, api_enums_1.STATUS_MESSAGE.SUCCESS, responseData);
        }
        else {
            return apiResponse_1.default.onFail(api_enums_1.STATUS_CODE.STATUS_CODE_404, {
                message: api_enums_1.STATUS_MESSAGE.NOT_FOUND,
            });
        }
    }
    catch (err) {
        return (0, serverErrorHandler_1.handleServerError)(err);
    }
};
exports.handleGetAllMessageByConversationID = handleGetAllMessageByConversationID;
const handleGetAllMessageByConversationMembers = async (conversationModel, members) => {
    try {
        const queryCondition = members.map(({ id }) => ({
            [`members.id`]: id,
        }));
        const foundConversation = await conversationModel.aggregate([
            {
                $match: {
                    $and: queryCondition,
                },
            },
            {
                $project: {
                    _id: 0,
                    isDelete: 0,
                    'members._id': 0,
                },
            },
        ]);
        if ((0, common_1.isEmpty)(foundConversation)) {
            return apiResponse_1.default.onFail(api_enums_1.STATUS_CODE.STATUS_CODE_404, {
                message: api_enums_1.STATUS_MESSAGE.NOT_FOUND,
            });
        }
        else {
            const foundedSingleConversationIndex = foundConversation.findIndex(({ members }) => (0, common_1.isSingleChat)(members));
            const { id: conversationID, members, messages, } = foundConversation[foundedSingleConversationIndex];
            return apiResponse_1.default.onSuccess(api_enums_1.STATUS_CODE.STATUS_CODE_200, api_enums_1.STATUS_MESSAGE.SUCCESS, { conversationID, members, messages });
        }
    }
    catch (err) {
        return (0, serverErrorHandler_1.handleServerError)(err);
    }
};
exports.handleGetAllMessageByConversationMembers = handleGetAllMessageByConversationMembers;
//# sourceMappingURL=index.js.map