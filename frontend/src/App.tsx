import PatientInformation from "./pages/patient_profile";
import Home from "./pages/home";
import Login from "./pages/login";
import Register from "./pages/register";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Eligible from "./pages/eligible";
import Upcoming from "./pages/upcoming";
import { useUser } from "./hooks/useUser";
import type { SafePatients } from "../../shared/types";

function App() {

  const { user, logInUser, createUser, fetchVaccines, eligibleVaccines, setEligibleVaccines } = useUser()
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login logInUser={logInUser} />} />
        <Route path="register" element={<Register />} />
        <Route path="profile" element={<PatientInformation />} />
        <Route path="eligible" element={<Eligible fetchVaccines={fetchVaccines} eligibleVaccines={eligibleVaccines} user={user as SafePatients} />} />

        <Route path="upcoming" element={<Upcoming />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
