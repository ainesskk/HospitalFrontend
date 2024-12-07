import './App.css'
import { Routes, Route } from 'react-router-dom';
import Login from "./Authorization/Login.jsx";
import Search from "./Search/Search.jsx";
import Patient from "./PatientPage/Patient.jsx";
import HistoryPage from "./PatientPage/History/HistoryPage.jsx";
import AddHistory from "./PatientPage/History/AddHistory.jsx";
import EditHistory from "./PatientPage/History/EditHistory.jsx";
import AddExamination from "./PatientPage/Examination/AddExamination.jsx";
import EditExamination from "./PatientPage/Examination/EditExamination.jsx";
import ExaminationPage from "./PatientPage/Examination/ExaminationPage.jsx";
import { AppProvider} from "./contexts/AppContext.jsx";
import PrivateRoute from "./PrivateRoute.jsx";
import BlockRoute from "./BlockRoute.jsx";
import UserPage from "./Admin/UserSearch/UserPage.jsx";
import EditUser from "./Admin/UserSearch/EditUser.jsx";
import AddPatient from "./Search/AddPatient.jsx";
import AddAppointment from "./PatientPage/Appointment/AddAppointment.jsx";
import AddAnalysis from "./PatientPage/Analysis/AddAnalysis.jsx";
import AddUser from "./Admin/UserSearch/AddUser.jsx";
import Exit from "./Exit/Exit.jsx";

function App() {


  return (
    <>
        <AppProvider>
                <Routes>
                    <Route path="/login" element={
                        <BlockRoute>
                            <Login />
                        </BlockRoute>
                    } />
                    <Route path="/" element={
                        <PrivateRoute>
                            <Search />
                        </PrivateRoute>
                    } />
                    <Route path="/addpatient" element={
                        <PrivateRoute>
                            <AddPatient />
                            <Exit />
                        </PrivateRoute>
                    } />
                    <Route path="/patient/:id" element={
                        <PrivateRoute>
                            <Patient />
                            <Exit />
                        </PrivateRoute>
                    } />
                    <Route path="/patient/:patientId/history/:historyId" element={
                        <PrivateRoute>
                            <HistoryPage />
                            <Exit />
                        </PrivateRoute>
                    } />
                    <Route path="/patient/:id/addhistory" element={
                        <PrivateRoute>
                            <AddHistory />
                            <Exit />
                        </PrivateRoute>
                    } />
                    <Route path="/patient/:patientId/edithistory/:historyId" element={
                        <PrivateRoute>
                            <EditHistory />
                            <Exit />
                        </PrivateRoute>
                    } />
                    <Route path="/patient/:patientId/history/:historyId/addexamination" element={
                        <PrivateRoute>
                            <AddExamination />
                            <Exit />
                        </PrivateRoute>
                    } />
                    <Route path="/patient/:patientId/editexamination/:examinationId" element={
                        <PrivateRoute>
                            <EditExamination />
                            <Exit />
                        </PrivateRoute>
                    } />
                    <Route path="/patient/:patientId/examination/:examinationId" element={
                        <PrivateRoute>
                            <ExaminationPage />
                            <Exit />
                        </PrivateRoute>
                    } />
                    <Route path="/patient/:patientId/:examinationId/addappointment" element={
                        <PrivateRoute>
                            <AddAppointment />
                            <Exit />
                        </PrivateRoute>
                    } />
                    <Route path="/patient/:patientId/appointment/:appointmentId/addanalysis" element={
                        <PrivateRoute>
                            <AddAnalysis />
                            <Exit />
                        </PrivateRoute>
                    } />
                    <Route path="/user/:userId" element={
                        <PrivateRoute>
                            <UserPage />
                            <Exit />
                        </PrivateRoute>
                    } />
                    <Route path="/user/:userId/edituser" element={
                        <PrivateRoute>
                            <EditUser />
                            <Exit />
                        </PrivateRoute>
                    } />
                    <Route path="/adduser" element={
                        <PrivateRoute>
                            <AddUser />
                            <Exit />
                        </PrivateRoute>
                    } />
                </Routes>
        </AppProvider>
    </>
  )
}

export default App
