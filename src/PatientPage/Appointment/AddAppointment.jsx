import Arrow from "../../Arrow/Arrow.jsx";
import {useState} from "react";
import {appointmentAddRequest} from "../../api/patiensApi.jsx";
import {useParams} from "react-router-dom";
import "./AddAppointment.css"

export default function AddAppointment() {
    const {examinationId} = useParams();
    const [appointment, setAppointment] = useState("");
    const [notification, setNotification] = useState("");
    const [notificationType, setNotificationType] = useState("");

    const handleChange = (e) => {
        setAppointment(e.currentTarget.value);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!appointment.trim()) {
            setNotification("Поле не может быть пустым.");
            setNotificationType("error");
            return;
        }

        const requestData = {
            content: appointment
        }
        console.log(requestData);
        console.log(examinationId);

        const status = await appointmentAddRequest(examinationId, requestData);
        if (status === 201) {
            setNotification("Назначение успешно добавлено")
            setNotificationType("success");
        }
        else {
            setNotification("Произошла ошибка при добавлении")
            setNotificationType("error");
        }
    }

    return (
        <>
            <div className="add-appointment-container">
                <Arrow/>
                <div className="add-appointment-form-container">
                    <form className="add-appointment-form">
                        <textarea name="conclusion" placeholder="Содержание" required onChange={handleChange}/>
                        <button type="submit" onClick={handleSubmit}>Добавить назначение</button>
                    </form>
                </div>
                <pre className={`notification ${notificationType}`}>{notification}</pre>
            </div>
        </>
    )
}