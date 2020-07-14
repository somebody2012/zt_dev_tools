"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deactivate = exports.activate = void 0;
const vscode = require("vscode");
const global_1 = require("./comm/global");
const index_1 = require("./command/test/index");
function activate(context) {
    global_1.setContext(context);
    let disposable = vscode.commands.registerCommand('zt-dev-tools.helloWorld', index_1.default);
    context.subscriptions.push(disposable);
}
exports.activate = activate;
function deactivate() { }
exports.deactivate = deactivate;
//# sourceMappingURL=extension.js.map