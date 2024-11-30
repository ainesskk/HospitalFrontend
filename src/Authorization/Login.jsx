import {useNavigate} from 'react-router-dom';
import "./Authorization.css"
import {useState} from "react";
import {loginRequest} from "../api/authorizationApi.jsx"

export default function Login() {
    const navigate = useNavigate();
    const [data, setData] = useState({login: "", password: ""});
    const [notification, setNotification] = useState(" ");

    const handleChange = (event) => {
        setData({ ...data, [event.target.name]: event.target.value });
    };

    const onLoginClick = async (e) => {
        e.preventDefault();

        const requestData = {
            login: data.login,
            password: data.password
        }

        const status = await loginRequest(requestData);
        console.log(requestData);
        if (status === 200) {
            navigate("/search");
        }
        else {
            setNotification("Неверный логин или пароль")
        }

    }

    return (
        <>
            <form className="login-form">
                <h1>Психиатрическая больница</h1>
                <div className="login-div">
                    <input type="text" name="login" placeholder="Логин" onChange={handleChange} required></input>
                    <input type="text" name="password" placeholder="Пароль" onChange={handleChange} required></input>
                    <pre className="notification">{notification}</pre>
                    <button type="submit" onClick={onLoginClick}>Войти</button>
                </div>
            </form>
        </>
    )
}