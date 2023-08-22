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
    firstName?: string;
    lastName?: string;
    avatar?: string;
    address?: string;
    email?: string;
    phoneNumber?: string;
    password?: string;
    createdAt?: Date;
    updatedAt?: Date;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    id?: string;
    type?: string;
    firstName?: string;
    lastName?: string;
    avatar?: string;
    address?: string;
    email?: string;
    phoneNumber?: string;
    password?: string;
    createdAt?: Date;
    updatedAt?: Date;
}>> & Omit<mongoose.FlatRecord<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    id?: string;
    type?: string;
    firstName?: string;
    lastName?: string;
    avatar?: string;
    address?: string;
    email?: string;
    phoneNumber?: string;
    password?: string;
    createdAt?: Date;
    updatedAt?: Date;
}> & {
    _id: mongoose.Types.ObjectId;
}, never>>;
