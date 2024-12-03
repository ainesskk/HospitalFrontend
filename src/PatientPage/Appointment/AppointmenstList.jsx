import PropTypes from "prop-types";
import Appointment from "./Appointment.jsx";
import "./AppointmentList.css"

export default function AppointmentsList({ appointments, noAppointments}) {


    return (
        <>
            {noAppointments ? (
                <p className="no-results-appointment">Нет результатов</p>
            ) : (
                <div className="all-appointments-container">
                    {appointments.map(appointment => (
                        <div className="appointments-container" key={appointment.id}>
                            <Appointment appointmentId={appointment.id}/>
                        </div>
                    ))}
                </div>
            )}
        </>
    );
}

AppointmentsList.propTypes = {
        appointments: PropTypes.arrayOf(
            PropTypes.shape({
                patientFio: PropTypes.string.isRequired,
                content: PropTypes.string.isRequired,
                date: PropTypes.string.isRequired,
                doctorFio: PropTypes.string.isRequired,
                isMarked: PropTypes.bool,
                markDate: PropTypes.string,
                fioMarkedBy: PropTypes.string
            })
        ).isRequired,
    noAppointments: PropTypes.bool.isRequired
};
