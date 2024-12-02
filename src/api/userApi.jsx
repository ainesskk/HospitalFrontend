import axios from 'axios';
import {getLsToken} from "./localStorageFunctions.jsx";
import {basicUrl} from "./url.js";

//Функция отправки запроса для получения информации о враче.
export async function getDoctorInfoRequest() {
    try{
        const response = await axios.get(`${basicUrl}/User/Doctor`, {
            headers: { "Authorization": `Bearer ${getLsToken()}` }
        });
        console.log(response)
        return response.data;
    }catch(err){
        console.log(err);
        return err.status;
    }
}

//Функция получения роли авторизованного пользователя
export async function getUserRole(){
    try{
        const role = await axios.get(`${basicUrl}/User/Role`, {
            headers: { "Authorization": `Bearer ${getLsToken()}` }
        });
        console.log(role)
        return role;
    }catch(err){
        console.log(err);
        return err.status;
    }
}