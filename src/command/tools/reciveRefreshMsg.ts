import * as vscode from "vscode";


export async function reciveRefreshMsg(msg:string){
  await vscode.window.showInformationMessage("refresh")
  return {
    name:"jack",
    age:22
  }
}