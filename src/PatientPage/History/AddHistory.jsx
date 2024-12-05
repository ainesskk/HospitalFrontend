import {useState} from "react";
import {historyAddRequest} from "../../api/patiensApi.jsx";
import {useParams} from "react-router-dom";
import Arrow from "../../Arrow/Arrow.jsx";
import "./AddHistory.css";

export default function AddHistory() {
    const {id} = useParams();
    const [newHistory, setNewHistory] = useState({
        diagnosis: "",
        arriveDate: "",
        lifeAnamnesis: "",
        diseaseAnamnesis: "",
        epicrisis: "",
        complaints: ""
    });
    const [notification, setNotification] = useState(" ");
    const [notificationType, setNotificationType] = useState("");

    const handleChange = (e) => {
        setNewHistory({...newHistory, [e.target.name]: e.target.value});
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        const requestData = {
            diagnosis: newHistory.diagnosis,
            arriveDate: newHistory.arriveDate,
            departureDate: null,
            lifeAnamnesis: newHistory.lifeAnamnesis,
            diseaseAnamnesis: newHistory.diseaseAnamnesis,
            epicrisis: newHistory.epicrisis,
            complaints: newHistory.complaints
        };

        const response = await historyAddRequest(id, requestData);
        if (response === 201) {
            setNotification("История успешно добавлена")
            setNotificationType("success")
        }
        else {
            setNotification("Произошла ошибка при добавлении")
            setNotificationType("error")
        }

    }

    return (
        <>
            <div className="add-history-container">
                <Arrow />
                <div className="add-history-form-container">
                    <form className="add-history-form">
                        <input type="text" name="diagnosis" placeholder="Диагноз" required onChange={handleChange}/>
                        <input type="date" name="arriveDate" placeholder="Дата прибытия" required
                               onChange={handleChange}/>
                        <textarea name="lifeAnamnesis" placeholder="Анамнез жизни" required
                                  onChange={handleChange}></textarea>
                        <textarea name="diseaseAnamnesis" placeholder="Анамнез болезни" required
                                  onChange={handleChange}></textarea>
                        <textarea name="epicrisis" placeholder="Эпикриз" required onChange={handleChange}></textarea>
                        <textarea name="complaints" placeholder="Жалобы" required onChange={handleChange}></textarea>
                        <button type="submit" onClick={handleSubmit}>Добавить историю</button>
                    </form>
                </div>
                <pre className={`notification ${notificationType}`}>{notification}</pre>
            </div>
        </>
    )
}