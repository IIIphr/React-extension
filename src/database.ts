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

    static getGuideEn(word: string, context: vscode.ExtensionContext): string{
        const index = db.guides.findIndex(e => e.word === word);
        if(index !== -1){
            return Database.md.render(
                readFileSync(
                    context.extensionPath.toString()
                    + "/src/database/"
                    + db.guides[index].guide_en
                ).toString()
            );
        }
        return Database.md.render(
            readFileSync(
                context.extensionPath.toString()
                + "/src/database/"
                + db.not_found.en
            ).toString()
        );
    }

    static getGuideFa(word: string, context: vscode.ExtensionContext): string{
        const index = db.guides.findIndex(e => e.word === word);
        if(index !== -1){
            return Database.md.render(
                readFileSync(
                    context.extensionPath.toString()
                    + "/src/database/"
                    + db.guides[index].guide_fa
                ).toString()
            );
        }
        return Database.md.render(
            readFileSync(
                context.extensionPath.toString()
                + "/src/database/"
                + db.not_found.fa
            ).toString()
        );
    }
}