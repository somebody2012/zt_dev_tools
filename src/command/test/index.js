import db from "../../db/index";
import vscode ,{ StatusBarItem, window, StatusBarAlignment } from "vscode";
// import MyTreeProvider from "./TreeDataProvoder.js"
import {Output} from "../../comm/logger";
import { stat } from "fs";

vscode.workspace.onDidChangeConfiguration(function(event) {
  let affected = event.affectsConfiguration("name");
  Output(`name changeed`)
});

export default async function active(params){
  

  vscode.workspace.getConfiguration().update("name","tom",true);
  let res = await db.query("SELECT * FROM PRODUCTS");
  vscode.window.showInformationMessage(JSON.stringify(res));
  Output(JSON.stringify(res));

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

  // let statusBarItem = window.createStatusBarItem(StatusBarAlignment.Right, 200);
  
  // statusBarItem.text = `text`;
  // statusBarItem.tooltip = 'In case if it takes long time, try to close all browser window.';
  // statusBarItem.command = "zt-dev-tools.helloWorld";
  // statusBarItem.show();

  // vscode.window.showErrorMessage(`与starling的远程交互依赖vscode-starling.sid配置项`, '打开配置项').then(selection => {
  //   if (selection === '打开配置项') {
  //     vscode.commands.executeCommand('workbench.action.openSettings');
  //   }
  // });

  // const uri = await vscode.window.showSaveDialog({
  //   filters: {
  //     zip: ['zip'], // 文件类型过滤
  //   },
  // });

  // const uris = await window.showOpenDialog({
  //   canSelectFolders: false, // 是否可以选择文件夹
  //   canSelectMany: false, // 是否可以选择多个文件
  //   filters: {
  //     json: ['json'], // 文件类型过滤
  //   },
  // });

  const activeTextEditor = vscode.window.activeTextEditor;
  // const activeDocument = activeTextEditor.document;

  // // 1. 获取所有选中行信息
  // const selection = activeTextEditor.selection;
  // // sample for selection: {"start":{"line":2,"character":0},"end":{"line":2,"character":7},"active":{"line":2,"character":7},"anchor":{"line":2,"character":0}}
  // const { start, end } = selection;

  // Output(JSON.stringify(selection))

  // const insertPositon = new vscode.Position(1, 0);
  // activeTextEditor.edit((TextEditorEdit) => {
  //   TextEditorEdit.insert(insertPositon, `console.log(111);\n`);
  // });

}


