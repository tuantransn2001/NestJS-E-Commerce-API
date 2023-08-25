import { Model } from 'mongoose';
import { Conversation, User, Message } from '../../ts/interfaces/conversation.d.type';
import HttpException from '../../utils/http.exception';
export declare const handleGetLastMessage: (messages: Message[]) => {
    content: string;
    timeMessage: Date;
};
export declare const handleFilterMessageAlreadyExist: (messages: Message[]) => any[];
export declare const handleGetAllMessageByConversationID: (conversationModel: Model<Conversation>, id: string) => Promise<{
    statusCode: number;
    message: string;
    data: any;
} | {
    statusCode: number;
    error: HttpException;
}>;
export declare const handleGetAllMessageByConversationMembers: (conversationModel: Model<Conversation>, members: User[]) => Promise<{
    statusCode: number;
    message: string;
    data: any;
} | {
    statusCode: number;
    error: HttpException;
}>;
