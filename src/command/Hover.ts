import * as vscode from 'vscode';





export const HOVER_SELECTOR:Array<vscode.DocumentFilter> = [
  {
    pattern:"**/{FCClient,FCClient2}/**/*.{vue,js,ts}"
  }
]
export class Hover implements vscode.HoverProvider{
  provideHover(_document: vscode.TextDocument,_position: vscode.Position,_token: vscode.CancellationToken): vscode.ProviderResult<vscode.Hover> {
    const args = [{ resourceUri: _document.uri }];
    const stageCommandUri = vscode.Uri.parse(
      `file:///Users/apple/web/vscode/zt-dev-tools/.eslintrc.json`
    );
    const contents = new vscode.MarkdownString(vscode.env.appRoot);
    contents.isTrusted = true;
    return new vscode.Hover(contents);
  }
}
/**
 * @example1
 * provideHover(_document: vscode.TextDocument,_position: vscode.Position,_token: vscode.CancellationToken): vscode.ProviderResult<vscode.Hover> {
 *  const args = [{ resourceUri: _document.uri }];
 *  const stageCommandUri = vscode.Uri.parse(
 *    `file:///Users/apple/web/vscode/zt-dev-tools/.eslintrc.json`
 *  );
 *  const contents = new vscode.MarkdownString(`[Stage file](${stageCommandUri})`);
 *  contents.isTrusted = true;
 *  return new vscode.Hover(contents);
 *}
 */
