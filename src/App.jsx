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
                        </PrivateRoute>
                    } />
                    <Route path="/patient/:id" element={
                        <PrivateRoute>
                            <Patient />
                        </PrivateRoute>
                    } />
                    <Route path="/patient/:patientId/history/:historyId" element={
                        <PrivateRoute>
                            <HistoryPage />
                        </PrivateRoute>
                    } />
                    <Route path="/patient/:id/addhistory" element={
                        <PrivateRoute>
                            <AddHistory />
                        </PrivateRoute>
                    } />
                    <Route path="/patient/:patientId/edithistory/:historyId" element={
                        <PrivateRoute>
                            <EditHistory />
                        </PrivateRoute>
                    } />
                    <Route path="/patient/:patientId/history/:historyId/addexamination" element={
                        <PrivateRoute>
                            <AddExamination />
                        </PrivateRoute>
                    } />
                    <Route path="/patient/:patientId/editexamination/:examinationId" element={
                        <PrivateRoute>
                            <EditExamination />
                        </PrivateRoute>
                    } />
                    <Route path="/patient/:patientId/examination/:examinationId" element={
                        <PrivateRoute>
                            <ExaminationPage />
                        </PrivateRoute>
                    } />
                    <Route path="/patient/:patientId/:examinationId/addappointment" element={
                        <PrivateRoute>
                            <AddAppointment />
                        </PrivateRoute>
                    } />
                    <Route path="/patient/:patientId/appointment/:appointmentId/addanalysis" element={
                        <PrivateRoute>
                            <AddAnalysis />
                        </PrivateRoute>
                    } />
                    <Route path="/user/:userId" element={
                        <PrivateRoute>
                            <UserPage />
                        </PrivateRoute>
                    } />
                    <Route path="/user/:userId/edituser" element={
                        <PrivateRoute>
                            <EditUser />
                        </PrivateRoute>
                    } />
                    <Route path="/adduser" element={
                        <PrivateRoute>
                            <AddUser />
                        </PrivateRoute>
                    } />
                </Routes>
        </AppProvider>
    </>
  )
}

export default App
