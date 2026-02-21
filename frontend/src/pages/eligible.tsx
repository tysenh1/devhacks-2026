import Navbar from "../components/navbar";
import VaccineCard from "../components/vaccineCard";

function Eligible() {
  return (
    <>
      <Navbar />
      {/* grid wrapper */}
      <div className="p-5">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <VaccineCard
            title="Influenza (Flu)"
            description="Seniors (65+) are eligible for 'Enhanced' versions (high-dose or adjuvanted) for better protection."
            isReadMore={true}
          />
          <VaccineCard
            title="Influenza (Flu)"
            description="Seniors (65+) are eligible for 'Enhanced' versions (high-dose or adjuvanted) for better protection."
            isReadMore={true}
          />
          <VaccineCard
            title="Influenza (Flu)"
            description="Seniors (65+) are eligible for 'Enhanced' versions (high-dose or adjuvanted) for better protection."
            isReadMore={true}
          />
        </div>
      </div>
    </>
  );
}

export default Eligible;
