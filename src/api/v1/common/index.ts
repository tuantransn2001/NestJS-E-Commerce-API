import { ObjectType } from '../ts/types/common';
import * as randomstring from 'randomstring';
import { Falsy } from 'rxjs';
export const isEmpty = (target: ObjectType | any): boolean => {
  return target instanceof Array
    ? target.length === 0
    : target === undefined || target === null
    ? true
    : Object.keys(target).length === 0;
};

export const asyncMap = async (arr: any[], callback: (item: any) => any) => {
  return Promise.all(arr.map(async (item) => await callback(item)));
};

export const randomIntFromInterval = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

export const randomStringByCharsetAndLength = (
  charset: string,
  length: number,
  isUppercase: boolean,
): string => {
  return randomstring.generate({
    charset: charset,
    length: length,
    capitalization: isUppercase ? 'uppercase' : 'lowercase',
  });
};

export const handleSeedData = async (Model: any, data: any[]) => {
  await Model.insertMany(data);
};

export const checkMissPropertyInObjectBaseOnValueCondition = (
  baseObject: ObjectType,
  valueCondition: Falsy[],
): Array<string> => {
  const arrMissArray: Array<string> = Object.keys(baseObject).reduce(
    (res: any, key: string) => {
      if (
        baseObject.hasOwnProperty(key) &&
        valueCondition.includes(baseObject[key])
      ) {
        res.push(key);
      }
      return res;
    },
    [],
  );

  return arrMissArray;
};
