import PropTypes from "prop-types";
import "./SearchUser.css"
import {useNavigate} from "react-router-dom";

export default function SearchUser({userData}) {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/user/${userData.id}`);
    };

    const role = {
        1: "Администратор",
        2: "Врач",
        3: "Медсестра"
    }

    return (
        <>
            <div className="search-user-info-container" onClick={handleClick}>
                <div className="search-user-fio-container">
                    <p className="search-user-fio">{userData.fio}</p>
                </div>
                <p className="search-role-fio">{role[userData.role]}</p>
            </div>
        </>
    )
}

SearchUser.propTypes = {
    userData: PropTypes.shape({
        id: PropTypes.string.isRequired,
        fio: PropTypes.string.isRequired,
        telephone: PropTypes.string.isRequired,
        login: PropTypes.string.isRequired,
        password: PropTypes.string.isRequired,
        role: PropTypes.number.isRequired
    }).isRequired
}