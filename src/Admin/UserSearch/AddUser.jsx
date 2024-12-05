import Arrow from "../../Arrow/Arrow.jsx";
import {useState} from "react";
import "./AddUser.css"
import {userAddRequest} from "../../api/userApi.jsx";
import "./EditUser.css"

export default function AddUser() {
    const [newUser, setNewUser] = useState({
        fio: "",
        telephone: "",
        login: "",
        password: ""
    });
    const [notification, setNotification] = useState(" ");
    const [notificationType, setNotificationType] = useState("");
    const [role, setRole] = useState("");

    const handleChange = (e) => {
        setNewUser({...newUser, [e.target.name]: e.target.value});
    }

    const handleChangeRole = (e) => {
        setRole(e.target.value);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!newUser.fio.trim() || !newUser.telephone.trim() ||
            !newUser.login.trim() || !newUser.password.trim() ||
            (role === "0")) {
            setNotification("Поля не могут быть пустыми");
            setNotificationType("error");
            return;
        }

        const requestData = {
            fio: newUser.fio,
            telephone: newUser.telephone,
            login: newUser.login,
            password: newUser.password,
            role: parseInt(role),
        };

        console.log(requestData);

        const response = await userAddRequest(requestData);
        console.log(response);
        if (response === 201) {
            setNotification("Пользователь успешно добавлен")
            setNotificationType("success");
        }
        else if(response === 409){
            setNotification("Пользователь уже существует")
            setNotificationType("error");
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
                <div className="add-user-form-container">
                    <form className="add-user-form">
                        <input type="text" name="fio" placeholder="ФИО пользователя" required onChange={handleChange}/>
                        <input type="text" name="telephone" placeholder="Телефон" required onChange={handleChange}/>
                        <input type="text" name="login" placeholder="Логин" required onChange={handleChange}/>
                        <input type="text" name="password" placeholder="Пароль" required onChange={handleChange}/>
                        <select name="role" value={role} onChange={handleChangeRole}>
                            <option value={0}>Выберите роль</option>
                            <option value={1}>Администратор</option>
                            <option value={2}>Врач</option>
                            <option value={3}>Медсестра</option>
                        </select>
                        <button type="submit" onClick={handleSubmit}>Добавить пользователя</button>
                    </form>
                </div>
                <pre className={`notification ${notificationType}`}>{notification}</pre>
            </div>
        </>
    )
}