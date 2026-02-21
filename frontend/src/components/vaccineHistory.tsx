function VaccineHistory() {
  // Dummy Data. remove if we can fetch data from the backend
  const vaccines = [
    {
      id: 1,
      name: "COVID-19",
      firstDose: "December 20, 2020",
      nextDose: "February 15, 2021",
    },
    {
      id: 2,
      name: "Influenza",
      firstDose: "March 20, 2026",
      nextDose: "March 20, 2027",
    },
    { id: 3, name: "Tetanus", firstDose: "July 07, 2024", nextDose: "TBD" },
    {
      id: 4,
      name: "Hepatitis A",
      firstDose: "November 14, 2023",
      nextDose: "November 14, 2026",
    },
    {
      id: 5,
      name: "Hepatitis B",
      firstDose: "March 23, 2022",
      nextDose: "July 30, 2023",
    },
    {
      id: 6,
      name: "HPV",
      firstDose: "May 03, 2008",
      nextDose: "June 04, 2028",
    },
    { id: 7, name: "Mpox", firstDose: "March 02, 2014", nextDose: "TBD" },
    {
      id: 8,
      name: "Varicella",
      firstDose: "January 03, 2026",
      nextDose: "Pending",
    },
    {
      id: 9,
      name: "Meningococcal Type B - 4CMenB",
      firstDose: "Available",
      nextDose: "Available",
    },
  ];

  // just renders a text badge if it's [available, tbd, pending]
  const renderBadge = (value: string) => {
    if (value === "Available") {
      return (
        <span className="badge bg-green-700 badge-sm text-white">
          Available
        </span>
      );
    }
    if (value === "Pending") {
      return <span className="badge badge-warning badge-sm">Pending</span>;
    }
    if (value === "TBD") {
      return <span className="badge badge-ghost badge-sm">TBD</span>;
    }
    return <span>{value}</span>;
  };

  return (
    <div className="card bg-white shadow-xl border border-base-300 w-full max-w-4xl">
      {/* Header */}
      <div className="flex justify-between items-center px-6 py-4 border-b border-base-300">
        <h2 className="text-lg font-semibold">Vaccine History</h2>
        <span className="text-gray-500 text-sm">
          Total {vaccines.length} Records
        </span>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr className="bg-base-200 text-gray-600">
              <th className="font-medium">ID</th>
              <th className="font-medium">Vaccine</th>
              <th className="font-medium">First Dose</th>
              <th className="font-medium">Next Dose</th>
            </tr>
          </thead>
          <tbody>
            {/* Replace this with actual fetched data */}
            {vaccines.map((vaccine) => (
              <tr key={vaccine.id} className="hover:bg-base-100">
                <td className="text-gray-500">{vaccine.id}</td>
                <td className="font-medium">{vaccine.name}</td>
                <td>{renderBadge(vaccine.firstDose)}</td>
                <td>{renderBadge(vaccine.nextDose)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default VaccineHistory;
