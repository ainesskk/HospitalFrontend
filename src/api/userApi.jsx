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