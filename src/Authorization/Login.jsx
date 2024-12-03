import { useNavigate } from 'react-router-dom';
import "./Authorization.css";
import { useState, useContext } from "react";
import { loginRequest } from "../api/authorizationApi.jsx";
import { AppContext } from "../contexts/AppContext.jsx";
import { getUserRole } from "../api/userApi.jsx";

export default function Login() {
    const navigate = useNavigate();
    const { setIsRoleSet, setIsDoctor } = useContext(AppContext);
    const [data, setData] = useState({ login: "", password: "" });
    const [notification, setNotification] = useState(" ");

    const handleChange = (event) => {
        setData({ ...data, [event.target.name]: event.target.value });
    };

    const onLoginClick = async (e) => {
        e.preventDefault();

        const requestData = {
            login: data.login,
            password: data.password
        };

        const status = await loginRequest(requestData);
        if (status === 200) {
            const role = await getUserRole();
            sessionStorage.setItem('role', role);
            setIsRoleSet(true);
            if (role === "Doctor") {
                setIsDoctor(true);
                sessionStorage.setItem('isDoctor', 'true');
            } else {
                setIsDoctor(false);
                sessionStorage.setItem('isDoctor', 'false');
            }

            navigate("/");
        } else {
            setNotification("Неверный логин или пароль");
        }
    };

    return (
        <>
            <form className="login-form">
                <h1>Психиатрическая больница</h1>
                <div className="login-div">
                    <input type="text" name="login" placeholder="Логин" autoComplete="on" onChange={handleChange} required />
                    <input type="password" name="password" placeholder="Пароль" autoComplete="on" onChange={handleChange} required />
                    <pre className="notification">{notification}</pre>
                    <button type="submit" onClick={onLoginClick}>Войти</button>
                </div>
            </form>
        </>
    );
}
