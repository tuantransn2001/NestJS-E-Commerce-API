import mongoose from 'mongoose';
export declare const ConversationSchema: mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, {
    timestamps: true;
    minimize: false;
}, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    members: {
        id?: string;
    }[];
    messages: {
        id: string;
        createdAt: Date;
        isDelete: boolean;
        updatedAt?: Date;
        content?: string;
        sender?: {
            id?: string;
        };
    }[];
    isDelete: boolean;
    id?: string;
    name?: string;
    createdAt?: Date;
    updatedAt?: Date;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    members: {
        id?: string;
    }[];
    messages: {
        id: string;
        createdAt: Date;
        isDelete: boolean;
        updatedAt?: Date;
        content?: string;
        sender?: {
            id?: string;
        };
    }[];
    isDelete: boolean;
    id?: string;
    name?: string;
    createdAt?: Date;
    updatedAt?: Date;
}>> & Omit<mongoose.FlatRecord<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    members: {
        id?: string;
    }[];
    messages: {
        id: string;
        createdAt: Date;
        isDelete: boolean;
        updatedAt?: Date;
        content?: string;
        sender?: {
            id?: string;
        };
    }[];
    isDelete: boolean;
    id?: string;
    name?: string;
    createdAt?: Date;
    updatedAt?: Date;
}> & {
    _id: mongoose.Types.ObjectId;
}, never>>;
