"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.API_PATH = exports.API_RESPONSE_STATUS = exports.STATUS_CODE = exports.STATUS_MESSAGE = void 0;
var API_RESPONSE_STATUS;
(function (API_RESPONSE_STATUS) {
    API_RESPONSE_STATUS["SUCCESS"] = "Success";
    API_RESPONSE_STATUS["FAIL"] = "Fail";
})(API_RESPONSE_STATUS || (exports.API_RESPONSE_STATUS = API_RESPONSE_STATUS = {}));
var API_PATH;
(function (API_PATH) {
    API_PATH["admin_me"] = "/api/admin/me";
    API_PATH["admin_login"] = "/api/admin/login";
    API_PATH["student_login"] = "/api/admin/student";
    API_PATH["search_list_user"] = "/api/admin/search-list-user";
})(API_PATH || (exports.API_PATH = API_PATH = {}));
var STATUS_MESSAGE;
(function (STATUS_MESSAGE) {
    STATUS_MESSAGE["SUCCESS"] = "Success";
    STATUS_MESSAGE["CONFLICT"] = "Conflict";
    STATUS_MESSAGE["NOT_FOUND"] = "Not Found";
    STATUS_MESSAGE["SERVER_ERROR"] = "Server Error";
    STATUS_MESSAGE["NO_CONTENT"] = "No Content";
    STATUS_MESSAGE["BAD_REQUEST"] = "Bad Request";
    STATUS_MESSAGE["UN_AUTHORIZE"] = "Unauthorize";
    STATUS_MESSAGE["NOT_ACCEPTABLE"] = "Not Acceptable";
    STATUS_MESSAGE["SERVICES_UNAVAILABLE"] = "Services Unavailable";
})(STATUS_MESSAGE || (exports.STATUS_MESSAGE = STATUS_MESSAGE = {}));
var STATUS_CODE;
(function (STATUS_CODE) {
    STATUS_CODE[STATUS_CODE["STATUS_CODE_200"] = 200] = "STATUS_CODE_200";
    STATUS_CODE[STATUS_CODE["STATUS_CODE_201"] = 201] = "STATUS_CODE_201";
    STATUS_CODE[STATUS_CODE["STATUS_CODE_202"] = 202] = "STATUS_CODE_202";
    STATUS_CODE[STATUS_CODE["STATUS_CODE_204"] = 204] = "STATUS_CODE_204";
    STATUS_CODE[STATUS_CODE["STATUS_CODE_400"] = 400] = "STATUS_CODE_400";
    STATUS_CODE[STATUS_CODE["STATUS_CODE_401"] = 401] = "STATUS_CODE_401";
    STATUS_CODE[STATUS_CODE["STATUS_CODE_404"] = 404] = "STATUS_CODE_404";
    STATUS_CODE[STATUS_CODE["STATUS_CODE_406"] = 406] = "STATUS_CODE_406";
    STATUS_CODE[STATUS_CODE["STATUS_CODE_409"] = 409] = "STATUS_CODE_409";
    STATUS_CODE[STATUS_CODE["STATUS_CODE_500"] = 500] = "STATUS_CODE_500";
    STATUS_CODE[STATUS_CODE["STATUS_CODE_503"] = 503] = "STATUS_CODE_503";
})(STATUS_CODE || (exports.STATUS_CODE = STATUS_CODE = {}));
//# sourceMappingURL=api_enums.js.map