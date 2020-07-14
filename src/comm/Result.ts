
import {ResultType} from "../types/common.d"
export default class Result{
  isSuccess:boolean;
  errorCode:string;
  data:any;
  message:string;
  constructor(params:ResultType){
    this.isSuccess = params.isSuccess;
    this.errorCode = params.errorCode;
    this.data = params.data;
    this.message = params.message;
  }
  static success(params){
    return new Result({
      isSuccess:true,
      errorCode:"0000",
      data:params.data||null,
      message:params.message||"成功"
    });
  }
  static fail(params){
    return new Result({
      isSuccess:false,
      errorCode:"9999",
      data:params.data||null,
      message:params.message||"失败",
    });
  }
  static create(params:ResultType){
    return new Result(params);
  }
}
