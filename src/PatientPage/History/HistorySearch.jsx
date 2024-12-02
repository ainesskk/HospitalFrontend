import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import "./HistorySearch.css";

export default function HistorySearch({ userId, history }) {
    const navigate = useNavigate();

    const handlerClick = () => {
        navigate(`/patient/${userId}/history/${history.id}`);
    };

    return (
        <>
            <button className="history-search-container" onClick={handlerClick}>
                <span className="history-diagnosis">{history.diagnosis}</span>
            </button>
        </>
    );
}

HistorySearch.propTypes = {
    userId: PropTypes.string.isRequired,
    history: PropTypes.object.isRequired,
};
