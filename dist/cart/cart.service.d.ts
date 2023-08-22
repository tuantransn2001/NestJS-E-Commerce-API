import { Model } from 'mongoose';
import { Cart } from '../ts/interfaces/cart.d.type';
import { AddItemToCartDTO } from './dto/addToCartDTO';
import { GetUserCartDTO } from './dto/getUserCartDTO';
import { Product } from '../ts/interfaces/product.d.type';
import HttpException from '../utils/http.exception';
export declare class CartService {
    private cartModel;
    private productModel;
    constructor(cartModel: Model<Cart>, productModel: Model<Product>);
    private handleGetProductDetailByID;
    getUserCart({ user_id }: GetUserCartDTO): Promise<{
        statusCode: number;
        message: string;
        data: any;
    } | {
        statusCode: number;
        error: HttpException;
    }>;
    addToCart(payload: AddItemToCartDTO): Promise<{
        statusCode: number;
        message: string;
        data: any;
    } | {
        statusCode: number;
        error: HttpException;
    }>;
}
