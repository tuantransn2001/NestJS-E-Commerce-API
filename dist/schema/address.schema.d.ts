import mongoose from 'mongoose';
export declare const AddressSchema: mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, {
    timestamps: true;
    minimize: false;
}, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    id?: string;
    user_id?: string;
    city?: string;
    country?: string;
    postalCode?: string;
    address?: string;
    status?: string;
    createdAt?: Date;
    updatedAt?: Date;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    id?: string;
    user_id?: string;
    city?: string;
    country?: string;
    postalCode?: string;
    address?: string;
    status?: string;
    createdAt?: Date;
    updatedAt?: Date;
}>> & Omit<mongoose.FlatRecord<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    id?: string;
    user_id?: string;
    city?: string;
    country?: string;
    postalCode?: string;
    address?: string;
    status?: string;
    createdAt?: Date;
    updatedAt?: Date;
}> & {
    _id: mongoose.Types.ObjectId;
}, never>>;
