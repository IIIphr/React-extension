import * as db from './db.json';

export class Database {

    static getGuide(word: string): string{
        const index = db.guides.findIndex(e => e.word == word)
        if(index != -1){
            return db.guides[index].guide;
        }
        return "No data on this word.";
    }
}