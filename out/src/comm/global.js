"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getGlobalState = exports.getSubscriptions = exports.getExtensionPath = exports.setContext = void 0;
const path = require("path");
const logger_1 = require("./logger");
var context;
function setContext(c) {
    logger_1.Output('set context');
    context = c;
}
exports.setContext = setContext;
function getExtensionPath() {
    return context ? context.extensionPath : path.join(__dirname, '../../');
}
exports.getExtensionPath = getExtensionPath;
function getSubscriptions() {
    return context.subscriptions;
}
exports.getSubscriptions = getSubscriptions;
function getGlobalState() {
    return context.globalState;
}
exports.getGlobalState = getGlobalState;
//# sourceMappingURL=global.js.map