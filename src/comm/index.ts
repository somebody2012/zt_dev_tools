
import {ExecException,exec,ChildProcess} from "child_process";
import {MsgUtils} from "./MsgUtils"
import {Result,ResultType} from "./Result"
export function execThenable(command,cwd):Promise<ResultType>{
  return new Promise((resolve,reject) => {
    let options = {
      cwd:cwd,
      encoding:"utf-8",
      stdio:[process.stdin,process.stdout,process.stderr],
      shell:"D:\\Program Files\\Git\\bin\\bash.exe"
      // shell:env.SHEEL_PATH
    };
    let res = exec(command,options,function(err:ExecException|null,stdo:string|Buffer,stde:string|Buffer){
      if(err){
        let data = err.message + stde;
        resolve(Result.fail("失败",data));
      }else{
        resolve(Result.success("成功",stdo));
      }
    });
  });
}