import * as vscode from 'vscode';

export class Parser {

    static specialChars = ['.', ',', '{', '}', ';']

    static parse(document: vscode.TextDocument): string[] {
        var res = [];
        for (var line = 0; line < document.lineCount; line++) {
            const words = document.lineAt(line).text.trim().split(" ");
            res.push(...words);
        }
        return res;
    }
}