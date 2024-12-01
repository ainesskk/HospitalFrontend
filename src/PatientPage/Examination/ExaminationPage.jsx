import Examination from "./Examination.jsx";
import {
    examinationDeleteRequest,
    getExaminationInfoRequest
} from "../../api/patiensApi.jsx";
import {useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import Arrow from "../../Arrow/Arrow.jsx";
import ExaminationsList from "./ExaminationList.jsx";

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
            <Examination examination={examination}/>
            <button onClick={() => handleDeleteExamination(examination.id)}>Удалить</button>
            <button onClick={() => handleEditExamination(examination.id)}>Редактировать</button>
            {/*<div className="examinations-container">*/}
            {/*    <p>Назначения</p>*/}
            {/*    <button className="add-examination" onClick={handleAddExamination}>Добавить осмотр</button>*/}
            {/*    <ExaminationsList*/}
            {/*        examinations={examinations}*/}
            {/*        noExaminations={noExaminations}*/}
            {/*        patientId={patientId}*/}
            {/*    />*/}
            {/*</div>*/}
        </>
    );
}
