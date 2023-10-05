import * as vscode from 'vscode';

export class Parser {

    static specialChars = ['.', ',', '{', '}', ';']

    static parse(document: vscode.TextDocument) : string[] {
        var res = [];
        for (var line = 1; line <= document.lineCount; line++){
            const lineText = document.lineAt(line);
            const words = lineText.text.trim().split(' ');
            res.push(...words);
            console.log("res: " + JSON.stringify(res));
        }
        return res;
    }
}