function VaccineInformation() {
  return (
    <div className="min-h-screen bg-base-200">
      <div className="flex flex-col items-center justify-center p-6 gap-y-8 max-w-4xl mx-auto">
        <div className="text-center py-6">
          <h1 className="text-4xl font-bold text-primary">COVID-19 Vaccine</h1>
          <p className="text-base-content/70 mt-2">
            Everything you need to know about COVID-19 vaccination
          </p>
        </div>

        <div className="w-full space-y-6">
          {/* Eligibility Card */}
          <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <div className="flex items-center gap-3 mb-4">
                <div className="badge badge-primary badge-lg p-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h2 className="card-title text-xl">Eligibility</h2>
                  <p className="text-sm text-base-content/60">
                    Who should get vaccinated?
                  </p>
                </div>
              </div>

              <div className="bg-base-200 rounded-box p-4">
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <span className="badge badge-success badge-xs mt-2"></span>
                    <span>Adults 65 years old or older</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="badge badge-success badge-xs mt-2"></span>
                    <div>
                      <span>6 months or older, including if you are:</span>
                      <ul className="ml-4 mt-2 space-y-1 text-sm text-base-content/80">
                        <li className="flex items-center gap-2">
                          <span className="text-primary">•</span>
                          Residents of long-term care homes and other settings
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="text-primary">•</span>
                          Individuals in high risk, including children with
                          complex health needs
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="text-primary">•</span>
                          Individuals who are pregnant
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="text-primary">•</span>
                          People who provide essential community services
                        </li>
                      </ul>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Schedule Card */}
          <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <div className="flex items-center gap-3 mb-4">
                <div className="badge badge-secondary badge-lg p-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
                    />
                  </svg>
                </div>
                <div>
                  <h2 className="card-title text-xl">Schedule</h2>
                  <p className="text-sm text-base-content/60">
                    When should I get vaccinated?
                  </p>
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="table table-zebra">
                  <thead>
                    <tr className="bg-base-200">
                      <th className="font-bold">Age group</th>
                      <th className="font-bold">Number of doses</th>
                      <th className="font-bold">Recommended interval</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="font-medium">
                        6 months to less than 5 years old
                      </td>
                      <td>
                        <span className="badge badge-outline">2 doses</span>
                      </td>
                      <td>8 weeks apart</td>
                    </tr>
                    <tr>
                      <td className="font-medium">5 to 11 years old</td>
                      <td>
                        <span className="badge badge-outline">1 dose</span>
                      </td>
                      <td>N/A</td>
                    </tr>
                    <tr>
                      <td className="font-medium">12 years old and over</td>
                      <td>
                        <span className="badge badge-outline">1 dose</span>
                      </td>
                      <td>N/A</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="alert alert-info mt-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="stroke-current shrink-0 w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
                <span className="text-sm">
                  Please contact your health care provider if you are
                  immunocompromised or have any chronic conditions.
                </span>
              </div>
            </div>
          </div>

          {/* After Infection Card */}
          <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <div className="flex items-center gap-3 mb-4">
                <div className="badge badge-warning badge-lg p-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z"
                    />
                  </svg>
                </div>
                <div>
                  <h2 className="card-title text-xl">
                    Immunization after a COVID-19 infection
                  </h2>
                  <p className="text-sm text-base-content/60">
                    I had a positive test, should I get vaccinated?
                  </p>
                </div>
              </div>

              <div className="bg-base-200 rounded-box p-4">
                <p className="text-base-content/80 leading-relaxed">
                  If you've recently had a positive COVID-19 test result, the
                  chance of getting COVID-19 again is low in the months after
                  infection. You can wait{" "}
                  <span className="font-semibold text-primary">3 months</span>{" "}
                  for your next vaccine dose. The immune response is better when
                  there is more time between infection and vaccination.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VaccineInformation;
