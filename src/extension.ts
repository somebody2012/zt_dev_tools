import * as vscode from 'vscode';
import {setContext} from "./comm/global"
import helloWorld from "./command/test/index";
import buildTrade from "./command/buildTrade";
export function activate(context: vscode.ExtensionContext) {
	setContext(context);
	context.subscriptions.push(vscode.commands.registerCommand('zt-dev-tools.helloWorld',helloWorld));
	context.subscriptions.push(vscode.commands.registerCommand('zt-dev-tools.build:trade',buildTrade));
}

export function deactivate() {}
