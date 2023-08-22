import { ObjectType } from '../ts/types/common';
export declare class URLSearchParam {
    static objToUrlParams(obj: ObjectType): string;
    static urlParamsToObj(urlParams: string): any[] | ObjectType;
    static checkIfObjShouldBeArrayAndConvert(obj: ObjectType): any[] | ObjectType;
    static addParamsToUrl(params: string, url?: string): string;
    static addObjToUrl(obj: ObjectType, url?: string): string;
    static extractParamsFromUrl(url?: string): any[] | ObjectType;
}
