import { useState } from "react"
import type { Patients, SafePatients } from "../../../shared/types"
import * as userRepo from '../apis/userRepo'

export function useUser() {
	const [user, setUser] = useState<SafePatients | null>(null)

	const logInUser = async ({ email, password }: Partial<Patients>) => {
		const patient: Partial<Patients> = { email, password }
		const result: SafePatients | null = await userRepo.authenticateUser(patient)

		if (result) {
			setUser(result)
		}
	}

	const createUser = async (pat: Patients): Promise<boolean> => {
		const patient: Patients | null = await userRepo.createUser(pat)

		if (patient) {
			setUser(patient)
		}

		return !!patient;

	}

	return ({
		user,
		logInUser,
		createUser
	})

}
