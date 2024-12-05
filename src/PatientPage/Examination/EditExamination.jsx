import Arrow from "../../Arrow/Arrow.jsx";
import DoctorSelect from "../DoctorSelect.jsx";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import {
    examinationEditRequest,
    getExaminationInfoRequest,
} from "../../api/patiensApi.jsx";
import "./EditExamination.css"

export default function EditExamination() {
    const { examinationId } = useParams();
    const [newExamination, setNewExamination] = useState({
        date: "",
        conclusion: "",
        userId: ""
    });
    const [doctorId, setDoctorId] = useState("");
    const [notification, setNotification] = useState(" ");
    const [notificationType, setNotificationType] = useState("");

    useEffect(() => {
        const fetchExaminationInfo = async () => {
            const response = await getExaminationInfoRequest(examinationId);
            setNewExamination(response.data);
            setDoctorId(response.data.userId);
        };

        fetchExaminationInfo();
    }, [examinationId]);

    const handleChange = (e) => {
        setNewExamination({ ...newExamination, [e.target.name]: e.target.value });
    };

    const handleChangeDoctor = (childDoctorId) => {
        setDoctorId(childDoctorId);
        setNewExamination({ ...newExamination, userId: childDoctorId });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const requestData = {
            date: newExamination.date,
            conclusion: newExamination.conclusion,
            userId: doctorId
        };

        const status = await examinationEditRequest(examinationId, requestData);
        if (status === 204) {
            setNotification("Осмотр успешно отредактирован");
            setNotificationType("success");
        } else {
            setNotification("Произошла ошибка при редактировании");
            setNotificationType("error");
        }
    };

    return (
        <>
            <div className="edit-examination-container">
                <Arrow />
                <div className="edit-examination-form-container">
                    <form className="edit-examination-form" onSubmit={handleSubmit}>
                        <input type="date" name="date" placeholder="Дата осмотра" value={newExamination.date} required
                               onChange={handleChange}/>
                        <textarea name="conclusion" placeholder="Заключение" value={newExamination.conclusion} required
                                  onChange={handleChange}/>
                        <DoctorSelect onChange={handleChangeDoctor} selectedDoctorId={doctorId}/>
                        <button type="submit">Сохранить изменения</button>
                    </form>
                </div>

                <pre className={`notification ${notificationType}`}>{notification}</pre>
            </div>
        </>
    );
}
