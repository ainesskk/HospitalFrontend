import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Arrow from "../../Arrow/Arrow.jsx";
import {getUserInfoRequest, editUserRequest} from "../../api/userApi.jsx"
import "./EditUser.css"

export default function EditUser() {
    const { userId } = useParams();
    const [newUser, setNewUser] = useState({
        fio: "",
        telephone: "",
        login: "",
        password: "",
        role: 0
    });
    const [notification, setNotification] = useState(" ");

    useEffect(() => {
        const fetchUserInfo = async () => {
            const data = await getUserInfoRequest(userId);
            console.log("user ", data);
            setNewUser(data);
        };

        fetchUserInfo();
    }, [userId]);

    const handleChange = (e) => {
        setNewUser({ ...newUser, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const requestData = {
            fio: newUser.fio,
            telephone: newUser.telephone,
            login: newUser.login,
            password: newUser.password,
            role: parseInt(newUser.role)
        };

        console.log(requestData);

        const status = await editUserRequest(userId, requestData);
        if (status === 204) {
            setNotification("История успешно отредактирована");
        } else {
            setNotification("Произошла ошибка при редактировании");
        }
    };

    return (
        <>
            <div className="edit-user-container">
                <Arrow/>
                <div className="edit-user-form-container">
                    <form className="edit-user-form" onSubmit={handleSubmit}>
                        <input
                            type="text"
                            name="fio"
                            placeholder="ФИО"
                            value={newUser.fio}
                            required
                            onChange={handleChange}
                        />
                        <input
                            type="text"
                            name="telephone"
                            placeholder="Телефон"
                            value={newUser.telephone}
                            required
                            onChange={handleChange}
                        />
                        <input
                            type="text"
                            name="login"
                            placeholder="Логин"
                            value={newUser.login}
                            required
                            onChange={handleChange}
                        />
                        <input
                            type="text"
                            name="password"
                            placeholder="Пароль"
                            value={newUser.password}
                            required
                            onChange={handleChange}
                        />
                        <select
                            name="role"
                            value={newUser.role}
                            required
                            onChange={handleChange}
                        >
                            <option value={1}>Администратор</option>
                            <option value={2}>Врач</option>
                            <option value={3}>Медсестра</option>
                        </select>
                        <button type="submit">Сохранить изменения</button>
                    </form>
                </div>
                <pre className="notification">{notification}</pre>
            </div>
        </>
    );
}
