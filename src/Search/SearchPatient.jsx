import "./SearchPatient.css";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

export default function SearchPatient({ userData }) {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/patient/${userData.id}`);
    };

    return (
        <>
            <div className="search-patient-container" id={userData.id} onClick={handleClick}>
                <p className="search-patient-fio">{userData.fio}</p>
                <div className="search-patient-birthday-container">
                    <p className="search-patient-birthday">{userData.birthDate}</p>
                </div>
                <p className="search-patient-passport">{userData.passport}</p>
            </div>
        </>
    );
}

SearchPatient.propTypes = {
    userData: PropTypes.shape({
            id: PropTypes.string.isRequired,
            fio: PropTypes.string.isRequired,
            birthDate: PropTypes.string.isRequired,
            passport: PropTypes.string.isRequired
        }
    ).isRequired
}