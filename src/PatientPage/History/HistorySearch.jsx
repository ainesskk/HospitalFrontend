import {useNavigate} from "react-router-dom";

export default function HistorySearch({userId, history}) {
    const navigate = useNavigate();

    const handlerClick = () => {
        navigate(`/patient/${userId}/history/${history.id}`);
    }

    return(
        <>
            <div className="history-search-container" onClick={handlerClick}>
                <p className="history-diagnosis">{history.diagnosis}</p>
            </div>
        </>
    )
}