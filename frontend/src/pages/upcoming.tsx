import type { SafePatients, Upcoming } from "../../../shared/types";
import Navbar from "../components/navbar";
import VaccineCard from "../components/vaccineCard";
import { useEffect } from "react";

function Upcoming({ fetchUpcoming, upcomingVaccines, user }: { fetchUpcoming: any, upcomingVaccines: Upcoming[], user: SafePatients }) {

  useEffect(() => {
    const fetchFunc = async () => {
      await fetchUpcoming();
    }
    fetchFunc()
  }, [user])
  return (
    <>
      <Navbar />
      <div className="p-5">
        {upcomingVaccines && (
          upcomingVaccines.map((vax) => {
            return (<VaccineCard
              title={vax.vaccine_name}
              description={"Vaccine"}
              isReadMore={true}
            />)
          })
        )}

      </div>
    </>
  );
}

export default Upcoming;
