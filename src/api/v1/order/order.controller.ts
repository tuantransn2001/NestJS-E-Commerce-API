import { Body, Controller, Post } from '@nestjs/common';
import { CreateOrderDTO } from './dto/createOrderDTO';
import { OrderService } from './order.service';

@Controller('order')
export class OrderController {
  constructor(private orderService: OrderService) {}
  //   @Get(`/user/:id`)
  //   public async getUserOrder() {}
  @Post('/user')
  public async createUserOrder(@Body() createUserDTO: CreateOrderDTO) {
    return this.orderService.createUserOrder(createUserDTO);
  }
}
