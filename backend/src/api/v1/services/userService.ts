import db from '../../../database.ts'
import argon2 from 'argon2'


interface Account {
  email: string;
  password: string;
}

export const loginUser = async (user: Account) => {
  try {
    const patient:  = db.prepare('SELECT * FROM patients WHERE email = ?').get(user.email);

    if (!patient) {
      throw new Error('Invalid email or password')
    }

    const isCorrect = await argon2.verify(patient.password, user.password)
  }
}
