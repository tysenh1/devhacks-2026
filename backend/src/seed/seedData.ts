// seedData.ts
export const SEED_DATA = {
  conditions: [
    { id: '8d2a6b30-1b5e-4c92-9e1a-8f3a5d2b7c1a', condition_name: 'Asthma', description: 'Chronic respiratory condition' },
    { id: 'fe3b4c10-2d6f-4a81-bb0a-7e5d9c3b1e2f', condition_name: 'Diabetes', description: 'Type 1 or Type 2' }
  ],
  vaccines: [
    { id: '550e8400-e29b-41d4-a716-446655440000', name: 'MMR' },
    { id: '6ba7b810-9dad-11d1-80b4-00c04fd430c8', name: 'COVID-19 (Pfizer)' },
    { id: '7c9e663f-7407-422a-8ffc-00ef159b6342', name: 'Influenza' }
  ],
  patients: [
    { id: 'f47ac10b-58cc-4372-a567-0e02b2c3d479', first_name: 'John', last_name: 'Doe', email: 'john@example.com', dob: '1990-01-01', phin: '111 111 111' },
    { id: '2c5e174e-6351-40b3-b3c9-02697841f32a', first_name: 'Jane', last_name: 'Smith', email: 'jane@example.com', dob: '1995-05-15', phin: '222 222 222' },
    { id: '982637f3-79d8-4981-893d-88545e851d7c', first_name: 'Robert', last_name: 'Brown', email: 'robbie@test.com', dob: '2010-08-20', phin: '333 333 333' }
  ],
  rules: [
    { id: 'd1b2c3d4-5678-4910-b111-213141516171', vaccine_id: '550e8400-e29b-41d4-a716-446655440000', dose_number: 1, min_age_days: 365, max_age_days: 730, min_interval_days: 0, condition_id: null },
    { id: 'e2f3a4b5-c6d7-48e9-f011-121314151617', vaccine_id: '6ba7b810-9dad-11d1-80b4-00c04fd430c8', dose_number: 2, min_age_days: 1825, max_age_days: 36500, min_interval_days: 21, condition_id: null }
  ],
  profiles: [
    { id: 'bc630730-8d57-4b72-9b24-749e6d4c1b92', patient_id: 'f47ac10b-58cc-4372-a567-0e02b2c3d479', patient_address: '123 Main St', emergency_contact: '555-0101', family_doctor: 'Dr. House' }
  ],
  records: [
    { id: '123e4567-e89b-12d3-a456-426614174000', patient_id: 'f47ac10b-58cc-4372-a567-0e02b2c3d479', vaccine_id: '6ba7b810-9dad-11d1-80b4-00c04fd430c8', admin_date: '2024-01-15', dose_number: 1 }
  ]
};
