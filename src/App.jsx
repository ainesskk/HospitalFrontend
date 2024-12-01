import './App.css'
import {Routes, Route} from 'react-router-dom';
import Login from "./Authorization/Login.jsx";
import Search from "./Search/Search.jsx";
import Patient from "./PatientPage/Patient.jsx";
import HistoryPage from "./PatientPage/History/HistoryPage.jsx";
import AddHistory from "./PatientPage/History/AddHistory.jsx";
import EditHistory from "./PatientPage/History/EditHistory.jsx";
import AddExamination from "./PatientPage/Examination/AddExamination.jsx";
import EditExamination from "./PatientPage/Examination/EditExamination.jsx";
import ExaminationPage from "./PatientPage/Examination/ExaminationPage.jsx";

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
            <Route path="/patient/:patientId/editexamination/:examinationId" element={<EditExamination />} />
            <Route path="/patient/:patientId/examination/:examinationId" element={<ExaminationPage />} />
        </Routes>
    </>
  )
}

export default App
