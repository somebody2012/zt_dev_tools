import db from "../../db/index";
import vscode ,{ StatusBarItem, window, StatusBarAlignment } from "vscode";
// import MyTreeProvider from "./TreeDataProvoder.js"
import {Output} from "../../comm/logger";




export default async function active(context,cmdParams){
  let res = await db.query("SELECT * FROM PRODUCTS");
  vscode.window.showInformationMessage(JSON.stringify(res));
  Output("-----1------");

  // let inpRes1 = await vscode.window.showInputBox({
  //   ignoreFocusOut: true,
  //   prompt: "Please Type in Repository Name:",
  //   placeHolder: "xxx",
  // })
  // vscode.window.showInformationMessage(inpRes1);

  // let repoType = await vscode.window.showQuickPick(
  //   [ 
  //     {
  //       label: "RepoType.public",
  //       picked: true
  //     }, 
  //     {
  //       label: "RepoType.private"
  //     }
  //   ], 
  //   {
  //     ignoreFocusOut: true,
  //     placeHolder: "create public or private repo:",
  //   });
  // vscode.window.showInformationMessage(JSON.stringify(repoType))

  // let configName = vscode.workspace.getConfiguration().get("name")
  // vscode.window.showInformationMessage(configName);  
  // vscode.workspace.getConfiguration().update('vscodePluginDemo.yourName', '前端艺术家', true);

  // let name = context.globalState.get("name");
  // // context.globalState.update("name",{name:"jack",age:22})
  // vscode.window.showInformationMessage(JSON.stringify(name))


  // vscode.window.registerTreeDataProvider(
  //   'tool1',
  //   new NodeDependenciesProvider(vscode.workspace.rootPath)
  // );

  // vscode.window.createTreeView('tool1', {
  //   treeDataProvider: new NodeDependenciesProvider(vscode.workspace.rootPath)
  // });

  // MyTreeProvider.init()
  // var panel = vscode.window.createWebviewPanel('testWebview', "课程内容", vscode.ViewColumn.Active, {
  //   enableScripts: true,
  //   retainContextWhenHidden: true,
  //   enableFindWidget: true,
  // });
  // panel.webview.html = `<html><div style="color:red;">sdfsdfsdfsdf</div></html>`;

  vscode.window.showErrorMessage("错误")

  let statusBarItem = window.createStatusBarItem(StatusBarAlignment.Right, 200);
  
  statusBarItem.text = `text`;
  statusBarItem.tooltip = 'In case if it takes long time, try to close all browser window.';
  statusBarItem.command = "zt-dev-tools.helloWorld";
  statusBarItem.show();

  

}


