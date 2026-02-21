import PatientInformation from "./pages/patient_profile";
import Home from "./pages/home";
import Login from "./pages/login";
import Register from "./pages/register";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UploadPatientFile from "./pages/upload";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="profile" element={<PatientInformation />} />
        <Route path="upload" element={<UploadPatientFile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
