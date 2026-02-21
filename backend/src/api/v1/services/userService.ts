import db from '../../../database.ts';
import argon2 from 'argon2';
import { type SafePatients, type Patients } from '../../../../../shared/types.ts'

import fs from 'node:fs'
import * as csv from 'fast-csv'
import { randomUUID } from 'node:crypto';



interface AccountLogin {
  email: string;
  password: string;
}
export const loginUser = async (user: Account) => {
  const patient: Patients = db.prepare('SELECT * FROM patients WHERE email = ?').get(user.email) as Patients;

  if (!patient) {
    throw new Error('Invalid email or password');
  }



  const isCorrect = await argon2.verify(patient.password, user.password);
  const safeAccount: SafePatients = {
    id: patient.id,
    first_name: patient.first_name,
    last_name: patient.last_name,
    email: patient.email,
    dob: patient.dob,
    phin: patient.phin
  }

  if (isCorrect) {
    return safeAccount
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

export const registerUser = async (user: Patients) => {
  try {
    const stmt = db.prepare(`INSERT INTO patients (id, email, password, first_name, last_name, dob, phin) VALUES (?, ?, ?, ?, ?, ?, ?)`);

    const hashed_password = await argon2.hash(user.password);

    const id = randomUUID()

    const result = stmt.run(id, user.email, hashed_password, user.first_name, user.last_name, user.dob, user.phin);

    if (result.changes == 0) {
      throw new Error("Failed to insert into table")
    }
    const safeUser: SafePatients = {
      id: id,
      email: user.email,
      first_name: user.first_name,
      last_name: user.last_name,
      dob: user.dob,
      phin: user.phin
    }

    return safeUser

  } catch (err) {
    throw new Error(`${err}`);
  }

}
