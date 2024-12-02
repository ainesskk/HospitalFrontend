import axios from 'axios';
import {setLsToken} from "./localStorageFunctions.jsx";
import {basicUrl} from "./url.js";

//Функция отправки запроса для входа в пользователя.
export async function loginRequest(requestData) {
    try{
        const response = await axios.post(`${basicUrl}/Account/auth-token`, requestData)
        setLsToken(response.data);
        return response.status;
    }catch(err){
        console.log(err);
        return err.status;
    }
}

//Функция отправки запроса для получения данных пользователя
export async function getUserInfoRequest() {
    try{
        const response = await axios.get(`${basicUrl}/UserInfo`, {})
    }catch(err){
        console.log(err);
        return err.status;
    }
}