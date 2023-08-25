import { Model } from 'mongoose';
import { isEmpty, isSingleChat } from '../../common';

import { STATUS_CODE, STATUS_MESSAGE } from '../../ts/enums/api_enums';
import {
  Conversation,
  User,
  Message,
} from '../../ts/interfaces/conversation.d.type';
import RestFullAPI from '../../utils/apiResponse';
import HttpException from '../../utils/http.exception';
import { handleServerError } from '../../utils/serverErrorHandler';
export const handleGetLastMessage = (messages: Message[]) => {
  const { content, updatedAt: timeMessage } = messages[messages.length - 1];

  return { content, timeMessage };
};
export const handleFilterMessageAlreadyExist = (messages: Message[]) => {
  return isEmpty(messages)
    ? []
    : messages.reduce(
        (
          messList,
          { content, sender, isDelete, id, createdAt, updatedAt }: Message,
        ) => {
          !isDelete &&
            messList.push({
              id,
              content,
              sender,
              createdAt,
              updatedAt,
            });

          return messList;
        },
        [],
      );
};

export const handleGetAllMessageByConversationID = async (
  conversationModel: Model<Conversation>,
  id: string,
) => {
  try {
    const foundConversation = await conversationModel.findOne(
      {
        id,
        isDelete: false,
      },
      {
        __v: 0,
        isDelete: 0,
        _id: 0,
        'messages._id': 0,
      },
    );

    if (!isEmpty(foundConversation)) {
      const responseData = {
        conversationID: id,
        members: foundConversation.members,
        messages: handleFilterMessageAlreadyExist(foundConversation.messages),
      };

      return RestFullAPI.onSuccess(
        STATUS_CODE.STATUS_CODE_200,
        STATUS_MESSAGE.SUCCESS,
        responseData,
      );
    } else {
      return RestFullAPI.onFail(STATUS_CODE.STATUS_CODE_404, {
        message: STATUS_MESSAGE.NOT_FOUND,
      } as HttpException);
    }
  } catch (err) {
    return handleServerError(err);
  }
};

export const handleGetAllMessageByConversationMembers = async (
  conversationModel: Model<Conversation>,
  members: User[],
) => {
  try {
    const queryCondition = members.map(({ id }) => ({
      [`members.id`]: id,
    }));
    // ? This include multiple , members > 3
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
    if (isEmpty(foundConversation)) {
      return RestFullAPI.onFail(STATUS_CODE.STATUS_CODE_404, {
        message: STATUS_MESSAGE.NOT_FOUND,
      } as HttpException);
    } else {
      const foundedSingleConversationIndex = foundConversation.findIndex(
        ({ members }: Conversation) => isSingleChat(members),
      );

      const {
        id: conversationID,
        members,
        messages,
      } = foundConversation[foundedSingleConversationIndex];
      return RestFullAPI.onSuccess(
        STATUS_CODE.STATUS_CODE_200,
        STATUS_MESSAGE.SUCCESS,
        { conversationID, members, messages },
      );
    }
  } catch (err) {
    return handleServerError(err);
  }
};
