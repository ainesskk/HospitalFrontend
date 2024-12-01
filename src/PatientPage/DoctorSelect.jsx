import { useEffect, useState } from "react";
import { getDoctorInfoRequest } from "../api/userApi.jsx";

export default function DoctorSelect({ onChange, selectedDoctorId }) {
    const [doctors, setDoctors] = useState([]);

    const handleChange = (e) => {
        onChange(e.target.value);
    };

    useEffect(() => {
        const fetchDoctorInfo = async () => {
            const data = await getDoctorInfoRequest();
            setDoctors(data);
        };

        fetchDoctorInfo();
    }, []);

    return (
        <>
            <select className="doctor-select" value={selectedDoctorId} onChange={handleChange}>
                <option value="">Выберите врача</option>
                {doctors.map(doctor => (
                    <option key={doctor.id} value={doctor.id}>{doctor.fio}</option>
                ))}
            </select>
        </>
    );
}
