// seedData.ts
export const SEED_DATA = {
  conditions: [
    { id: '8d2a6b30-1b5e-4c92-9e1a-8f3a5d2b7c1a', condition_name: 'Asthma', description: 'Chronic respiratory condition' },
    { id: 'fe3b4c10-2d6f-4a81-bb0a-7e5d9c3b1e2f', condition_name: 'Diabetes', description: 'Type 1 or Type 2' }
  ],
  vaccines: [
    { id: '16104f6e-578b-4b41-949e-f41851e36c5d', name: 'MMR', description: 'Measles, Mumps, and Rubella combination vaccine.' },
    { id: '85f0967a-2921-4f11-9a91-443213054593', name: 'HepB', description: 'Hepatitis B vaccine.' },
    { id: '3e0d8692-0b81-4351-93e1-874312649872', name: 'DTaP', description: 'Diphtheria, Tetanus, and acellular Pertussis.' },
    { id: 'a5217983-4812-4c91-b312-748932105642', name: 'IPV', description: 'Inactivated Poliovirus vaccine.' },
    { id: 'c9083214-f982-410a-bc91-321094857621', name: 'Varicella', description: 'Chickenpox vaccine.' },
    { id: 'f2109483-e812-4d21-ab91-847321059642', name: 'PCV13', description: 'Pneumococcal conjugate vaccine.' },
    { id: 'd8102347-c912-4b31-a872-948572103645', name: 'Hib', description: 'Haemophilus influenzae type b vaccine.' },
    { id: 'b5610923-d821-4a31-bc92-104958273641', name: 'Influenza', description: 'Seasonal flu vaccine.' },
    { id: 'e4102938-c812-4f31-b823-749582013642', name: 'HPV', description: 'Human Papillomavirus vaccine.' },
    { id: '71029384-a912-4e21-bc31-847562019342', name: 'MenACWY', description: 'Meningococcal conjugate vaccine.' },
    { id: '2e9c7a21-4f1b-4d7a-8c3e-9b5d1a2f3c4e', name: 'Tdap', description: 'Tetanus, Diphtheria, and Pertussis booster for adults/adolescents.' },
    { id: '5a8d9e2f-1c3b-4a7d-9e6c-2f4a1b3d5e7f', name: 'Shingrix', description: 'Recombinant shingles vaccine for adults 50+.' },
    { id: '7b2a4c1d-6e8f-4a9b-bc3d-1e2f4a5b6c7d', name: 'HepA', description: 'Hepatitis A vaccine, common for travel and high-risk groups.' },
    { id: '9f8e7d6c-5b4a-3210-fedc-ba9876543210', name: 'RV5', description: 'Rotavirus oral vaccine (RotaTeq).' },
    { id: '1a2b3c4d-5e6f-7a8b-9c0d-1e2f3a4b5c6d', name: 'BCG', description: 'Bacillus Calmette-Guérin vaccine for Tuberculosis.' },
    { id: 'd4e5f6a7-b8c9-0d1e-2f3a-4b5c6d7e8f9a', name: 'Yellow Fever', description: 'Live-attenuated vaccine for travel to tropical regions.' },
    { id: 'b2c3d4e5-f6a7-8b9c-0d1e-2f3a4b5c6d7e', name: 'Typhoid', description: 'Vaccine against Salmonella typhi (Injectable or Oral).' },
    { id: '8a7b6c5d-4e3f-2g1h-0i9j-8k7l6m5n4o3p', name: 'Rabies', description: 'Pre-exposure or post-exposure prophylaxis for rabies.' },
    { id: '3f2e1d0c-9b8a-7654-3210-fedcba987654', name: 'JEV', description: 'Japanese Encephalitis vaccine.' },
    { id: 'c1d2e3f4-a5b6-c7d8-e9f0-a1b2c3d4e5f6', name: 'COVID-19 mRNA', description: 'mRNA-based vaccine for SARS-CoV-2.' }
  ],
  patients: [
    { id: 'f47ac10b-58cc-4372-a567-0e02b2c3d479', first_name: 'John', last_name: 'Doe', email: 'john@example.com', dob: '1990-01-01', phin: '111 111 111' },
    { id: '2c5e174e-6351-40b3-b3c9-02697841f32a', first_name: 'Jane', last_name: 'Smith', email: 'jane@example.com', dob: '1995-05-15', phin: '222 222 222' },
    { id: '982637f3-79d8-4981-893d-88545e851d7c', first_name: 'Robert', last_name: 'Brown', email: 'robbie@test.com', dob: '2010-08-20', phin: '333 333 333' },
    { id: '47d9627a-5142-4f0e-941c-7f56193d5a21', first_name: 'Alice', last_name: 'Wong', email: 'alice.w@provider.com', dob: '1982-11-30', phin: '444 444 444' },
    { id: '8b2e11a4-c923-4412-a7d1-039c284b51e9', first_name: 'Michael', last_name: 'Johnson', email: 'mjohnson@webmail.com', dob: '1975-03-12', phin: '555 555 555' },
    { id: 'f91a2837-d102-4b31-89c2-74d1059382b4', first_name: 'Sarah', last_name: 'Miller', email: 'smiller88@gmail.com', dob: '1988-07-22', phin: '666 666 666' },
    { id: 'd2b3c4e5-f6a7-4b8c-9d0e-1f2a3b4c5d6e', first_name: 'David', last_name: 'Garcia', email: 'garcia.david@health.org', dob: '2005-12-05', phin: '777 777 777' },
  ],
  rules: [
    { id: 'd1b2c3d4-5678-4910-b111-213141516171', vaccine_id: 'c1d2e3f4-a5b6-c7d8-e9f0-a1b2c3d4e5f6', dose_number: 1, min_age_days: 365, max_age_days: 730, min_interval_days: 0, condition_id: null },
    { id: 'e2f3a4b5-c6d7-48e9-f011-121314151617', vaccine_id: '3f2e1d0c-9b8a-7654-3210-fedcba987654', dose_number: 2, min_age_days: 1825, max_age_days: 36500, min_interval_days: 21, condition_id: null },
    { id: 'f3g4h5i6-d7e8-59f0-a122-232425262728', vaccine_id: '85f0967a-2921-4f11-9a91-443213054593', dose_number: 2, min_age_days: 30, max_age_days: 180, min_interval_days: 28, condition_id: null },
    { id: 'a1s2d3f4-g5h6-7j8k-9l0z-x1c2v3b4n5m6', vaccine_id: '16104f6e-578b-4b41-949e-f41851e36c5d', dose_number: 2, min_age_days: 1460, max_age_days: 2190, min_interval_days: 28, condition_id: null },
    { id: 'q9w8e7r6-t5y4-u3i2-o1p0-l1k2j3h4g5f6', vaccine_id: 'c1d2e3f4-a5b6-c7d8-e9f0-a1b2c3d4e5f6', dose_number: 2, min_age_days: 386, max_age_days: 800, min_interval_days: 21, condition_id: null }
  ],
  profiles: [
    { id: 'ad741841-9e68-5c83-0c35-850f7e5d2c03', patient_id: '8b2e11a4-c923-4412-a7d1-039c284b51e9', patient_address: '456 Oak Ave', emergency_contact: '555-0202', family_doctor: 'Dr. Wilson' },
    { id: 'ce852952-af79-6d94-1d46-961f8f6e3d14', patient_id: 'f91a2837-d102-4b31-89c2-74d1059382b4', patient_address: '789 Pine Rd', emergency_contact: '555-0303', family_doctor: 'Dr. Grey' },
    { id: 'e2f1a3b4-c5d6-4e7f-8a9b-0c1d2e3f4g5h', patient_id: 'd2b3c4e5-f6a7-4b8c-9d0e-1f2a3b4c5d6e', patient_address: '321 Maple St', emergency_contact: '555-0404', family_doctor: 'Dr. Quinn' }
  ],
  records: [
    { id: '123e4567-e89b-12d3-a456-426614174000', patient_id: 'f47ac10b-58cc-4372-a567-0e02b2c3d479', vaccine_id: '3f2e1d0c-9b8a-7654-3210-fedcba987654', admin_date: '2024-01-15', dose_number: 1 },
    { id: '234f5678-f90c-23e4-b567-537725285111', patient_id: '8b2e11a4-c923-4412-a7d1-039c284b51e9', vaccine_id: '85f0967a-2921-4f11-9a91-443213054593', admin_date: '2024-02-10', dose_number: 1 },
    { id: '345g6789-a01d-34f5-c678-648836396222', patient_id: 'f91a2837-d102-4b31-89c2-74d1059382b4', vaccine_id: 'c1d2e3f4-a5b6-c7d8-e9f0-a1b2c3d4e5f6', admin_date: '2024-02-15', dose_number: 1 }
  ]
};
