import Navbar from "../components/navbar";
import VaccineCard from "../components/vaccineCard";

function Upcoming() {
  return (
    <>
      <Navbar />
      <div className="p-5">
        <VaccineCard
          title="test title"
          dueDate="02-28-2026"
          isReadMore={false}
        />
      </div>
    </>
  );
}

export default Upcoming;
