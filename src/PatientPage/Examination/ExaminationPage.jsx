import Examination from "./Examination.jsx";
import {
    appointmentInfoRequestExamination,
    examinationDeleteRequest,
    getExaminationInfoRequest
} from "../../api/patiensApi.jsx";
import {useNavigate, useParams} from "react-router-dom";
import {useContext, useEffect, useState} from "react";
import Arrow from "../../Arrow/Arrow.jsx";
import AppointmentsList from "../Appointment/AppointmenstList.jsx";
import "./ExaminationPage.css"
import {AppContext} from "../../contexts/AppContext.jsx"

export default function ExaminationPage() {
    const navigate = useNavigate();
    const{examinationId} = useParams();
    const[examination, setExamination] = useState({})
    const[appointments, setAppointments] = useState([])
    const [noAppointments, setNoAppointments] = useState(false);

    const { isDoctor } = useContext(AppContext);

    useEffect(() => {
        const fetchExamination = async () => {
            const response = await getExaminationInfoRequest(examinationId);
            setExamination(response.data);
        };

        const fetchAppointments = async () => {
            const response = await appointmentInfoRequestExamination(examinationId);
            if (response.data !== undefined && response.data.length !== 0) {
                setNoAppointments(false);
                setAppointments(response.data);
            } else {
                setNoAppointments(true);
                setAppointments([]);
            }
        }

        fetchAppointments();
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

    const handleAddAppointment = () => {
        navigate(`/patient/${examination.patientId}/editexamination/${id}`);
    }

    return (
        <>
            <div className="examination-page-container">
                <Arrow/>
                <div className="examination-info-container">
                    <Examination examination={examination}/>
                    {isDoctor && <div className="examination-page-buttons">
                        <button onClick={() => handleDeleteExamination(examination.id)}>Удалить</button>
                        <button onClick={() => handleEditExamination(examination.id)}>Редактировать</button>
                    </div>}
                </div>
                    <div className="appointment-container">
                        <div className="appointment-container-info">
                            <h2>Назначения</h2>
                            {isDoctor &&
                                <button className="add-appointment" onClick={handleAddAppointment}>Добавить
                                    назначение</button>}
                        </div>
                        <AppointmentsList
                            appointments={appointments}
                            noAppointments={noAppointments}
                        />
                    </div>
            </div>
        </>
    );
}
