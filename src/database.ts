import * as db from './db.json';
import markdownit from 'markdown-it';
import { readFileSync } from 'fs';
import * as vscode from 'vscode';

export class Database {

    static md = markdownit("commonmark", {
        html: true
    }).use(
        require('markdown-it-container'), 'rtl'
    );

    static getGuide(word: string, context: vscode.ExtensionContext): string{
        const index = db.guides.findIndex(e => e.word === word);
        if(index !== -1){
            return Database.md.render(
                readFileSync(
                    context.extensionPath.toString()
                    + "/src/database/"
                    + db.guides[index].guide
                ).toString()
            );
        }
        return "No data on this word.";
    }
}