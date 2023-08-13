"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleSeedData = exports.getAllRecordHandler = exports.checkMissPropertyInObjectBaseOnValueCondition = exports.randomStringByCharsetAndLength = exports.randomIntFromInterval = exports.asyncMap = exports.isEmpty = void 0;
const randomstring = require("randomstring");
const apiResponse_1 = require("../ts/utils/apiResponse");
const api_enums_1 = require("../ts/enums/api_enums");
const serverErrorHandler_1 = require("../ts/utils/serverErrorHandler");
const isEmpty = (target) => {
    return target instanceof Array
        ? target.length === 0
        : target === undefined || target === null
            ? true
            : Object.keys(target).length === 0;
};
exports.isEmpty = isEmpty;
const asyncMap = async (arr, callback) => {
    return Promise.all(arr.map(async (item) => await callback(item)));
};
exports.asyncMap = asyncMap;
const randomIntFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};
exports.randomIntFromInterval = randomIntFromInterval;
const randomStringByCharsetAndLength = (charset, length, isUppercase) => {
    return randomstring.generate({
        charset: charset,
        length: length,
        capitalization: isUppercase ? 'uppercase' : 'lowercase',
    });
};
exports.randomStringByCharsetAndLength = randomStringByCharsetAndLength;
const checkMissPropertyInObjectBaseOnValueCondition = (baseObject, valueCondition) => {
    const arrMissArray = Object.keys(baseObject).reduce((res, key) => {
        if (baseObject.hasOwnProperty(key) &&
            valueCondition.includes(baseObject[key])) {
            res.push(key);
        }
        return res;
    }, []);
    return arrMissArray;
};
exports.checkMissPropertyInObjectBaseOnValueCondition = checkMissPropertyInObjectBaseOnValueCondition;
const getAllRecordHandler = async (Model, { page_number, page_size }, selectAttributes, objSearchParam) => {
    try {
        const _skip = (page_number - 1) * page_size;
        const _limit = page_size;
        const searchQuery = !(0, exports.isEmpty)(objSearchParam)
            ? objSearchParam
            : {};
        const targetProperties = !(0, exports.isEmpty)(selectAttributes) &&
            selectAttributes.reduce((res, attr) => {
                return { ...res, [attr]: 1 };
            }, {});
        const queryResult = await Model.find(searchQuery, targetProperties)
            .skip(_skip)
            .limit(_limit);
        const queryResultCount = await Model.countDocuments().exec();
        return apiResponse_1.default.onSuccess(api_enums_1.STATUS_CODE.STATUS_CODE_200, api_enums_1.STATUS_MESSAGE.SUCCESS, {
            length: queryResultCount,
            data: queryResult,
        });
    }
    catch (err) {
        return (0, serverErrorHandler_1.handleServerError)(err);
    }
};
exports.getAllRecordHandler = getAllRecordHandler;
const handleSeedData = (seedData) => {
    try {
        seedData.forEach(async ({ Model, data }) => {
            await Model.deleteMany();
            await Model.insertMany(data);
        });
    }
    catch (err) {
        throw err;
    }
};
exports.handleSeedData = handleSeedData;
//# sourceMappingURL=index.js.map