import * as vscode from "vscode";
import {sleep} from "../comm/index";
import * as fs from "fs";
import * as path from "path";
import {getExtensionPath} from "../comm/global"
import * as ejs from "ejs";


export async function saveAll(params){
  vscode.workspace.saveAll();
}