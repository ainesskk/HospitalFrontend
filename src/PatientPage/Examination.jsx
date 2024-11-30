

export default function Examination({examination}) {
    return (
        <>
            <div className="examination-container">
                <p><b>Дата осмотра: </b>{examination.date}</p>
                <p><b>Заключение: </b>{examination.conclusion}</p>
                <p><b>Фио врача: </b>{examination.doctorFio}</p>
            </div>
        </>
    )
}