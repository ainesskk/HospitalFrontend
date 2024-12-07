import {useNavigate} from "react-router-dom";
import "./Exit.css"

export default function Exit() {
    const navigate = useNavigate();
    const handleExit = () => {
        navigate("/login");
        sessionStorage.clear();
    }

    return (
        <>
            <button className="exit-btn" onClick={handleExit}>
                Выйти
            </button>
        </>
    )
}