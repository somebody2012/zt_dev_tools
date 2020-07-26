import * as vscode from "vscode";
import {sleep} from "../comm/index"
vscode.window.onDidChangeTextEditorSelection(e => {
  let s = e.textEditor.selection;
  let text = e.textEditor.document.getText(new vscode.Range(s.start,s.end))
  vscode.window.showInformationMessage(text)
})


export async function saveAll(params){
  if(vscode.window.activeTextEditor){
    let e = vscode.window.activeTextEditor;
    vscode.window.activeTextEditor.edit(TextEditorEdit => {
      // let lastLineText = e.document.getText(e.selection);
      // TextEditorEdit.replace(e.selection,lastLineText + " // 这是注释")
      // TextEditorEdit.insert(e.selection.end," // 这是注释")
    })
  }
  

}