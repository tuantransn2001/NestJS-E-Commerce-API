import { Model } from 'mongoose';
import { PaginationDTO } from '../ts/dto/query.dto';
import { Address } from '../ts/interfaces/address.d.type';
export declare class AddressService {
    private addressModel;
    constructor(addressModel: Model<Address>);
    getUserAddress({ id, page_number, page_size }: PaginationDTO): Promise<{
        statusCode: number;
        message: string;
        data: any;
    } | {
        statusCode: number;
        error: import("../ts/utils/http.exception").default;
    }>;
}
