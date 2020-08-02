import * as vscode from "vscode";


export async function reciveRefreshMsg(msg:any){
  let config = msg.data.config;
  for(let configName in config){
    for(let i=0;i<config[configName].length;i++){
      let item = config[configName][i];
      vscode.workspace.getConfiguration().update(item.fieldName,item.value);
    }
  }
  return {
    msg:"更新成功"
  }
}