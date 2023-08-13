import { PaginationDTO } from '../ts/dto/query.dto';
import { AddressService } from './address.service';
export declare class AddressController {
    private addressService;
    constructor(addressService: AddressService);
    getUserAddress({ id, page_number, page_size }: PaginationDTO): Promise<{
        statusCode: number;
        message: string;
        data: any;
    } | {
        statusCode: number;
        error: import("../ts/utils/http.exception").default;
    }>;
}
