import * as vscode from 'vscode';
import * as fs from 'fs';

export class PanelBuilder {

    static styleData: string | null = null;
    static prismCss: string | null = null;
    static prismJs: string | null = null;

    static getStyleData(context: vscode.ExtensionContext) {
        this.styleData = fs.readFileSync(context.extensionPath + '/src/style.css').toString();

    }

    static getPrismCss(context: vscode.ExtensionContext) {
        this.prismCss = fs.readFileSync(context.extensionPath + '/src/prism.css').toString();

    }

    static getPrismJs(context: vscode.ExtensionContext) {
        this.prismJs = fs.readFileSync(context.extensionPath + '/src/prism.js').toString();
    }

    static dataCheck(context: vscode.ExtensionContext) {
        if (this.styleData === null) {
            this.getStyleData(context);
        }
        if (this.prismCss === null) {
            this.getPrismCss(context);
        }
        if (this.prismJs === null) {
            this.getPrismJs(context);
        }
    }

    static buildPanel(title: string, body: string, context: vscode.ExtensionContext) {
        this.dataCheck(context);

        const panel = vscode.window.createWebviewPanel('guide', title, vscode.ViewColumn.Beside, {
            enableScripts: true
        });
        panel.webview.html = 
        "<style>" + this.prismCss + "</style>\n" +
        "<style>" + this.styleData + "</style>\n" +
        body +
        "\n<script>" + this.prismJs + "</script>";
    }
}