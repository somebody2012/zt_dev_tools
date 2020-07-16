
import * as vscode from "vscode";
const channel = vscode.window.createOutputChannel('zt_dev_tools');
type LevelType = "warn"|"info"|"error";
export class MsgUtils{
  public static appendLine(msg:string){
    channel.appendLine(msg);
    return channel;
  }
  public static async showMessage(msg:string,level:LevelType="info"){
    switch (level) {
      case 'warn': 
        await vscode.window.showWarningMessage(msg);
        break;
      case 'info': 
        await vscode.window.showInformationMessage(msg);
        break;
      case 'error': 
        await vscode.window.showErrorMessage(msg);
        break;
    } 
  }
}
