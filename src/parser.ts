import * as vscode from 'vscode';

export class Parser {

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

    static isAlphabet(char: string): boolean{
        return char.toLowerCase().localeCompare('a') >= 0 && char.toLowerCase().localeCompare('z') <= 0;
    }

    static getCurrentWord(document: vscode.TextDocument | undefined, position: vscode.Position | undefined): string{
        if(document == undefined || position == undefined){
            return "";
        }
        var res = "";
        const line = document.lineAt(position.line).text;
        for (var i=position.character; i >= 0; i--){
            if(! this.isAlphabet(line.charAt(i))){
                break;
            }
            res = line.charAt(i) + res;
        }
        for (var i=position.character+1; i < line.length; i++){
            if(! this.isAlphabet(line.charAt(i))){
                break;
            }
            res = res + line.charAt(i);
        }
        return res;
    }
}