# setup.coffee

import Database from 'better-sqlite3'

console.log "setting up DB..."

db = new Database 'ChineseWords.db', {
	fileMustExist: true
	}
db.pragma 'journal_mode = WAL'

console.log "DONE"
