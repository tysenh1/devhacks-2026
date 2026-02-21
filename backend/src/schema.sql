-- BASE TABLES
CREATE TABLE IF NOT EXISTS patients (
    id BLOB PRIMARY KEY,
    first_name TEXT NOT NULL,
    last_name TEXT NOT NULL,
    email TEXT UNIQUE NOT NULL,
    dob TEXT NOT NULL,
    password TEXT NOT NULL,
    phin TEXT UNIQUE NOT NULL,

);

CREATE TABLE IF NOT EXISTS conditions (
    id TEXT PRIMARY KEY,
    condition_name TEXT UNIQUE NOT NULL,
    description TEXT
);

CREATE TABLE IF NOT EXISTS vaccines (
    id TEXT PRIMARY KEY,
    name TEXT UNIQUE NOT NULL
);

CREATE TABLE IF NOT EXISTS vaccine_records (
    id TEXT PRIMARY KEY,
    patient_id TEXT,
    vaccine_id TEXT,
    admin_date TEXT,
    dose_number INTEGER,
    FOREIGN KEY(patient_id) REFERENCES patients(id) ON DELETE CASCADE,
    FOREIGN KEY(vaccine_id) REFERENCES vaccines(id) ON DELETE CASCADE
);

-- BRIDGE TABLES

CREATE TABLE IF NOT EXISTS allergies (
    id TEXT PRIMARY KEY,
    patient_id TEXT,
    vaccine_id TEXT,
    FOREIGN KEY(patient_id) REFERENCES patients(id),
    FOREIGN KEY(vaccine_id) REFERENCES vaccines(id)
);

CREATE TABLE IF NOT EXISTS vaccine_rules (
    id TEXT PRIMARY KEY,
    vaccine_id TEXT,
    dose_number INTEGER,
    min_age_days REAL,
    max_age_days REAL,
    min_interval_days REAL,
    condition_id TEXT,
    FOREIGN KEY(vaccine_id) REFERENCES vaccines(id) ON DELETE CASCADE,
    FOREIGN KEY(condition_id) REFERENCES conditions(id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS patient_medical_profile (
    id TEXT PRIMARY KEY,
    patient_id TEXT UNIQUE,
    patient_address TEXT,
    emergency_contact TEXT,
    family_doctor TEXT,
    gender TEXT,
    FOREIGN KEY(patient_id) REFERENCES patients(id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS patient_conditions(
    id TEXT PRIMARY KEY,
    condition_id TEXT,
    patient_id TEXT,
    diagnosis_date TEXT,
    is_active INTEGER,
    FOREIGN KEY(condition_id) REFERENCES conditions(id)
)
