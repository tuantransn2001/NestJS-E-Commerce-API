import mongoose from 'mongoose';
export declare const UserSchema: mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, {
    timestamps: true;
    minimize: false;
}, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    id?: string;
    type?: string;
    address?: string;
    createdAt?: Date;
    updatedAt?: Date;
    firstName?: string;
    lastName?: string;
    avatar?: string;
    email?: string;
    phoneNumber?: string;
    password?: string;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    id?: string;
    type?: string;
    address?: string;
    createdAt?: Date;
    updatedAt?: Date;
    firstName?: string;
    lastName?: string;
    avatar?: string;
    email?: string;
    phoneNumber?: string;
    password?: string;
}>> & Omit<mongoose.FlatRecord<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    id?: string;
    type?: string;
    address?: string;
    createdAt?: Date;
    updatedAt?: Date;
    firstName?: string;
    lastName?: string;
    avatar?: string;
    email?: string;
    phoneNumber?: string;
    password?: string;
}> & {
    _id: mongoose.Types.ObjectId;
}, never>>;
