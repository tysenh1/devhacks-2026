function PatientInformation() {
  return (
    <div className="flex flex-col items-center justify-center p-6 gap-6">

      <div className="card bg-base-100 shadow-md p-6 w-full max-w-3xl">
        <h2 className="text-xl font-semibold mb-4">Patient Information</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* Left Column */}
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="font-medium text-gray-500">Patient Name:</span>
              <span className="font-semibold">John Doe</span>
            </div>

            <div className="flex justify-between">
              <span className="font-medium text-gray-500">Family Doctor:</span>
              <span className="font-semibold">Dr. Smith</span>
            </div>

            <div className="flex justify-between">
              <span className="font-medium text-gray-500">Address:</span>
              <span className="font-semibold">123 Main St, Winnipeg</span>
            </div>

            <div className="flex justify-between">
              <span className="font-medium text-gray-500">Emergency Contact:</span>
              <span className="font-semibold">John Smith (brother) +1 (204) 555‑1234</span>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="font-medium text-gray-500">Date of Birth:</span>
              <span className="font-semibold">Jan 12, 1985</span>
            </div>

            <div className="flex justify-between">
              <span className="font-medium text-gray-500">Gender:</span>
              <span className="font-semibold">Male</span>
            </div>

            <div className="flex justify-between">
              <span className="font-medium text-gray-500">Health Card #:</span>
              <span className="font-semibold">1234‑567‑890</span>
            </div>

            <div className="flex justify-between">
              <span className="font-medium text-gray-500">Email:</span>
              <span className="font-semibold">john@example.com</span>
            </div>
          </div>

        </div>
      </div>


      <h1 className="text-xl font-semibold">Vaccine Records</h1>

      <div className="overflow-x-auto w-full max-w-3xl">
        <table className="table table-xs text-xl">
          <thead>
            <tr>
              <th>ID</th>
              <th>Vaccine</th>
              <th>First dose</th>
              <th>Next dose</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <th>1</th>
              <td>COVID-19</td>
              <td>December 20, 2020</td>
              <td>February 15, 2021</td>
            </tr>
            <tr>
              <th>2</th>
              <td>Influenza</td>
              <td>March 20, 2026</td>
              <td>March 20, 2027</td>
            </tr>
            <tr>
              <th>3</th>
              <td>Tetanus</td>
              <td>July 07, 2024</td>
              <td>TBD</td>
            </tr>
            <tr>
              <th>4</th>
              <td>Hepatitis A</td>
              <td>November 14, 2023</td>
              <td>November 14, 2026</td>
            </tr>
            <tr>
              <th>5</th>
              <td>Hepatitis B</td>
              <td>March 23, 2022</td>
              <td>July 30, 2023</td>
            </tr>
            <tr>
              <th>6</th>
              <td>HPV</td>
              <td>May 03, 2008</td>
              <td>June 04, 2028</td>
            </tr>
            <tr>
              <th>7</th>
              <td>Mpox</td>
              <td>March 02, 2014</td>
              <td>TBD</td>
            </tr>
            <tr>
              <th>8</th>
              <td>Varicella</td>
              <td>January 03, 2026</td>
              <td>*Pending*</td>
            </tr>
            <tr>
              <th>9</th>
              <td>Meningococcal Type B - 4CMenB</td>
              <td>*Available*</td>
              <td>*Available*</td>
            </tr>
          </tbody>
        </table>
      </div>

    </div>
  );
}

export default PatientInformation;
