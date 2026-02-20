import db from '../../../database.ts';
import argon2 from 'argon2';


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
