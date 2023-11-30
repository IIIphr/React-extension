import * as db from './db.json';
import { writeFileSync, readFileSync } from 'fs';
import * as vscode from 'vscode';

export class Database {

    static getGuide(word: string): string{
        const index = db.guides.findIndex(e => e.word === word);
        if(index !== -1){
            return db.guides[index].guide;
        }
        return "No data on this word.";
    }

    static encode(context: vscode.ExtensionContext){
        const encoded = Buffer.from(JSON.stringify(db)).toString('base64');
        writeFileSync(context.extensionPath + "/src/encoded.db", encoded);
    }

    static decode(context: vscode.ExtensionContext){
        const decoded = Buffer.from(readFileSync(context.extensionPath.toString() + "/src/encoded.db").toString(), 'base64').toString('utf-8');
        writeFileSync(context.extensionPath + "/src/decoded.json", decoded.toString());
    }
}