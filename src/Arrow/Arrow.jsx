import React from "react";
import {useNavigate} from "react-router-dom";
import "./Arrow.css"

export default function Arrow() {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(-1);
    }
    return (
        <>
            <button className="arrow-button" onClick={handleClick}>
                <img src="/src/assets/arrow.png" alt="arrow" />
            </button>
        </>
    )
}