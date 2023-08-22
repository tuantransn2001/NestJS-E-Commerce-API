import { Model } from 'mongoose';
import { PaginationDTO } from '../ts/dto/query.dto';
import { Payment } from '../ts/interfaces/payment.type';
export declare class PaymentService {
    private paymentModel;
    constructor(paymentModel: Model<Payment>);
    getAll({ page_number, page_size }: PaginationDTO): Promise<{
        statusCode: number;
        message: string;
        data: any;
    } | {
        statusCode: number;
        error: import("../utils/http.exception").default;
    }>;
}
