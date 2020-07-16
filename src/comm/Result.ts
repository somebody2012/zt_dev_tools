
import {ResultType} from "../types/common.d"
export class Result{
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
  static success(message?:any,data?:any){
    return new Result({
      isSuccess:true,
      errorCode:"0000",
      data:data||null,
      message:message||"成功"
    });
  }
  static fail(message?:any,data?:any){
    return new Result({
      isSuccess:false,
      errorCode:"9999",
      data:data||null,
      message:message||"失败",
    });
  }
  static create(params:ResultType){
    return new Result(params);
  }
}

export default Result;

export {
  ResultType
}
