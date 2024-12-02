import "./Searchbar.css";
import SearchPatient from "./SearchPatient.jsx";
import { searchPatientsRequest } from "../api/patiensApi.jsx";
import { useEffect, useState } from "react";

export default function Searchbar() {
    const [patients, setPatients] = useState([]);
    const [noPatients, setNoPatients] = useState(true);
    const [searchString, setSearchString] = useState(() => sessionStorage.getItem("searchString") || "");

    useEffect(() => {
        sessionStorage.setItem("searchString", searchString);
        if (searchString !== "") {
            patientSearch();
        } else {
            setNoPatients(true);
            setPatients([]);
        }
    }, [searchString]);

    const handleChange = (e) => {
        setSearchString(e.target.value);
    };

    const buttonClick = async (e) => {
        e.preventDefault();
        patientSearch();
    };

    const patientSearch = async () => {
        if (searchString === "") {
            setNoPatients(true);
            setPatients([]);
            return;
        }

        const response = await searchPatientsRequest(searchString);
        if (response.data !== undefined) {
            if (response.data.length !== 0) {
                setNoPatients(false);
                setPatients(response.data);
            } else {
                setNoPatients(true);
                setPatients([]);
            }
        } else {
            setNoPatients(true);
            setPatients([]);
        }
    };

    return (
        <>
            <form className="search-form" onSubmit={buttonClick}>
                <input
                    className="search-input"
                    type="text"
                    placeholder="Поиск пациента"
                    value={searchString}
                    onChange={handleChange}
                />
                <button className="search-img-container" type="submit">
                    <img className="search-img" src="../src/assets/search.svg" alt="search" />
                </button>
            </form>
            {noPatients ? (
                <p className="no-results">Нет результатов</p>
            ) : (
                <div className="search-all-patients-container">
                    {patients.map((patient) => (
                        <SearchPatient key={patient.id} userData={patient} />
                    ))}
                </div>
            )}
        </>
    );
}
