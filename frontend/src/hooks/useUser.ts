import { useEffect, useState } from "react"
import type { EligibleVaccines, Patients, SafePatients, VaccineRecords, Upcoming } from "../../../shared/types"
import * as userRepo from '../apis/userRepo'

export function useUser() {
  const [user, setUser] = useState<SafePatients | null>(null)
  const [eligibleVaccines, setEligibleVaccines] = useState<EligibleVaccines[] | null>(null)
  const [upcoming, setUpcoming] = useState<Upcoming[] | null>(null)

  useEffect(() => {
    console.log(user)
  }, [user])
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

  const fetchVaccines = async (): Promise<void> => {
    console.log("USER", user)
    if (!user) return;
    const vaccines: EligibleVaccines[] | null = await userRepo.fetchEligibleVaccines(user.id)

    if (vaccines) {
      setEligibleVaccines(vaccines)
    }
  }

  const fetchUpcoming = async (): Promise<void> => {
    if (!user) return;
    const upcoming: Upcoming[] | null = await userRepo.fetchUpcoming(user.id)

    if (upcoming) {
      setUpcoming(upcoming)
    }
  }

  const uploadUserFile = async (file: File) => {
    const success: boolean = await userRepo.uploadUserData(file)

    return success

  }

  return ({
    user,
    logInUser,
    createUser,
    fetchVaccines,
    eligibleVaccines,
    setEligibleVaccines,
    uploadUserFile,
    fetchUpcoming,
    upcoming
  })

}
