import PropTypes from "prop-types";
import { useState, useEffect, useContext } from "react";
import { getAnalysisRequest, postMarkRequest } from "../../api/patiensApi.jsx";
import "./Appointment.css";
import { AppContext } from "../../contexts/AppContext.jsx";
import Analysis from "../Analysis/Analysis.jsx";
import { useNavigate, useParams } from "react-router-dom";

export default function Appointment({ appointment }) {
    const navigate = useNavigate();
    const { patientId } = useParams();
    const [analysis, setAnalysis] = useState({});
    const { isDoctor } = useContext(AppContext);
    const [hasAnalysis, setHasAnalysis] = useState(false);
    useEffect(() => {
        const fetchAnalysis = async () => {
            const data = await getAnalysisRequest(appointment.id);
            setAnalysis(data);
            if (Object.keys(data).length !== 0) setHasAnalysis(true);
            console.log(data);
        };
        fetchAnalysis();
    }, [appointment.id]);

    const handlerAddAnalysis = () => {
        navigate(`/patient/${patientId}/appointment/${appointment.id}/addanalysis`);
    };

    const handlerMarkAnalysis = async () => {
        const status = await postMarkRequest(appointment.id);
        if (status === 201) {
            window.location.reload()
        }
        console.log(status);
        console.log(appointment.id);
    };

    return (
        <>
            <p><b>ФИО пациента: </b>{appointment.patientFio}</p>
            <p><b>Содержание: </b>{appointment.content}</p>
            <p><b>Дата назначения: </b>{appointment.date}</p>
            <p><b>ФИО врача: </b>{appointment.doctorFio}</p>
            <p><b>Выполнено: </b>{appointment.isMarked ? "Да" : "Нет"}</p>
            <p><b>Дата выполнения: </b>{appointment.markDate}</p>
            <p><b>ФИО выполнившего: </b>{appointment.fioMarkedBy}</p>
            <div className="analysis-container">
                {hasAnalysis && (
                    <>
                        <h3>Анализ</h3>
                        <Analysis analysis={analysis} />
                    </>
                )}
                <div className="analysis-buttons-container">
                    {(!isDoctor && !hasAnalysis && !appointment.isMarked) && (
                        <div className="button-add-analysis-container">
                            <button className="add-analysis" onClick={handlerAddAnalysis}>Добавить анализ</button>
                        </div>
                    )}
                    {(!isDoctor && !appointment.isMarked) && (
                        <div className="button-mark-analysis-container">
                            <button className="mark-analysis" onClick={handlerMarkAnalysis}>Отметить выполнение</button>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}

Appointment.propTypes = {
    appointment: PropTypes.shape({
        id: PropTypes.string.isRequired,
        patientFio: PropTypes.string.isRequired,
        content: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
        doctorFio: PropTypes.string.isRequired,
        isMarked: PropTypes.bool,
        markDate: PropTypes.string,
        fioMarkedBy: PropTypes.string,
        examinationId: PropTypes.string.isRequired
    }).isRequired,
};
