import {useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {deleteUser, getUserInfoRequest} from "../../api/userApi.jsx";
import Arrow from "../../Arrow/Arrow.jsx";
import "./UserPage.css"

export default function UserPage() {
    const { userId } = useParams();
    const navigate = useNavigate();
    const [userInfo, setUserInfo] = useState({});

    const role = {
        1: "Администратор",
        2: "Врач",
        3: "Медсестра"
    }

    useEffect(() => {
        const fetchPatientInfo = async () => {
            const data = await getUserInfoRequest(userId);
            setUserInfo(data);
        };

        fetchPatientInfo();
    }, [userId]);

    const handleDeleteUser = async () => {
        const status = await deleteUser(userId);
        if(status === 204) {
            navigate(-1);
        }
    }

    const handleEditUser = async () => {
        navigate(`/user/${userId}/edituser`);
    }

    return (
        <>
            <div className="user-page-container">
                <Arrow/>
                <h1>Информация о пользователе</h1>
                <div className="user-info-container">
                    <p><b>ФИО: </b>{userInfo.fio}</p>
                    <p><b>Телефон: </b>{userInfo.telephone}</p>
                    <p><b>Логин: </b>{userInfo.login}</p>
                    <p><b>Пароль: </b>{userInfo.password}</p>
                    <p><b>Роль: </b>{role[userInfo.role]}</p>
                    <div className="user-buttons">
                        <button onClick={() => handleDeleteUser(userInfo.id)}>Удалить</button>
                        <button onClick={handleEditUser}>Редактировать</button>
                    </div>
                </div>
            </div>
        </>
    )
}