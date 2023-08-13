import mongoose from 'mongoose';
export declare const CartSchema: mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, {
    timestamps: true;
    minimize: false;
}, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    id: string;
    products: {
        product_variant_id?: string;
        quantity?: number;
    }[];
    user_id?: string;
    createdAt?: Date;
    updatedAt?: Date;
    total?: string;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    id: string;
    products: {
        product_variant_id?: string;
        quantity?: number;
    }[];
    user_id?: string;
    createdAt?: Date;
    updatedAt?: Date;
    total?: string;
}>> & Omit<mongoose.FlatRecord<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    id: string;
    products: {
        product_variant_id?: string;
        quantity?: number;
    }[];
    user_id?: string;
    createdAt?: Date;
    updatedAt?: Date;
    total?: string;
}> & {
    _id: mongoose.Types.ObjectId;
}, never>>;
