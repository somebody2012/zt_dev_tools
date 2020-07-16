"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Result = void 0;
class Result {
    constructor(params) {
        this.isSuccess = params.isSuccess;
        this.errorCode = params.errorCode;
        this.data = params.data;
        this.message = params.message;
    }
    static success(message, data) {
        return new Result({
            isSuccess: true,
            errorCode: "0000",
            data: data || null,
            message: message || "成功"
        });
    }
    static fail(message, data) {
        return new Result({
            isSuccess: false,
            errorCode: "9999",
            data: data || null,
            message: message || "失败",
        });
    }
    static create(params) {
        return new Result(params);
    }
}
exports.Result = Result;
exports.default = Result;
//# sourceMappingURL=Result.js.map