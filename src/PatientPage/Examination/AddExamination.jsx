import Arrow from "../../Arrow/Arrow.jsx";
import DoctorSelect from "../DoctorSelect.jsx";
import {examinationAddRequest} from "../../api/patiensApi.jsx";
import {useState} from "react";
import {useParams} from "react-router-dom";
import "./EditExamination.css"

export default function AddExamination () {
    const {historyId} = useParams();
    const [newExamination, setNewExamination] = useState({
        date: "",
        conclusion: ""
    });
    const [doctorId, setDoctorId] = useState("");
    const [notification, setNotification] = useState(" ");
    const [notificationType, setNotificationType] = useState("");

    const handleChangeDoctor = (childDoctorId) => {
        setDoctorId(childDoctorId);
    };

    const handleChange = (e) => {
        setNewExamination({...newExamination, [e.target.name]: e.target.value});
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        const requestData = {
            date: newExamination.date,
            conclusion: newExamination.conclusion,
            userId: doctorId
        };

        const response = await examinationAddRequest(historyId, requestData);
        if (response === 201) {
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
            <div className="add-examination-container">
                <Arrow/>
                <div className="add-examination-form-container">
                    <form className="add-examination-form">
                        <input type="date" name="date" placeholder="Дата осмотра" required onChange={handleChange}/>
                        <textarea name="conclusion" placeholder="Заключение" required onChange={handleChange}/>
                        <DoctorSelect onChange={handleChangeDoctor}/>
                        <button type="submit" onClick={handleSubmit}>Добавить осмотр</button>
                    </form>
                </div>

                <pre className={`notification ${notificationType}`}>{notification}</pre>
            </div>
        </>
    )
}