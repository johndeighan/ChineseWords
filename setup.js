// Generated by CoffeeScript 2.7.0
// setup.coffee
var db;

import Database from 'better-sqlite3';

console.log("setting up DB...");

db = new Database('ChineseWords.db', {
  fileMustExist: true
});

db.pragma('journal_mode = WAL');

console.log("DONE");