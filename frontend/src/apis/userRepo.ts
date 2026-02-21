import type { Patients, SafePatients } from '../../../shared/types'

interface ApiResponse<T> {
  status: string;
  data?: T;
  message?: string;
}

const API_BASE_URL = 'http://localhost:3000/api/v1';

export async function authenticateUser(user: Partial<Patients>): Promise<SafePatients | null> {
  try {
    const response = await fetch(`${API_BASE_URL}/users/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(user),
    });
    console.log(response)
    if (!response.ok) {
      throw new Error(`Failed to login with user: ${user}`);
    }

    const result: ApiResponse<SafePatients | null> = await response.json()

    if (result.status == '200', result.data) {
      return result.data
    }

    return null
  } catch (err) {
    console.error("Error logging in user:", err)
    throw err
  }
}

export async function createUser(user: Partial<Patients>): Promise<SafePatients | null> {
  try {
    const response = await fetch(`${API_BASE_URL}/users/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(user),
    });

    if (!response.ok) {
      throw new Error(`Failed to register user: ${user}`);
    }

    const result: ApiResponse<SafePatients | null> = await response.json()

    if (result.status == '200', result.data) {
      return result.data
    }

    return null
  } catch (err) {
    console.error("Error creating in user:", err)
    throw err
  }
}
