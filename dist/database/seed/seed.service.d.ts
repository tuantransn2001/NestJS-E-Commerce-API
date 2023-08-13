import { OnModuleInit } from '@nestjs/common';
import { Model } from 'mongoose';
import { Category } from '../../ts/interfaces/category.d.type';
import { User } from '../../ts/interfaces/user.d.type';
import { Product } from '../../ts/interfaces/product.d.type';
import { Payment } from '../../ts/interfaces/payment.type';
import { Address } from '../../ts/interfaces/address.d.type';
export declare class SeedService implements OnModuleInit {
    private readonly userModel;
    private readonly categoryModel;
    private readonly productModel;
    private readonly paymentModel;
    private readonly addressModel;
    constructor(userModel: Model<User>, categoryModel: Model<Category>, productModel: Model<Product>, paymentModel: Model<Payment>, addressModel: Model<Address>);
    generateUserMockData(): Promise<User[]>;
    generateCategoryMockData(): {
        id: string;
        subCategoryID: any;
        title: string;
        subTitle: string;
        description: string[];
        imgSrc: string;
        contents: ({
            title: string;
            content: string[];
            subTitle?: undefined;
        } | {
            title: string;
            subTitle: string;
            content: string[];
        })[];
    }[];
    generateProductMockData(): Product[];
    onModuleInit(): Promise<void>;
}
