import Arrow from "../../Arrow/Arrow.jsx";
import {useState} from "react";
import {patientAddRequest} from "../../api/patiensApi.jsx";
import "./AddUser.css"

export default function AddUser() {
    const [newPatient, setNewPatient] = useState({
        fio: "",
        telephone: "",
        series: "",
        number: "",
        birthDate: "",
        address: ""
    });
    const [notification, setNotification] = useState(" ");
    const [notificationType, setNotificationType] = useState("");

    const handleChange = (e) => {
        setNewPatient({...newPatient, [e.target.name]: e.target.value});
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        const requestData = {
            fio: newPatient.fio,
            telephone: newPatient.telephone,
            passport: newPatient.series + " " + newPatient.number,
            birthDate: newPatient.birthDate,
            address: newPatient.address,
        };

        console.log(requestData);

        const response = await patientAddRequest(requestData);
        console.log(response);
        if (response === 201) {
            setNotification("Пациент успешно добавлен")
            setNotificationType("success");
        }
        else {
            setNotification("Произошла ошибка при добавлении")
            setNotificationType("error");
        }

    }

    return (
        <>
            <div className="add-patient-container">
                <Arrow/>
                <div className="add-patient-form-container">
                    <form className="add-patient-form">
                        <input type="text" name="fio" placeholder="ФИО пациента" required onChange={handleChange}/>
                        <input type="text" name="telephone" placeholder="Телефон" required onChange={handleChange}/>
                        <div className="passport-data">
                            <input type="text" name="series" placeholder="Серия паспорта" required
                                   onChange={handleChange}/>
                            <input type="text" name="number" placeholder="Номер парспорта" required
                                   onChange={handleChange}/>
                        </div>
                        <input type="date" name="birthDate" placeholder="Дата рождения" required onChange={handleChange}/>
                        <input type="text" name="address" placeholder="Адрес" required onChange={handleChange}/>
                        <button type="submit" onClick={handleSubmit}>Добавить пациента</button>
                    </form>
                </div>
                <pre className={`notification ${notificationType}`}>{notification}</pre>
            </div>
        </>
    )
}