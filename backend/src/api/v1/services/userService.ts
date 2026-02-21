import db from '../../../database.ts';
import argon2 from 'argon2';
import fs from 'node:fs'
import * as csv from 'fast-csv'
import { randomUUID } from 'node:crypto';

interface Account {
  email: string;
  password: string;
}

export const loginUser = async (user: Account) => {
  const patient: Account = db.prepare('SELECT * FROM patients WHERE email = ?').get(user.email) as Account;

  if (!patient) {
    throw new Error('Invalid email or password');
  }


  const isCorrect = await argon2.verify(patient.password, user.password);

  if (isCorrect) {
    return patient
  }
  else throw new Error('Invalid email or password');
}

export const updateHealthInfo = async (filePath: string) => {
  const rows: any[] = [];

  const stream = fs.createReadStream(filePath)
    .pipe(csv.parse({ headers: true, trim: true }))

  for await (const row of stream) {
    rows.push({
      id: randomUUID(),
      condition_id: row.condition_id,
      patient_id: row.patient_id,
      diagnosis_date: row.diagnosis_date,
      is_active: row.is_active
    })
  }

  const insert = db.prepare(`
INSERT INTO patient_conditions (id, condition_id, patient_id, diagnosis_date, is_active) VALUES (@id, @condition_id, @patient_id, @diagnosis_date, @is_active) 
`)
  const insertMany = db.transaction((data) => {
    for (const p of data) insert.run(p)
  })

  insertMany(rows)
  return;


}
