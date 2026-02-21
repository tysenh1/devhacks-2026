import db from '../../../database.ts';
import argon2 from 'argon2';
import { type SafePatients, type Patients, VaccineRecords } from '../../../../../shared/types.ts'

import fs from 'node:fs'
import * as csv from 'fast-csv'
import { randomUUID } from 'node:crypto';



interface AccountLogin {
  email: string;
  password: string;
}
export const loginUser = async (user: AccountLogin) => {
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
  const conditionRows: any[] = [];
  const recordsRows: any[] = [];

  const stream = fs.createReadStream(filePath)
    .pipe(csv.parse({ headers: true, trim: true }))

  for await (const row of stream) {
    conditionRows.push({
      id: randomUUID(),
      condition_id: row.condition_id,
      patient_id: row.patient_id,
      diagnosis_date: row.diagnosis_date,
      is_active: row.is_active
    })
    recordsRows.push({
      id: randomUUID(),
      patient_id: row.patient_id,
      vaccine_id: row.vaccine_id,
      admin_date: row.admin_date,
      dose_number: row.dose_number
    })
  }

  const conditionInsert = db.prepare(`
INSERT INTO patient_conditions (id, condition_id, patient_id, diagnosis_date, is_active) VALUES (@id, @condition_id, @patient_id, @diagnosis_date, @is_active) 
`)
  const recordInsert = db.prepare(`
INSERT INTO vaccine_records (id, patient_id, vaccine_id, admin_date, dose_number) VALUES (@id, @patient_id, @vaccine_id, @admin_date, @dose_number)
`)
  const performUpdate = db.transaction((conditions, records) => {
    for (const p of conditions) conditionInsert.run(p)
    for (const r of records) recordInsert.run(r)
  })

  try {

    performUpdate(conditionRows, recordsRows)
    return
  } catch (err) {
    throw new Error('Failed to update patient data')
  }

}

export const getHealthInfo = async (id: string | string[]): Promise<VaccineRecords | null> => {
  const record = db.prepare(`SELECT * FROM vaccine_records WHERE patient_id  = ?`).get(id) as VaccineRecords

  if (record) {
    return null
  }

  return record

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

export const getEligibleVaccines = (patientId: string) => {
  const patient = db.prepare('SELECT dob FROM patients WHERE id = ?').get(patientId) as Patients;
  if (!patient) throw new Error("Patient not found");

  // const ageInYears = (new Date().getTime() - new Date(patient.dob).getTime()) / (1000 * 60 * 60 * 24 * 365.25);
  const ageInYears = (new Date().getTime() - new Date(patient.dob).getTime()) / (1000 * 60 * 60 * 24)

  const allVaccines = db.prepare('SELECT * FROM vaccines JOIN vaccine_rules ON vaccines.id = vaccine_rules.vaccine_id').all();
  const patientRecords = db.prepare('SELECT * FROM vaccine_records WHERE patient_id = ?').all(patientId);

  return allVaccines.filter(vaccine => {
    if (ageInYears < vaccine.min_age_days || ageInYears > vaccine.max_age_days) {
      return false;
    }

    const previousDoses = patientRecords.filter(r => r.vaccine_id === vaccine.id);

    if (previousDoses.length >= vaccine.dose_number) {
      return false;
    }

    if (previousDoses.length > 0) {
      const lastDoseDate = new Date(Math.max(...previousDoses.map(r => new Date(r.admin_date).getTime())));
      const daysSinceLastDose = (new Date().getTime() - lastDoseDate.getTime()) / (1000 * 60 * 60 * 24);

      if (daysSinceLastDose < vaccine.min_interval_days) {
        return false;
      }
    }

    return true;
  });
}

export const getUpcoming = (patientId: string) => {
  const patient = db.prepare('SELECT dob FROM patients WHERE id = ?').get(patientId) as Patients;
  if (!patient) throw new Error("Patient not found");

  const dob = new Date(patient.dob);
  const now = new Date();
  const ageInDays = Math.floor((now.getTime() - dob.getTime()) / (1000 * 60 * 60 * 24));

  const query = db.prepare(`
      SELECT 
        v.name as vaccine_name,
        vr.dose_number,
        vr.min_age_days,
        vr.max_age_days,
        vr.min_interval_days
      FROM vaccine_rules vr
      JOIN vaccines v ON vr.vaccine_id = v.id
      WHERE 
        vr.dose_number = (
          SELECT COUNT(*) + 1 
          FROM vaccine_records 
          WHERE patient_id = ? AND vaccine_id = v.id
        )
        AND ? >= vr.min_age_days 
        AND ? <= vr.max_age_days
        AND NOT EXISTS (
          SELECT 1 FROM vaccine_records vrec 
          WHERE vrec.patient_id = ? 
          AND vrec.vaccine_id = vr.vaccine_id 
          AND vrec.dose_number = vr.dose_number
        )
      ORDER BY v.name ASC
    `);

  return query.all(patientId, ageInDays, ageInDays, patientId);

}
