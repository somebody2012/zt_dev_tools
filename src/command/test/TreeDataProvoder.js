import * as vscode from "vscode";

class MyTreeProvider{
  constructor(){}
  static init(){
    vscode.window.registerTreeDataProvider("tool1",new MyTreeProvider());
  }
  getTreeItem(e){return e}
  getChildren(el){
    let trees = [
      new vscode.TreeItem("111"),
      new vscode.TreeItem("222"),
    ]
    return new Promise(resolve => resolve(trees));
  }
}

module.exports = MyTreeProvider;
