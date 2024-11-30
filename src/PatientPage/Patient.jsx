import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getPatientHistoryRequest, getPatientInfoRequest } from "../api/patiensApi.jsx";
import HistorySearch from "../PatientPage/HistorySearch.jsx";
import "./Patient.css";
import Arrow from "../Arrow.jsx";

export default function Patient() {
    const { id } = useParams();
    const [patientInfo, setPatientInfo] = useState({});
    const [history, setHistory] = useState([]);
    const [noHistories, setNoHistories] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchPatientInfo = async () => {
            const data = await getPatientInfoRequest(id);
            setPatientInfo(data);
        };

        const fetchPatientHistory = async () => {
            const response = await getPatientHistoryRequest(id);
            console.log(response);
            if (response.data !== undefined && response.data.length !== 0) {
                setNoHistories(false);
                setHistory(response.data);
            } else {
                setNoHistories(true);
                setHistory([]);
            }
        };

        fetchPatientInfo();
        fetchPatientHistory();
    }, [id]);

    const addHistory = () => {
        navigate(`/patient/${id}/addhistory`);
    };

    return (
        <>
            <div className="patient-page-container">
                <Arrow />
                <div className="patient-info-container">
                    <p><b>ФИО: </b>{patientInfo.fio}</p>
                    <p><b>Телефон: </b>{patientInfo.telephone}</p>
                    <p><b>Дата рождения: </b>{patientInfo.birthDate}</p>
                    <p><b>Паспортные данные: </b>{patientInfo.passport}</p>
                    <p><b>Адрес проживания: </b>{patientInfo.address}</p>
                </div>
                <div className="patient-histories-container">
                    <h2>Истории болезней</h2>
                    <button className="add-history" onClick={addHistory}>Добавить</button>
                </div>
                {noHistories ? (
                    <p className="no-results">Нет результатов</p>
                ) : (
                    <div className="history-container">
                        {history.map((historyItem) => (
                            <HistorySearch key={historyItem.id} userId={id} history={historyItem} />
                        ))}
                    </div>
                )}
            </div>
        </>
    );
}
