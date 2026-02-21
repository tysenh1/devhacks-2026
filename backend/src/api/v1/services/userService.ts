import db from '../../../database.ts';
import argon2 from 'argon2';
import { randomUUID } from 'crypto';

interface AccountLogin {
  email: string;
  password: string;
}

interface Account extends AccountLogin {
  first_name: string,
  last_name: string,
  dob: Date,
  phin: string,
}

export const loginUser = async (user: AccountLogin) => {
  const patient: AccountLogin = db.prepare('SELECT * FROM patients WHERE email = ?').get(user.email) as AccountLogin;

  if (!patient) {
    throw new Error('Invalid email or password');
  }


  const isCorrect = await argon2.verify(patient.password, user.password);

  if (isCorrect) {
    return patient
  }
  else throw new Error('Invalid email or password');
}

export const registerUser = async (user: Account) => {
  try {
    const stmt = db.prepare(`INSERT INTO patients (id, email, password, first_name, last_name, dob, phin) VALUES (?, ?, ?, ?, ?, ?, ?)`);

    const hashed_password = await argon2.hash(user.password);

    const id = randomUUID()

    const result = stmt.run(id, user.email, hashed_password, user.first_name, user.last_name, user.dob, user.phin);

    if (result.changes == 0) {
      throw new Error("Failed to insert into table")
    }

    return user
  } catch (err) {
    throw new Error(`${err}`);
  }
}
