import * as vscode from 'vscode';

const channel = vscode.window.createOutputChannel('zt_dev_tools');

export function Output(str: string, level?: string) {
  if (level) {
    switch (level) {
      case 'warn': 
        vscode.window.showWarningMessage(str);
        break;
      case 'info': 
        vscode.window.showInformationMessage(str);
        break;
      case 'error': 
        vscode.window.showErrorMessage(str);
        break;
    }        
  }
  channel.appendLine(str); 
  // channel.show();
}