import { Body, Controller, Get, Query, Post } from '@nestjs/common';
import { CartService } from './cart.service';
import { AddItemToCartDTO } from './dto/addToCartDTO';

@Controller('cart')
export class CartController {
  constructor(private cartService: CartService) {}
  @Get(`/user`)
  public async getUserCart(@Query('id') id: string) {
    return this.cartService.getUserCart({ user_id: id });
  }
  @Post('/add')
  public async addToCart(@Body() addItemToCart: AddItemToCartDTO) {
    return this.cartService.addToCart(addItemToCart);
  }
}
