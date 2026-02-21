import PatientInformation from "./pages/patient_profile";
import Home from "./pages/home";
import Login from "./pages/login";
import Register from "./pages/register";
import VaccineInformation from "./pages/vaccine_info";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UploadPatientFile from "./pages/upload";
import Eligible from "./pages/eligible";
import Upcoming from "./pages/upcoming";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="profile" element={<PatientInformation />} />
        <Route path="vaccine-info" element={<VaccineInformation />} />
        <Route path="upload" element={<UploadPatientFile />} />
        <Route path="eligible" element={<Eligible />} />
        <Route path="upcoming" element={<Upcoming />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
