import { CreateOrderDTO } from './dto/createOrderDTO';
import { OrderService } from './order.service';
export declare class OrderController {
    private orderService;
    constructor(orderService: OrderService);
    createUserOrder(createUserDTO: CreateOrderDTO): Promise<{
        statusCode: number;
        message: string;
        data: any;
    } | {
        statusCode: number;
        error: import("../ts/utils/http.exception").default;
    }>;
}
