import {useNavigate} from 'react-router-dom';
import "./Authorization.css"

export default function Login() {
    const navigate = useNavigate();

    const onLoginClick = (e) => {
        e.preventDefault();
        navigate('/search');
    }

    return (
        <>
            <form className="login-form">
                <h1>Психиатрическая больница</h1>
                <div className="login-div">
                    <input type="text" name="username" placeholder="Логин"></input>
                    <input type="text" name="password" placeholder="Пароль"></input>
                    <button type="submit" onClick={onLoginClick}>Войти</button>
                </div>
            </form>
        </>
    )
}