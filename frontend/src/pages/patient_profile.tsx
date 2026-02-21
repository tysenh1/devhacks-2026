import Navbar from "../components/navbar";
import PatientInfo from "../components/patientInfo";
import VaccineHistory from "../components/vaccineHistory";

function PatientInformation() {
  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center justify-center p-6 gap-y-10">
        <PatientInfo />
        <h1 className="text-xl font-semibold">Vaccine Records</h1>
        <VaccineHistory />
      </div>
    </>
  );
}

export default PatientInformation;
