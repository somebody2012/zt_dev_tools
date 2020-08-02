import * as vscode from "vscode";
import * as fs from "fs";
import * as path from "path";
import {getExtensionPath,getGlobalState} from "../../comm/global"
import * as utils from "../../comm/index"
import * as ejs from "ejs";
import {reciveRefreshMsg} from "./reciveRefreshMsg"
import initConfig from "./initConfig";



function transformPath(panel:vscode.WebviewPanel,src:string):string{
  let htmlDirRoot = path.resolve(getExtensionPath(),"images/html");
  let jsPath = panel.webview.asWebviewUri(
    vscode.Uri.file(path.resolve(htmlDirRoot,src))
  );
  return jsPath.toString();
}

let isPanelOpened = false;

export async function tools(params){
  if(isPanelOpened){
    vscode.window.showWarningMessage("工具页签已经打开");
    return;
  }
  let htmlDirRoot = path.resolve(getExtensionPath(),"images/html");
  
  let panel = vscode.window.createWebviewPanel("tools","小工具",vscode.ViewColumn.Active,{
    enableScripts: true,
    retainContextWhenHidden:true
  });

  let originTpl = fs.readFileSync(path.resolve(htmlDirRoot,"index.html"),{encoding:"utf-8"});
  let renderData = {
    css:{
      elementUiCss:transformPath(panel,"css/element-ui.css"),
      globalCss:transformPath(panel,"css/global.css"),
    },
    js:{
      vueJs:transformPath(panel,"js/vue.js"),
      elementUiJs:transformPath(panel,"js/element-ui.js"),
      mainJs:transformPath(panel,"index.js"),
    }
  };
  let htmlStr = ejs.render(originTpl,renderData);
  panel.webview.html = htmlStr;
  isPanelOpened = true;

  panel.webview.onDidReceiveMessage(async msg => {
    if(msg.data.type == "refresh"){
      msg.data = await reciveRefreshMsg(msg);
    }
    panel.webview.postMessage(msg);
  });



  panel.dispose = () => {
    isPanelOpened = false;
    getGlobalState().update("msgResolvers",[]);
  }

  await utils.sleep(2000);

  initConfig(panel.webview);


  

}