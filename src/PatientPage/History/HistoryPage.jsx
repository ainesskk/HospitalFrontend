import { useNavigate, useParams } from "react-router-dom";
import {useContext, useEffect, useState} from "react";
import {
    appointmentInfoRequestHistory,
    getExaminationsInfoRequest,
    getHistoryInfoRequest
} from "../../api/patiensApi.jsx";
import Arrow from "../../Arrow/Arrow.jsx";
import ExaminationsList from "../Examination/ExaminationList.jsx";
import AppointmentsList from "../Appointment/AppointmenstList.jsx";
import "./HistoryPage.css"
import {AppContext} from "../../contexts/AppContext.jsx";

export default function HistoryPage() {
    const navigate = useNavigate();
    const { patientId, historyId } = useParams();
    const [historyInfo, setHistoryInfo] = useState({});
    const {isDoctor} = useContext(AppContext);

    const [noExaminations, setNoExaminations] = useState(true);
    const [examinations, setExaminations] = useState([]);

    const [noAppointments, setNoAppointments] = useState(true);
    const [appointments, setAppointments] = useState([]);

    useEffect(() => {
        const fetchHistoryInfo = async () => {
            const data = await getHistoryInfoRequest(historyId);
            setHistoryInfo(data);
        };

        const fetchExaminations = async () => {
            const response = await getExaminationsInfoRequest(historyId);
            if (response.data !== undefined && response.data.length !== 0) {
                setNoExaminations(false);
                setExaminations(response.data);
            } else {
                setNoExaminations(true);
                setExaminations([]);
            }
        };

        const fetchAppointments = async () => {
            const response = await appointmentInfoRequestHistory(historyId);
            if (response.data !== undefined && response.data.length !== 0) {
                setNoAppointments(false);
                setAppointments(response.data);
            } else {
                setNoAppointments(true);
                setAppointments([]);
            }
        };

        fetchHistoryInfo();
        fetchExaminations();
        fetchAppointments();
    }, [historyId]);

    const handleEditHistory = () => {
        navigate(`/patient/${patientId}/edithistory/${historyId}`);
    };

    const handleAddExamination = () => {
        navigate(`/patient/${patientId}/history/${historyId}/addexamination`);
    };

    return (
        <>
            <div className="history-page-container">
                <Arrow/>
                <div className="history-info-container">
                    <p><b>ФИО пациента: </b>{historyInfo.patientFio}</p>
                    <p><b>ФИО врача: </b>{historyInfo.doctorFio}</p>
                    <p><b>Диагноз: </b>{historyInfo.diagnosis}</p>
                    <p><b>Жалобы: </b>{historyInfo.complaints}</p>
                    <p><b>Дата прибытия: </b>{historyInfo.arriveDate}</p>
                    <p><b>Дата выписки: </b>{historyInfo.departureDate}</p>
                    <p><b>Анамнез жизни: </b>{historyInfo.lifeAnamnesis}</p>
                    <p><b>Анамнез болезни: </b>{historyInfo.diseaseAnamnesis}</p>
                    <p><b>Эпикриз: </b>{historyInfo.epicrisis}</p>

                    {
                        isDoctor && <div className="edit-history-button">
                                        <button className="edit-history" onClick={handleEditHistory}>Редактировать историю</button>
                                    </div>
                    }
                </div>
                <div className="examinations-container">
                    <div className="examination-container-info">
                        <h2>Осмотры</h2>
                        { isDoctor && <button className="add-examination" onClick={handleAddExamination}>Добавить осмотр</button>}
                    </div>

                    <ExaminationsList
                        examinations={examinations}
                        noExaminations={noExaminations}
                        patientId={patientId}
                    />
                </div>
                <div className="appointment-container">
                    <div className="appointment-container-info">
                        <h2>Назначения</h2>
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
