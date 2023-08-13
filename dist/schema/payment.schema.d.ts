import mongoose from 'mongoose';
export declare const PaymentSchema: mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, {
    timestamps: true;
    minimize: false;
}, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    id?: string;
    description?: string;
    title?: string;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    id?: string;
    description?: string;
    title?: string;
}>> & Omit<mongoose.FlatRecord<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    id?: string;
    description?: string;
    title?: string;
}> & {
    _id: mongoose.Types.ObjectId;
}, never>>;
