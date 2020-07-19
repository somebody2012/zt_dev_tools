"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deactivate = exports.activate = void 0;
const vscode = require("vscode");
const global_1 = require("./comm/global");
const index_1 = require("./command/test/index");
const buildTrade_1 = require("./command/buildTrade");
const Hover_1 = require("./command/Hover");
const saveAll_1 = require("./command/saveAll");
function activate(context) {
    global_1.setContext(context);
    context.subscriptions.push(vscode.commands.registerCommand('zt-dev-tools.helloWorld', index_1.default));
    context.subscriptions.push(vscode.commands.registerCommand('zt-dev-tools.build:trade', buildTrade_1.default));
    vscode.languages.registerHoverProvider(Hover_1.HOVER_SELECTOR, new Hover_1.Hover());
    context.subscriptions.push(vscode.commands.registerCommand("zt-dev-tools.saveAll", saveAll_1.saveAll));
}
exports.activate = activate;
function deactivate() { }
exports.deactivate = deactivate;
//# sourceMappingURL=extension.js.map