import * as vscode from 'vscode';

export class PanelBuilder {

    static buildPanel(title: string, header: string, body: string): vscode.WebviewPanel{
        const panel = vscode.window.createWebviewPanel('guide', title, vscode.ViewColumn.Beside);
        panel.webview.html = 
        "<h1>" + header + "</h1>" +
        "<p>" + body + "</p>";
        return panel;
    }
}