declare enum API_RESPONSE_STATUS {
    SUCCESS = "Success",
    FAIL = "Fail"
}
declare enum API_PATH {
    admin_me = "/api/admin/me",
    admin_login = "/api/admin/login",
    student_login = "/api/admin/student",
    search_list_user = "/api/admin/search-list-user"
}
declare enum STATUS_MESSAGE {
    SUCCESS = "Success",
    CONFLICT = "Conflict",
    NOT_FOUND = "Not Found",
    SERVER_ERROR = "Server Error",
    NO_CONTENT = "No Content",
    BAD_REQUEST = "Bad Request",
    UN_AUTHORIZE = "Unauthorize",
    NOT_ACCEPTABLE = "Not Acceptable",
    SERVICES_UNAVAILABLE = "Services Unavailable"
}
declare enum STATUS_CODE {
    STATUS_CODE_200 = 200,
    STATUS_CODE_201 = 201,
    STATUS_CODE_202 = 202,
    STATUS_CODE_204 = 204,
    STATUS_CODE_400 = 400,
    STATUS_CODE_401 = 401,
    STATUS_CODE_404 = 404,
    STATUS_CODE_406 = 406,
    STATUS_CODE_409 = 409,
    STATUS_CODE_500 = 500,
    STATUS_CODE_503 = 503
}
export { STATUS_MESSAGE, STATUS_CODE, API_RESPONSE_STATUS, API_PATH };
