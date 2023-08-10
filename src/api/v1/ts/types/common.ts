import { Model } from 'mongoose';
import { Address } from '../interfaces/address.d.type';
import { Category } from '../interfaces/category.d.type';
import { Order } from '../interfaces/order.d.type';
import { Payment } from '../interfaces/payment.type';
import { Product } from '../interfaces/product.d.type';
import { User } from '../interfaces/user.d.type';
export type Falsy = false | 0 | '' | null | undefined;
export type ObjectType = Record<string, any>;
export type AppModel = Model<
  Category | Product | User | Payment | Order | Address
>;
export type ModelData = { Model: AppModel; data: ObjectType[] }[];
export type CallbackFunction = () => void;
