import mongoose from 'mongoose';
export declare const CategorySchema: mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, {
    timestamps: true;
    minimize: false;
}, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    description: string[];
    contents: {
        content: string[];
        title?: string;
        subTitle?: string;
    }[];
    id?: string;
    createdAt?: Date;
    updatedAt?: Date;
    title?: string;
    subCategoryID?: string;
    subTitle?: string;
    imgSrc?: string;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    description: string[];
    contents: {
        content: string[];
        title?: string;
        subTitle?: string;
    }[];
    id?: string;
    createdAt?: Date;
    updatedAt?: Date;
    title?: string;
    subCategoryID?: string;
    subTitle?: string;
    imgSrc?: string;
}>> & Omit<mongoose.FlatRecord<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    description: string[];
    contents: {
        content: string[];
        title?: string;
        subTitle?: string;
    }[];
    id?: string;
    createdAt?: Date;
    updatedAt?: Date;
    title?: string;
    subCategoryID?: string;
    subTitle?: string;
    imgSrc?: string;
}> & {
    _id: mongoose.Types.ObjectId;
}, never>>;
