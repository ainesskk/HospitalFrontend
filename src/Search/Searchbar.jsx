import "./Searchbar.css";
import SearchPatient from "./SearchPatient.jsx";
import { searchPatientsRequest } from "../api/patiensApi.jsx";
import {useEffect, useState} from "react";

export default function Searchbar() {
    const [searchString, setSearchString] = useState("");
    const [patients, setPatients] = useState([]);
    const [noPatients, setNoPatients] = useState(true);

    const handleChange = (e) => {
        setSearchString(e.target.value);
    };

    const buttonClick = async (e) => {
        e.preventDefault();
        setNoPatients(true);
        const response = await searchPatientsRequest(searchString);
        if (response.data !== undefined) {
            if(response.data.length !== 0){
                setNoPatients(false);
                setPatients(response.data);
            }
        } else {
            setNoPatients(true);
            setPatients([]);
        }
    };

    return (
        <>
            <form className="search-form">
                <input
                    className="search-input"
                    type="text"
                    placeholder="Поиск пациента"
                    onChange={handleChange}
                />
                <button className="search-img-container" onClick={buttonClick}>
                    <img className="search-img" src="../src/assets/search.svg" alt="search" />
                </button>
            </form>
            {noPatients ? (
                <p className="no-results">Нет результатов</p>
            ) : (
                <div className="search-all-patients-container">
                    {patients.map((patient) => {
                        console.log(patient.id);
                        return <SearchPatient key={patient.id} userData={patient} />;
                    })}
                </div>
            )}
        </>
    );
}
