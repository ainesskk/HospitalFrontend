import "./SearchPatient.css"

export default function SearchPatient() {
    return (
        <>
            <div className="search-patient-container">
                <p className="search-patient-fio">Иван Иванович Иванов</p>
                <div className="search-patient-birthday-container">

                    <p className="search-patient-birthday">30.12.2000</p>
                </div>
                <p className="search-patient-passport">9099 345345</p>
            </div>
        </>
    )
}