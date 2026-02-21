import { useEffect, useState } from "react"
import type { Patients, SafePatients } from "../../../shared/types"
import * as userRepo from '../apis/userRepo'

export function useUser() {
  const [user, setUser] = useState<SafePatients | null>(null)
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

  const uploadUserFile = async (file: File) => {
    const success: boolean = await userRepo.uploadUserData(file)

    return success
  }

  return ({
    user,
    logInUser,
    createUser,
    uploadUserFile
  })

}
