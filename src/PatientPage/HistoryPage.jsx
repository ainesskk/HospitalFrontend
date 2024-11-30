import {useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {getExaminationsInfoRequest, getHistoryInfoRequest} from "../api/patiensApi.jsx";
import Arrow from "../Arrow.jsx";
import Examination from "./Examination.jsx";

export default function HistoryPage({}) {

    const navigate = useNavigate();
    const { patientId, historyId } = useParams();
    const [historyInfo, setHistoryInfo] = useState({});
    const [noExaminations, setNoExaminations] = useState(true);
    const [examinations, setExaminations] = useState([]);

    useEffect( () =>{
        const fetchHistoryInfo = async () => {
            const data = await getHistoryInfoRequest(historyId);
            setHistoryInfo(data);
            console.log(historyInfo.patientFio);
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
            console.log(examinations);
        };

        fetchHistoryInfo();
        fetchExaminations();
    }, [historyId]);

    const handleEditHistory = () => {
        navigate(`/patient/${patientId}/edithistory/${historyId}`);
    }

    const handleAddExamination = () => {
        navigate(`/patient/${patientId}/history/${historyId}/addexamination`);
    };

    return (
        <>
            <Arrow />
            <div className="history-page-container">
                <p><b>ФИО пациента: </b>{historyInfo.patientFio}</p>
                <p><b>ФИО врача: </b>{historyInfo.doctorFio}</p>
                <p><b>Диагноз: </b>{historyInfo.diagnosis}</p>
                <p><b>Жалобы: </b>{historyInfo.complaints}</p>
                <p><b>Дата прибытия: </b>{historyInfo.arriveDate}</p>
                <p><b>Дата выписки: </b>{historyInfo.departureDate}</p>
                <p><b>Анамнез жизни: </b>{historyInfo.lifeAnamnesis}</p>
                <p><b>Анамнез болезни: </b>{historyInfo.diseaseAnamnesis}</p>
                <p><b>Эпикриз: </b>{historyInfo.epicrisis}</p>
                <button className="edit-history" onClick={handleEditHistory}>Редактировать историю</button>
            </div>
            <div className="examinations-container">
                <p>Осмотры</p>
                <button className="add-examination" onClick={handleAddExamination}>Добавить осмотр</button>
                {noExaminations ? (
                    <p className="no-results">Нет результатов</p>
                ) : (
                    <div className="history-container">
                        {examinations.map((examination) => (
                            <Examination key={examination.id} examination={examination} />
                        ))}
                    </div>
                )}
            </div>
        </>
    )
}