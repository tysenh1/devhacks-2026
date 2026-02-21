import db from '../../../database.ts';
import argon2 from 'argon2';
import { type SafePatients, type Patients } from '../../../../../shared/types.ts'

interface Account {
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
