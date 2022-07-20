import sqlite3 from 'sqlite3'

const sqlite = sqlite3.verbose();
// const sqlite = require('sqlite3').verbose();
// let isConn = false;
const db = new sqlite.Database('src/extraResources/user.db');

const sql = 'SELECT * FROM user WHERE userid = ? and password = ?'
// const sql_pw = 'SELECT password FROM user WHERE userid = ?'

const database = {
    connect: (err: any, arg: any) => {
        if (err) {
            console.error(err);
        } else {
            console.log('Connected to the Database.');
            // isConn = true
        }
    },

    login: (inputID: string, inputPW: string) => {
        return new Promise(function(resolve, reject) {
            db.get(sql, [inputID, inputPW], (err: any, row: any) => {
                if ( err ){
                    return reject(err);  
                }
                if ( row != null ) {
                    return resolve(true);
                }
                return reject("Try Again");
            });
        }).catch(alert);
    }
}

export default database