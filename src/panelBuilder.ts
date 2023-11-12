import * as vscode from 'vscode';
import * as fs from 'fs';

export class PanelBuilder {

    static buildPanel(title: string, header: string, body: string, context: vscode.ExtensionContext) {
        fs.readFile(context.extensionPath + '/src/style.css', (err, data) => {
            if(err){
                console.log(err);
            }
            else{
                const style = data.toString();
                const panel = vscode.window.createWebviewPanel('guide', title, vscode.ViewColumn.Beside);
                panel.webview.html = 
                "<style>" + style + "</style>" +
                "<h1>" + header + "</h1>" +
                "<p>" + body + "</p>";
            }
        });
    }
}