import './App.css'
import {Routes, Route} from 'react-router-dom';
import Login from "./Authorization/Login.jsx";
import Search from "./Search/Search.jsx";
import Patient from "./PatientPage/Patient.jsx";
import HistoryPage from "./PatientPage/HistoryPage.jsx";
import AddHistory from "./PatientPage/AddHistory.jsx";
import EditHistory from "./PatientPage/EditHistory.jsx";
import AddExamination from "./PatientPage/AddExamination.jsx";

function App() {

  return (
    <>
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/search" element={<Search />} />
            <Route path="/patient/:id" element={<Patient />} />
            <Route path="/patient/:patientId/history/:historyId" element={<HistoryPage />} />
            <Route path="/patient/:id/addhistory" element={<AddHistory />} />
            <Route path="/patient/:patientId/edithistory/:historyId" element={<EditHistory />} />
            <Route path="/patient/:patientId/history/:historyId/addexamination" element={<AddExamination />} />
        </Routes>
    </>
  )
}

export default App
