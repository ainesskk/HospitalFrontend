import Examination from "./Examination.jsx";
import {
    examinationDeleteRequest,
    getExaminationInfoRequest
} from "../../api/patiensApi.jsx";
import {useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import Arrow from "../../Arrow/Arrow.jsx";
import "./ExaminationPage.css"

export default function ExaminationPage() {
    const navigate = useNavigate();
    const{examinationId} = useParams();
    const[examination, setExamination] = useState({})

    useEffect(() => {
        const fetchExamination = async () => {
            const response = await getExaminationInfoRequest(examinationId);
            setExamination(response.data);
            console.log(examination);
        };
        fetchExamination();
    }, [examinationId]);

    async function handleDeleteExamination(id) {
        const status = await examinationDeleteRequest(id);
        if(status === 204) {
            navigate(-1);
        }
    }

    const handleEditExamination = (id) => {
        navigate(`/patient/${examination.patientId}/editexamination/${id}`);
    };

    return (
        <>
            <Arrow/>
            <div className="examination-page-container">
                <Examination examination={examination}/>
                <div className="examination-page-buttons">
                    <button onClick={() => handleDeleteExamination(examination.id)}>Удалить</button>
                    <button onClick={() => handleEditExamination(examination.id)}>Редактировать</button>
                </div>
            </div>
            {/*<div className="appointment-container">*/}
            {/*    <p>Назначения</p>*/}
            {/*    <button className="add-appointment" onClick={handleAddAppointment}>Добавить осмотр</button>*/}
            {/*    <AppointmentsList*/}
            {/*        appointments={examinations}*/}
            {/*        noAppointments={noExaminations}*/}
            {/*        patientId={patientId}*/}
            {/*    />*/}
            {/*</div>*/}
        </>
    );
}
