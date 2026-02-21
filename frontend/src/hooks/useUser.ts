import { useEffect, useState } from "react"
import type { EligibleVaccines, Patients, SafePatients, VaccineRecords } from "../../../shared/types"
import * as userRepo from '../apis/userRepo'

export function useUser() {
  const [user, setUser] = useState<SafePatients | null>(null)
  const [eligibleVaccines, setEligibleVaccines] = useState<EligibleVaccines | null>(null)

  const logInUser = async ({ email, password }: Partial<Patients>) => {
    const patient: Partial<Patients> = { email, password }
    const result: SafePatients | null = await userRepo.authenticateUser(patient)

    if (result) {
      setUser(result)
    }
  }

  const createUser = async (pat: Partial<Patients>): Promise<boolean> => {
    const patient: SafePatients | null = await userRepo.createUser(pat)

    if (patient) {
      setUser(patient)
    }

    return !!patient;

  }

  const fetchVaccines = async (id: string): Promise<void> => {
    const vaccines: EligibleVaccines | null = await userRepo.fetchEligibleVaccines(id)

    if (vaccines) {
      setEligibleVaccines(vaccines)
    }

  }

  return ({
    user,
    logInUser,
    createUser,
    eligibleVaccines,
    setEligibleVaccines
  })

}
