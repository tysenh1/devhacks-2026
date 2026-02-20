import Database from 'better-sqlite3';
import path from 'path';
import fs from 'node:fs';

const dbPath = path.resolve('users.db');
const schemaPath = path.resolve('schema.sql')
const db = new Database(dbPath, { verbose: console.log })

const schema = fs.readFileSync(schemaPath, 'utf8')

db.exec(schema)
