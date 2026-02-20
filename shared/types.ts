export interface Patients {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  dob: string;
  password: string;
}

export interface Conditions {
  id: string;
  condition_name: string;
  description: string;
}

export interface Vaccines {
  id: string;
  name: string;
}

export interface VaccineRecords {
  id: string;
  patient_id?: string;
  vaccine_id?: string;
  admin_date?: string;
  done_number?: number;
}

export interface VaccineRules {
  id: string;
  vaccine_id: string;
  dose_number: string;
  min_age_days: string;
  max_age_days: string;
  min_interal_days: string;
  condition_id: string;
}

export interface patient_medical_profile {
  id: string;
  patient_id: string;
  patient_address: string;
  emergency_contact?: string;
  family_doctor?: string;
}

export interface PatientConditions {
  id: string;
  condition_id: string;
  diagnosis_date: string;
  is_active: string;
}
