import { CartService } from './cart.service';
import { AddItemToCartDTO } from './dto/addToCartDTO';
export declare class CartController {
    private cartService;
    constructor(cartService: CartService);
    getUserCart(id: string): Promise<{
        statusCode: number;
        message: string;
        data: any;
    } | {
        statusCode: number;
        error: import("../utils/http.exception").default;
    }>;
    addToCart(addItemToCart: AddItemToCartDTO): Promise<{
        statusCode: number;
        message: string;
        data: any;
    } | {
        statusCode: number;
        error: import("../utils/http.exception").default;
    }>;
}
