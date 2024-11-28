import './App.css'
import {Routes, Route} from 'react-router-dom';
import Login from "./Authorization/Login.jsx";
import SearchPatient from "./Search/SearchPatient.jsx";

function App() {

  return (
    <>
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/search" element={<SearchPatient />} />
        </Routes>
    </>
  )
}

export default App
