import axios from "axios";
import {getLsToken} from "./localStorageFunctions.jsx";
import {basicUrl} from "./url.js";

//Функция отправки запроса для поиска пациентов по фамилии.
export async function searchPatientsRequest(searchString) {
    try{
        const response = await axios.get(`${basicUrl}/Patient/Fio/${searchString}`, {
            headers: { "Authorization": `Bearer ${getLsToken()}` }
        });
        console.log(response.data)
        return response;
    }catch(err){
        console.log(err);
        return err.status;
    }
}

//Функция отправки запроса для получения информации о пациенте по id.
export async function getPatientInfoRequest(patientId) {
    try{
        const response = await axios.get(`${basicUrl}/Patient/${patientId}`, {
            headers: { "Authorization": `Bearer ${getLsToken()}` }
        });
        console.log(response.data)
        return response.data;
    }catch(err){
        console.log(err);
        return err.status;
    }
}

//Функция отправки запроса для получения историй болезни пациента.
export async function getPatientHistoryRequest(patientId) {
    try{
        const response = await axios.get(`${basicUrl}/Patient/${patientId}/History`, {
            headers: { "Authorization": `Bearer ${getLsToken()}` }
        });
        console.log(response)
        return response;
    }catch(err){
        console.log(err);
        return err.status;
    }
}

//Функция отправки запроса для получения информации об истории болезни пациента.
export async function getHistoryInfoRequest(historyId) {
    try{
        const response = await axios.get(`${basicUrl}/History/${historyId}`, {
            headers: { "Authorization": `Bearer ${getLsToken()}` }
        });
        console.log(response)
        return response.data;
    }catch(err){
        console.log(err);
        return err.status;
    }
}

//Функция отправки запроса для создания истории болезни пациента.
export async function HistoryAddRequest(patientId, requestData) {
    try{
        const response = await axios.post(`${basicUrl}/Patient/${patientId}/History`, requestData, {
            headers: { "Authorization": `Bearer ${getLsToken()}` }
        });
        console.log(response)
        return response.status;
    }catch(err){
        console.log(err);
        return err.status;
    }
}

//Функция отправки запроса для изменения истории болезни пациента.
export async function HistoryEditRequest(historyId, requestData) {
    try{
        console.log(historyId);
        console.log(requestData);
        const response = await axios.put(`${basicUrl}/History/${historyId}`, requestData, {
            headers: { "Authorization": `Bearer ${getLsToken()}` }
        });
        console.log(response)
        return response.status;
    }catch(err){
        console.log(err);
        return err.status;
    }
}

//Функция отправки запроса для получения всех осмотров пациента по истории болезни.
export async function getExaminationsInfoRequest(historyId) {
    try{
        const response = await axios.get(`${basicUrl}/History/${historyId}/Examination`, {
            headers: { "Authorization": `Bearer ${getLsToken()}` }
        });
        console.log(response)
        return response;
    }catch(err){
        console.log(err);
        return err.status;
    }
}