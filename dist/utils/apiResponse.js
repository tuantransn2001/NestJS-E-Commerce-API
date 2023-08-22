"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const api_enums_1 = require("../ts/enums/api_enums");
class RestFullAPI {
    constructor() {
        this.data = {};
        this.message = '';
        this.statusCode = api_enums_1.STATUS_CODE.STATUS_CODE_200;
    }
    static onSuccess(statusCode, message, data) {
        return { statusCode, message, data };
    }
    static onFail(statusCode, error) {
        return {
            statusCode,
            error: error,
        };
    }
    static async onArrayPromiseSuccess(promisesResult) {
        const findResult = await Promise.all(promisesResult);
        const isOK = findResult.every((result) => result.statusCode === api_enums_1.STATUS_CODE.STATUS_CODE_200);
        return isOK
            ? {
                statusCode: api_enums_1.STATUS_CODE.STATUS_CODE_200,
                response: RestFullAPI.onSuccess(api_enums_1.STATUS_CODE.STATUS_CODE_200, api_enums_1.STATUS_MESSAGE.SUCCESS),
            }
            : {
                statusCode: api_enums_1.STATUS_CODE.STATUS_CODE_500,
                response: RestFullAPI.onFail(api_enums_1.STATUS_CODE.STATUS_CODE_500, {
                    message: api_enums_1.STATUS_MESSAGE.SERVER_ERROR,
                }),
            };
    }
}
exports.default = RestFullAPI;
//# sourceMappingURL=apiResponse.js.map