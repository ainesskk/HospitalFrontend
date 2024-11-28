import './App.css'
import {Routes, Route} from 'react-router-dom';
import Login from "./Authorization/Login.jsx";
import Search from "./Search/Search.jsx";

function App() {

  return (
    <>
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/search" element={<Search />} />
        </Routes>
    </>
  )
}

export default App
