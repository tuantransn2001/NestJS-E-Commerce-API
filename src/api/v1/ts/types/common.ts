import { Model } from 'mongoose';
import { Category } from '../interfaces/category.d.type';
import { Product } from '../interfaces/product.d.type';
import { User } from '../interfaces/user.d.type';

export type ObjectType = Record<string, any>;
export type AppModel = Model<Category | Product | User>;
export type ModelData = { Model: AppModel; data: ObjectType[] }[];
export type CallbackFunction = () => void;
