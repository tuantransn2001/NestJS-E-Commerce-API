import { Model } from 'mongoose';
import { Order } from '../ts/interfaces/order.d.type';
import HttpException from '../ts/utils/http.exception';
import { CreateOrderDTO } from './dto/createOrderDTO';
export declare class OrderService {
    private orderModel;
    constructor(orderModel: Model<Order>);
    createUserOrder(payload: CreateOrderDTO): Promise<{
        statusCode: number;
        message: string;
        data: any;
    } | {
        statusCode: number;
        error: HttpException;
    }>;
}
