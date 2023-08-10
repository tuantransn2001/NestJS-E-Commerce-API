export interface Product {
  product_variant_id: string;
  quantity: number;
}

export interface Cart {
  id: string;
  user_id: string;
  total: number;
  products: Product[];
}
