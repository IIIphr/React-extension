import * as vscode from 'vscode';

export class Parser {

    static specialChars = ['.', ',', '{', '}', ';']

    static parse(document: vscode.TextDocument, position?: vscode.Position): string[] {
        var res = [];
        for (var line = 0; line < (position ? position.line+1 : document.lineCount); line++) {
            var lineText = document.lineAt(line).text;
            if(position && line == position.line){
                lineText = lineText.substring(0, position.character);
            }
            const words = lineText.trim().split(' ');
            res.push(...words);
        }
        return res;
    }
}