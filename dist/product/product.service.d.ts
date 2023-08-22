import { Model } from 'mongoose';
import { PaginationDTO } from '../ts/dto/query.dto';
import { Product } from '../ts/interfaces/product.d.type';
export declare class ProductService {
    private productModel;
    constructor(productModel: Model<Product>);
    getAll({ page_number, page_size }: PaginationDTO, searchParam: string): Promise<{
        statusCode: number;
        message: string;
        data: any;
    } | {
        statusCode: number;
        error: import("../utils/http.exception").default;
    }>;
    getByID({ id, }: Omit<PaginationDTO, 'page_number' | 'page_size'>): Promise<{
        statusCode: number;
        message: string;
        data: any;
    } | {
        statusCode: number;
        error: import("../utils/http.exception").default;
    }>;
}
