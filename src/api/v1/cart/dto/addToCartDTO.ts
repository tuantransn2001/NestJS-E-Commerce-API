import { Product } from '../../ts/interfaces/cart.d.type';

export class AddItemToCartDTO {
  user_id: string;
  products: Product[];
}
