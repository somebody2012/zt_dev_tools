import {execThenable} from "../comm/index"
import {MsgUtils} from "../comm/MsgUtils"
import {Result} from "../comm/Result"
import * as fs from "fs"
import * as _path from "path"
import * as vscode from "vscode"
function getBuildPath(path:string){
  let pathArr = path.split(_path.sep);
  let rootName = ["FCClient2","FCClientCommon","FCClient"];
  let index = -1;
	for(let i=0;i<rootName.length;i++){
		let index1 = pathArr.indexOf(rootName[i]);
		if(index1 != -1){
			index = index1;
			break
		}
  }
  if(index == -1) return Result.fail("不是FCClient工程");
  return Result.success("成功",{
    cwd:pathArr.slice(0,index+1).join(_path.sep),
    buildPath:pathArr.slice(index).join(_path.sep)
  })
}
export default async function buildTrade({path}){
  let isFile = fs.statSync(path).isFile();
  let isDir = fs.statSync(path).isDirectory();
  let buildSrc = path.split(/\//);
  let FCClientIndex = buildSrc.indexOf();
  if(isFile || isDir){
    let pathRes = getBuildPath(path);
    if(pathRes.isSuccess){
      let {cwd,buildPath} = pathRes.data;
      let res = await execThenable(`npm run build:trade --path ${buildPath}`,cwd);
      MsgUtils.appendLine(res.data);
      MsgUtils.showMessage("编译成功","info")
      if(!res.isSuccess){
        MsgUtils.showMessage(res.data,"error");
      }
    }else{
      MsgUtils.showMessage(pathRes.message,"error");
    }
  }

  

}