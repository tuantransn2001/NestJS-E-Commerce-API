import { Model } from 'mongoose';
import { Category } from '../ts/interfaces/category.d.type';
import { PaginationDTO } from '../ts/dto/query.dto';
export declare class CategoryService {
    private categoryModel;
    constructor(categoryModel: Model<Category>);
    getAll({ page_number, page_size }: PaginationDTO): Promise<{
        statusCode: number;
        message: string;
        data: any;
    } | {
        statusCode: number;
        error: import("../ts/utils/http.exception").default;
    }>;
    getByID({ id }: Partial<PaginationDTO>): Promise<{
        statusCode: number;
        message: string;
        data: any;
    } | {
        statusCode: number;
        error: import("../ts/utils/http.exception").default;
    }>;
}
