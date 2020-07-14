"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Result {
    constructor(params) {
        this.isSuccess = params.isSuccess;
        this.errorCode = params.errorCode;
        this.data = params.data;
        this.message = params.message;
    }
    static success(params) {
        return new Result({
            isSuccess: true,
            errorCode: "0000",
            data: params.data || null,
            message: params.message || "成功"
        });
    }
    static fail(params) {
        return new Result({
            isSuccess: false,
            errorCode: "9999",
            data: params.data || null,
            message: params.message || "失败",
        });
    }
    static create(params) {
        return new Result(params);
    }
}
exports.default = Result;
//# sourceMappingURL=Result.js.map