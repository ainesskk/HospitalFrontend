import {useEffect, useState} from "react";
import {getDoctorInfoRequest} from "./api/userApi.jsx";

export default function DoctorSelect ({onChange}) {

    const [doctors, setDoctors] = useState([]);

    const handleChange = (e) => {
        onChange(e.target.value);
    };

    useEffect(() => {
        const fetchDoctorInfo = async () => {
            const data = await getDoctorInfoRequest();
            setDoctors(data);
        }

        fetchDoctorInfo();
    }, []);

    return (
        <>
            <select className="doctor-select" onChange={handleChange}>
                <option value="">Выберите врача</option>
                {
                    doctors.map(doctor => {
                        return <option key={doctor.id} value={doctor.id}>{doctor.fio}</option>
                    })
                }
            </select>
        </>
    )
}