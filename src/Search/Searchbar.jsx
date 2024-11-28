import "./Searchbar.css";
import SearchPatient from "./SearchPatient.jsx";
export default function Searchbar() {

    const buttonClick = (e) => {
        e.preventDefault();
    }

    return (
        <>
            <form className="search-form">
                <input className="search-input" type="text" placeholder="Поиск пациента"/>
                    <button className="search-img-container" onClick={buttonClick}>
                        <img className="search-img" src="src/assets/search.svg" alt="search"></img>
                    </button>
            </form>
            <div className="search-all-patients-container">
                <SearchPatient></SearchPatient>
            </div>
        </>
    )
}