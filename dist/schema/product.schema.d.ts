import mongoose from 'mongoose';
export declare const ProductSchema: mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, {
    timestamps: true;
    minimize: false;
}, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    variants: {
        options: {
            id?: string;
            k?: string;
            v?: string;
        }[];
        details: {
            contents: {
                v: string[];
                id?: string;
                k?: string;
            }[];
            id?: string;
            name?: string;
            title?: string;
        }[];
        id?: string;
        name?: string;
        imgSrc?: string;
        price?: string;
    }[];
    id?: string;
    name?: string;
    createdAt?: Date;
    updatedAt?: Date;
    subCategoryID?: string;
    SKU?: string;
    classify?: string;
    discount_id?: string;
    categoryID?: string;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    variants: {
        options: {
            id?: string;
            k?: string;
            v?: string;
        }[];
        details: {
            contents: {
                v: string[];
                id?: string;
                k?: string;
            }[];
            id?: string;
            name?: string;
            title?: string;
        }[];
        id?: string;
        name?: string;
        imgSrc?: string;
        price?: string;
    }[];
    id?: string;
    name?: string;
    createdAt?: Date;
    updatedAt?: Date;
    subCategoryID?: string;
    SKU?: string;
    classify?: string;
    discount_id?: string;
    categoryID?: string;
}>> & Omit<mongoose.FlatRecord<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    variants: {
        options: {
            id?: string;
            k?: string;
            v?: string;
        }[];
        details: {
            contents: {
                v: string[];
                id?: string;
                k?: string;
            }[];
            id?: string;
            name?: string;
            title?: string;
        }[];
        id?: string;
        name?: string;
        imgSrc?: string;
        price?: string;
    }[];
    id?: string;
    name?: string;
    createdAt?: Date;
    updatedAt?: Date;
    subCategoryID?: string;
    SKU?: string;
    classify?: string;
    discount_id?: string;
    categoryID?: string;
}> & {
    _id: mongoose.Types.ObjectId;
}, never>>;
