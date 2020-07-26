import * as vscode from 'vscode';
import {setContext} from "./comm/global"
import helloWorld from "./command/test/index";
import buildTrade from "./command/buildTrade";
import * as CONST from "./const/index";
import {Hover,HOVER_SELECTOR} from "./command/Hover"
import {saveAll} from "./command/saveAll"
export function activate(context: vscode.ExtensionContext) {
	setContext(context);
	context.subscriptions.push(vscode.commands.registerCommand('zt-dev-tools.helloWorld',helloWorld));
	context.subscriptions.push(vscode.commands.registerCommand('zt-dev-tools.build:trade',buildTrade));
	vscode.languages.registerHoverProvider(HOVER_SELECTOR,new Hover());
	context.subscriptions.push(vscode.commands.registerCommand("zt-dev-tools.saveAll",saveAll))



}
export function deactivate() {}
