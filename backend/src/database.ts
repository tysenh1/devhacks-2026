import Database from 'better-sqlite3';
import path from 'path';
import fs from 'node:fs';

const dbPath = path.resolve('src/users.db');
// const db = new Database(dbPath, { verbose: console.log })
const db = new Database(dbPath)

export default db;
