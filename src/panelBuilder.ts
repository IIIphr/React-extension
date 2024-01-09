import * as vscode from 'vscode';
import * as fs from 'fs';

export class PanelBuilder {

    static buildPanel(title: string, body: string, context: vscode.ExtensionContext) {
        fs.readFile(context.extensionPath + '/src/style.css', (err, styleData) => {
            if(err){
                console.log(err);
            }
            else{
                fs.readFile(context.extensionPath + '/src/prism.css', (err, prismData) => {
                    if(err){
                        console.log(err);
                    }
                    else{
                        fs.readFile(context.extensionPath + '/src/prism.js', (err, jsData) => {
                            if(err){
                                console.log(err);
                            }
                            else{
                                const style = styleData.toString();
                                const prism = prismData.toString();
                                const js = jsData.toString();
                                const panel = vscode.window.createWebviewPanel('guide', title, vscode.ViewColumn.Beside, {
                                    enableScripts: true
                                });
                                panel.webview.html = 
                                "<style>" + prism + "</style>\n" +
                                "<style>" + style + "</style>\n" +
                                body +
                                "\n<script>" + js + "</script>";
                            }
                        });
                    }
                });
            }
        });
    }
}