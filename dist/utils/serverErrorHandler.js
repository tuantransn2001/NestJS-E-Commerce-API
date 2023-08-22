"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleServerError = void 0;
const api_enums_1 = require("../ts/enums/api_enums");
const apiResponse_1 = require("./apiResponse");
const handleServerError = ({ message }) => {
    const error = {
        status: api_enums_1.STATUS_CODE.STATUS_CODE_500,
        message,
    };
    return apiResponse_1.default.onFail(api_enums_1.STATUS_CODE.STATUS_CODE_500, error);
};
exports.handleServerError = handleServerError;
//# sourceMappingURL=serverErrorHandler.js.map