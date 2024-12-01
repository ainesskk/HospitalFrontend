import PropTypes from "prop-types";


export default function Examination({examination}) {

    return (
        <>
            <p><b>Дата осмотра: </b>{examination.date}</p>
            <p><b>Заключение: </b>{examination.conclusion}</p>
            <p><b>ФИО врача: </b>{examination.doctorFio}</p>
        </>
    )
}

Examination.propTypes = {
    examination: PropTypes.shape({
        date: PropTypes.string.isRequired,
        conclusion: PropTypes.string.isRequired,
        doctorFio: PropTypes.string.isRequired
    }).isRequired
};