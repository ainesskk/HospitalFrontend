import React from "react";
import {useNavigate} from "react-router-dom";

export default function Arrow() {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(-1);
    }
    return (
        <>
            <style>{` img { transform: scale(-1, 1); } `}</style>
            <button className="arrow-button" onClick={handleClick}>
                <img src="/src/assets/arrow.png" alt="arrow" />
            </button>
        </>
    )
}