import {execThenable} from "../comm/index"
import {MsgUtils} from "../comm/MsgUtils"
export default async function buildTrade(params){
  let res = await execThenable("ls","E://");
  MsgUtils.appendLine(res.data)
  if(!res.isSuccess){
    MsgUtils.showMessage(res.data,"error");
  }

}