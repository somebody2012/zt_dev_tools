import * as vscode from "vscode";
export async function saveAll(params){
  vscode.workspace.saveAll();
}