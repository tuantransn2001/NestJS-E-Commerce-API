import mongoose from 'mongoose';
export declare const OrderSchema: mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, {
    timestamps: true;
    minimize: false;
}, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    id?: string;
    user_id?: string;
    cart_id?: string;
    payment_id?: string;
    discount_id?: string;
    address_id?: string;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    id?: string;
    user_id?: string;
    cart_id?: string;
    payment_id?: string;
    discount_id?: string;
    address_id?: string;
}>> & Omit<mongoose.FlatRecord<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    id?: string;
    user_id?: string;
    cart_id?: string;
    payment_id?: string;
    discount_id?: string;
    address_id?: string;
}> & {
    _id: mongoose.Types.ObjectId;
}, never>>;
