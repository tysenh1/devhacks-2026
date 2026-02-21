import { useEffect } from "react";
import type { EligibleVaccines, SafePatients } from "../../../shared/types";
import Navbar from "../components/navbar";
import VaccineCard from "../components/vaccineCard";


function Health({ fetchVaccines, eligibleVaccines, user }: { fetchVaccines: any, eligibleVaccines: EligibleVaccines[] | null, user: SafePatients }) {


  useEffect(() => {
    const fetchFunc = async () => {
      await fetchVaccines()
    }
    fetchFunc();

  }, [user])


  return (
    <>
      <Navbar />
      {/* grid wrapper */}
      <div className="p-5">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {eligibleVaccines && (
            eligibleVaccines.map((vax) => {
              return (
                <VaccineCard
                  title={vax.name}
                  description={vax.id}
                  isReadMore={false}
                />
              )
            })
          )}

        </div>
      </div>
    </>
  );
}

export default Health;
