import * as vscode from 'vscode';
import {setContext} from "./comm/global"
import helloWorld from "./command/test/index";
export function activate(context: vscode.ExtensionContext) {
	setContext(context);
	let disposable = vscode.commands.registerCommand('zt-dev-tools.helloWorld',helloWorld);
	context.subscriptions.push(disposable);
}

export function deactivate() {}
