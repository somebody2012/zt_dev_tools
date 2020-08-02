import * as vscode from "vscode";




export default function initConfig(webview:vscode.Webview){
  let config = {
    mysql:[
      {label:"主机",fieldName:"mysql.host",value:""},
      {label:"数据库名称",fieldName:"mysql.database",value:""},
      {label:"用户名",fieldName:"mysql.user",value:""},
      {label:"密码",fieldName:"mysql.password",value:""},
    ]
  }
  config.mysql.forEach(v => {
    v.value = vscode.workspace.getConfiguration().get(v.fieldName)||""
  })
  let name = vscode.workspace.getConfiguration().get("name");
  let initData = {
    type:"initFrame",
    config:config
  };
  webview.postMessage(initData)
}