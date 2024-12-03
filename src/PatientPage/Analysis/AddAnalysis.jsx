import Arrow from "../../Arrow/Arrow.jsx";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { analysisAddRequest } from "../../api/patiensApi.jsx";
import "./AddAnalysis.css"

export default function AddAnalysis() {
    const { appointmentId } = useParams();
    const [analysis, setAnalysis] = useState({
        type: "",
        result: ""
    });
    const [notification, setNotification] = useState("");
    const [notificationType, setNotificationType] = useState("");

    const handleChange = (e) => {
        setAnalysis({ ...analysis, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!analysis.type.trim() || !analysis.result.trim()) {
            setNotification("Поля не могут быть пустыми.");
            setNotificationType("error");
            return;
        }

        const requestData = {
            type: analysis.type,
            result: analysis.result
        };
        console.log(requestData);
        console.log(appointmentId);

        const status = await analysisAddRequest(appointmentId, requestData);
        if (status === 201) {
            setNotification("Анализ успешно добавлен");
            setNotificationType("success");
        } else {
            setNotification("Произошла ошибка при добавлении");
            setNotificationType("error");
        }
    };

    return (
        <div className="add-analysis-container">
            <Arrow />
            <div className="add-analysis-form-container">
                <form className="add-analysis-form" onSubmit={handleSubmit}>
                    <input type="text" name="type" placeholder="Тип" onChange={handleChange} />
                    <textarea name="result" placeholder="Результат" required onChange={handleChange} />
                    <button type="submit">Добавить анализ</button>
                </form>
            </div>
            <pre className={`notification ${notificationType}`}>{notification}</pre>
        </div>
    );
}
