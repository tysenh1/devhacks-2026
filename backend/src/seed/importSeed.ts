import Database from 'better-sqlite3';
import path from 'path';
import fs from 'node:fs';
import db from '../database.ts';
import { SEED_DATA } from './seedData.ts';
import argon2 from 'argon2'

const schemaPath = path.resolve('src/schema.sql')

const schema = fs.readFileSync(schemaPath, 'utf8')

const tables = [
  'vaccine_records',
  'patient_conditions',
  'vaccine_rules',
  'patient_medical_profile',
  'patients',
  'conditions',
  'vaccines',
  'allergies'
]

async function seedDb() {
  console.log("Starting database seeding...")

  const password = await argon2.hash('passcode123')

  tables.forEach(table => {
    db.exec(`DROP TABLE IF EXISTS ${table}`)
  })

  console.log("Tables dropped.")

  db.exec(schema)

  const insertPatient = db.prepare('INSERT INTO patients (id, first_name, last_name, email, dob, password, phin) VALUES (?, ?, ?, ?, ?, ?, ?)');
  const insertVaccine = db.prepare('INSERT INTO vaccines (id, name, description) VALUES (?, ?, ?)');
  const insertCondition = db.prepare('INSERT INTO conditions (id, condition_name, description) VALUES (?, ?, ?)');
  const insertRule = db.prepare('INSERT INTO vaccine_rules (id, vaccine_id, dose_number, min_age_days, max_age_days, min_interval_days, condition_id) VALUES (?, ?, ?, ?, ?, ?, ?)');
  const insertProfile = db.prepare('INSERT INTO patient_medical_profile (id, patient_id, patient_address, emergency_contact, family_doctor) VALUES (?, ?, ?, ?, ?)');
  const insertRecord = db.prepare('INSERT INTO vaccine_records (id, patient_id, vaccine_id, admin_date, dose_number) VALUES (?, ?, ?, ?, ?)');

  const seedTransaction = db.transaction(() => {
    for (const c of SEED_DATA.conditions) insertCondition.run(c.id, c.condition_name, c.description);
    for (const v of SEED_DATA.vaccines) insertVaccine.run(v.id, v.name, v.description);
    for (const p of SEED_DATA.patients) insertPatient.run(p.id, p.first_name, p.last_name, p.email, p.dob, password, p.phin);
    for (const r of SEED_DATA.rules) insertRule.run(r.id, r.vaccine_id, r.dose_number, r.min_age_days, r.max_age_days, r.min_interval_days, r.condition_id);
    for (const pr of SEED_DATA.profiles) insertProfile.run(pr.id, pr.patient_id, pr.patient_address, pr.emergency_contact, pr.family_doctor);
    for (const rec of SEED_DATA.records) insertRecord.run(rec.id, rec.patient_id, rec.vaccine_id, rec.admin_date, rec.dose_number);
  });

  try {
    seedTransaction();
    console.log("DB Seeded")
  } catch (err) {
    console.error(`Seeding FAILED: ${err}`)
  } finally {
    db.close()
  }




}

seedDb();
