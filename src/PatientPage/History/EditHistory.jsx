import { useEffect, useState } from "react";
import { getHistoryInfoRequest, historyEditRequest } from "../../api/patiensApi.jsx";
import { useParams } from "react-router-dom";
import Arrow from "../../Arrow/Arrow.jsx";
import DoctorSelect from "../DoctorSelect.jsx";
import "./AddHistory.css"

export default function EditHistory() {
    const { historyId } = useParams();
    const [newHistory, setNewHistory] = useState({
        diagnosis: "",
        userId: "",
        departureDate: "",
        lifeAnamnesis: "",
        diseaseAnamnesis: "",
        epicrisis: "",
        complaints: ""
    });
    const [doctorId, setDoctorId] = useState("");
    const [notification, setNotification] = useState(" ");
    const [notificationType, setNotificationType] = useState("");

    useEffect(() => {
        const fetchHistoryInfo = async () => {
            const data = await getHistoryInfoRequest(historyId);
            setNewHistory(data);
            setDoctorId(data.userId);
        };

        fetchHistoryInfo();
    }, [historyId]);

    const handleChange = (e) => {
        setNewHistory({ ...newHistory, [e.target.name]: e.target.value });
    };

    const handleChangeDoctor = (childDoctorId) => {
        setDoctorId(childDoctorId);
        setNewHistory({ ...newHistory, userId: childDoctorId });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const requestData = {
            diagnosis: newHistory.diagnosis,
            userId: doctorId,
            departureDate: newHistory.departureDate,
            lifeAnamnesis: newHistory.lifeAnamnesis,
            diseaseAnamnesis: newHistory.diseaseAnamnesis,
            epicrisis: newHistory.epicrisis,
            complaints: newHistory.complaints
        };

        const status = await historyEditRequest(historyId, requestData);
        if (status === 204) {
            setNotification("История успешно отредактирована");
            setNotificationType("success");
        } else {
            setNotification("Произошла ошибка при редактировании");

            setNotificationType("error");
        }
    };

    return (
        <>
            <div className="add-history-container">
                <Arrow/>
                <div className="add-history-form-container">
                    <form className="add-history-form" onSubmit={handleSubmit}>
                        <input type="text" name="diagnosis" placeholder="Диагноз" value={newHistory.diagnosis} required
                               onChange={handleChange}/>
                        <input type="date" name="departureDate" placeholder="Дата выписки"
                               value={newHistory.departureDate} onChange={handleChange}/>
                        <textarea name="lifeAnamnesis" placeholder="Анамнез жизни" value={newHistory.lifeAnamnesis}
                                  required onChange={handleChange}></textarea>
                        <textarea name="diseaseAnamnesis" placeholder="Анамнез болезни"
                                  value={newHistory.diseaseAnamnesis} required onChange={handleChange}></textarea>
                        <textarea name="epicrisis" placeholder="Эпикриз" value={newHistory.epicrisis} required
                                  onChange={handleChange}></textarea>
                        <textarea name="complaints" placeholder="Жалобы" value={newHistory.complaints} required
                                  onChange={handleChange}></textarea>
                        <DoctorSelect onChange={handleChangeDoctor} selectedDoctorId={doctorId}/>
                        <button type="submit">Сохранить изменения</button>
                    </form>
                </div>
                    <pre className={`notification ${notificationType}`}>{notification}</pre>
                </div>
            </>
            );
            }
