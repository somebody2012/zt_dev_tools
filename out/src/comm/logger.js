"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Output = void 0;
const vscode = require("vscode");
const channel = vscode.window.createOutputChannel('zt_dev_tools');
async function Output(str, level) {
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
exports.Output = Output;
//# sourceMappingURL=logger.js.map