import { AppModel, ModelData, ObjectType } from '../ts/types/common';
import { Falsy } from 'rxjs';
import { PaginationDTO } from '../ts/dto/query.dto';
import HttpException from '../ts/utils/http.exception';
export declare const isEmpty: (target: ObjectType | any[]) => boolean;
export declare const asyncMap: (arr: any[], callback: (item: any) => any) => Promise<any[]>;
export declare const randomIntFromInterval: (min: number, max: number) => number;
export declare const randomStringByCharsetAndLength: (charset: string, length: number, isUppercase: boolean) => string;
export declare const checkMissPropertyInObjectBaseOnValueCondition: (baseObject: ObjectType, valueCondition: Falsy[]) => Array<string>;
export declare const getAllRecordHandler: (Model: AppModel, { page_number, page_size }: Partial<PaginationDTO>, selectAttributes: string[], objSearchParam?: ObjectType) => Promise<{
    statusCode: number;
    message: string;
    data: any;
} | {
    statusCode: number;
    error: HttpException;
}>;
export declare const handleSeedData: (seedData: ModelData) => void;
