import { AppModel, ModelData, ObjectType } from '../ts/types/common';
import * as randomstring from 'randomstring';
import { Falsy } from 'rxjs';
import { PaginationDTO } from '../ts/dto/query.dto';
import RestFullAPI from '../utils/apiResponse';
import { STATUS_CODE, STATUS_MESSAGE } from '../ts/enums/api_enums';
import { handleServerError } from '../utils/serverErrorHandler';
import { User } from '../ts/interfaces/conversation.d.type';
export const isEmpty = (target: ObjectType | any[]): boolean => {
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

export const getAllRecordHandler = async (
  Model: AppModel,
  { page_number, page_size }: Partial<PaginationDTO>,
  selectAttributes: string[],
  objSearchParam?: ObjectType,
) => {
  try {
    const _skip = (page_number - 1) * page_size;
    const _limit = page_size;

    const searchQuery: ObjectType = !isEmpty(objSearchParam)
      ? objSearchParam
      : {};

    const targetProperties: ObjectType =
      !isEmpty(selectAttributes) &&
      selectAttributes.reduce((res: ObjectType, attr: string) => {
        return { ...res, [attr]: 1, _id: 0 };
      }, {});

    const queryResult = await Model.find(searchQuery, targetProperties)
      .skip(_skip)
      .limit(_limit);

    const queryResultCount = await Model.countDocuments().exec();

    return RestFullAPI.onSuccess(
      STATUS_CODE.STATUS_CODE_200,
      STATUS_MESSAGE.SUCCESS,
      {
        length: queryResultCount,
        data: queryResult,
      },
    );
  } catch (err) {
    return handleServerError(err);
  }
};

export const handleSeedData = (seedData: ModelData) => {
  try {
    seedData.forEach(async ({ Model, data }) => {
      await Model.deleteMany();
      await Model.insertMany(data);
    });
  } catch (err) {
    throw err;
  }
};

export const handleCheckTwoUserIsOne = (sender: User, compareUser: User) => {
  return sender.id === compareUser.id;
};

export const isSingleChat = (member: User[]) => member.length <= 2;
