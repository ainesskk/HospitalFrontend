import PropTypes from "prop-types";
import Examination from "./Examination.jsx";
import { useNavigate } from "react-router-dom";

export default function ExaminationsList({ examinations, noExaminations, patientId }) {
    const navigate = useNavigate();

    const showExamination = (examination) => {
        navigate(`/patient/${patientId}/examination/${examination.id}`);
    };

    return (
        <>
            {noExaminations ? (
                <p className="no-results">Нет результатов</p>
            ) : (
                <div className="all-examinations-container">
                    {examinations.map(examination => (
                        <div key={examination.id} className="examination-container">
                            <Examination examination={examination} />
                            <button onClick={() => showExamination(examination)}>Открыть</button>
                        </div>
                    ))}
                </div>
            )}
        </>
    );
}

ExaminationsList.propTypes = {
    examinations: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            date: PropTypes.string.isRequired,
            conclusion: PropTypes.string.isRequired,
            doctorFio: PropTypes.string.isRequired
        })
    ).isRequired,
    noExaminations: PropTypes.bool.isRequired,
    patientId: PropTypes.string.isRequired
};
