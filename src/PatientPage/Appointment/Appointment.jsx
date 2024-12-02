import PropTypes from "prop-types";

export default function Appointment({appointment}) {
    return (
        <>
            <p><b>ФИО пациента: </b>{appointment.patientFio}</p>
            <p><b>Контент: </b>{appointment.content}</p>
            <p><b>Дата назначения: </b>{appointment.date}</p>
            <p><b>ФИО врача: </b>{appointment.doctorFio}</p>
            <p><b>Выполнено: </b>{appointment.isMarked ? "Да" : "Нет"}</p>
            <p><b>Дата выполнения: </b>{appointment.markDate}</p>
            <p><b>ФИО выполнившего: </b>{appointment.fioMarkedBy}</p>
        </>
    )
}

Appointment.propTypes = {
    appointment: PropTypes.shape(
        {
            patientFio: PropTypes.string.isRequired,
            content: PropTypes.string.isRequired,
            date: PropTypes.string.isRequired,
            doctorFio: PropTypes.string.isRequired,
            isMarked: PropTypes.bool,
            markDate: PropTypes.string,
            fioMarkedBy: PropTypes.string
        }
    ).isRequired
};