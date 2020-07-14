import * as vscode from 'vscode';

const channel = vscode.window.createOutputChannel('zt_dev_tools');

export async function Output(str: string, level?: string) {
  if (level) {
    switch (level) {
      case 'warn': 
        await vscode.window.showWarningMessage(str);
        break;
      case 'info': 
        await vscode.window.showInformationMessage(str);
        break;
      case 'error': 
        await vscode.window.showErrorMessage(str);
        break;
    }        
  }
  channel.appendLine(str); 
  // channel.show();
}