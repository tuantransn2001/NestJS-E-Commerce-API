import { PaginationDTO } from '../ts/dto/query.dto';
import { ProductService } from './product.service';
export declare class ProductController {
    private productService;
    constructor(productService: ProductService);
    getAll({ page_number, page_size, searchParam }: PaginationDTO): Promise<{
        statusCode: number;
        message: string;
        data: any;
    } | {
        statusCode: number;
        error: import("../utils/http.exception").default;
    }>;
    getByID({ id }: Omit<PaginationDTO, 'page_number' | 'page_size'>): Promise<{
        statusCode: number;
        message: string;
        data: any;
    } | {
        statusCode: number;
        error: import("../utils/http.exception").default;
    }>;
}
