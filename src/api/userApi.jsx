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
        return role.data;
    }catch(err){
        console.log(err);
        return err.status;
    }
}

//Функция получения пользователей по ФИО
export async function getUserInfoWithFio(searchString){
    try{
        const response = await axios.get(`${basicUrl}/User/Fio/${searchString}`, {
            headers: { "Authorization": `Bearer ${getLsToken()}` }
        });
        console.log(response.data)
        return response;
    }catch(err){
        console.log(err);
        return err.status;
    }
}

//Функция получения пользователей по ФИО
export async function getUserInfoRequest(userId){
    try{
        const response = await axios.get(`${basicUrl}/User/Id/${userId}`, {
            headers: { "Authorization": `Bearer ${getLsToken()}` }
        });
        console.log(response.data)
        return response.data;
    }catch(err){
        console.log(err);
        return err.status;
    }
}

//Функция для отправки запроса удаления пользователя
export async function deleteUser(userId){
    try{
        const response = await axios.delete(`${basicUrl}/User/${userId}`,{
            headers: { "Authorization": `Bearer ${getLsToken()}` }
        });
        console.log(response)
        return response.status;
    }catch(err){
        console.log(err);
        return err.status;
    }
}

//Функция отправки запроса для получения информации о пользователе по id.
export async function editUserRequest(userId, requestData) {
    try{
        const response = await axios.put(`${basicUrl}/User/Id/${userId}`, requestData, {
            headers: { "Authorization": `Bearer ${getLsToken()}` }
        });
        console.log(response.status)
        return response.status;
    }catch(err){
        console.log(err);
        return err.status;
    }
}