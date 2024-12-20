import axios from "axios";
import {getLsToken} from "./localStorageFunctions.jsx";
import {basicUrl} from "./url.js";

//Функция отправки запроса для поиска пациентов по фамилии.
export async function searchPatientsRequest(searchString) {
    try{
        const response = await axios.get(`${basicUrl}/Patient/Fio/${searchString}`, {
            headers: { "Authorization": `Bearer ${getLsToken()}` }
        });
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
        return response.data;
    }catch(err){
        console.log(err);
        return err.status;
    }
}

//Функция отправки запроса для создания истории болезни пациента.
export async function historyAddRequest(patientId, requestData) {
    try{
        const response = await axios.post(`${basicUrl}/Patient/${patientId}/History`, requestData, {
            headers: { "Authorization": `Bearer ${getLsToken()}` }
        });
        return response.status;
    }catch(err){
        console.log(err);
        return err.status;
    }
}

//Функция отправки запроса для изменения истории болезни пациента.
export async function historyEditRequest(historyId, requestData) {
    try{
        const response = await axios.put(`${basicUrl}/History/${historyId}`, requestData, {
            headers: { "Authorization": `Bearer ${getLsToken()}` }
        });
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
        return response;
    }catch(err){
        console.log(err);
        return err.status;
    }
}

//Функция отправки запроса для получения осмотра пациента по id.
export async function getExaminationInfoRequest(examinationId) {
    try{
        const response = await axios.get(`${basicUrl}/Examination/${examinationId}`, {
            headers: { "Authorization": `Bearer ${getLsToken()}` }
        });
        return response;
    }catch(err){
        console.log(err);
        return err.status;
    }
}

//Функция отправки запроса для создания осмотра для истории болезни пациента.
export async function examinationAddRequest(historyId, requestData) {
    try{
        const response = await axios.post(`${basicUrl}/History/${historyId}/Examination`, requestData, {
            headers: { "Authorization": `Bearer ${getLsToken()}` }
        });
        return response.status;
    }catch(err){
        console.log(err);
        return err.status;
    }
}

//Функция отправки запроса для удаления осмотра по истории болезни пациента.
export async function examinationDeleteRequest(examinationId) {
    try{
        const response = await axios.delete(`${basicUrl}/Examination/${examinationId}`,{
            headers: { "Authorization": `Bearer ${getLsToken()}` }
        });
        return response.status;
    }catch(err){
        console.log(err);
        return err.status;
    }
}

//Функция отправки запроса для изменения истории болезни пациента.
export async function examinationEditRequest(examinationId, requestData) {
    try{
        const response = await axios.put(`${basicUrl}/Examination/${examinationId}`, requestData, {
            headers: { "Authorization": `Bearer ${getLsToken()}` }
        });
        return response.status;
    }catch(err){
        return err.status;
    }
}

//Функция отправки запроса для получения всех назначений пациента по истории болезни.
export async function appointmentInfoRequestHistory(historyId) {
    try{
        const response = await axios.get(`${basicUrl}/History/${historyId}/Appointment`, {
            headers: { "Authorization": `Bearer ${getLsToken()}` }
        });
        return response;
    }catch(err){
        return err.status;
    }
}

//Функция отправки запроса для получения всех назначений пациента по истории осмотру.
export async function appointmentInfoRequestExamination(examinationId) {
    try{
        const response = await axios.get(`${basicUrl}/Examination/${examinationId}/Appointment`, {
            headers: { "Authorization": `Bearer ${getLsToken()}` }
        });
        return response;
    }catch(err){
        return err.status;
    }
}

//Функция отправки запроса для создания пациента.
export async function patientAddRequest(requestData) {
    try{
        const response = await axios.post(`${basicUrl}/Patient`, requestData, {
            headers: { "Authorization": `Bearer ${getLsToken()}` }
        });
        return response.status;
    }catch(err){
        console.log(err);
        return err.status;
    }
}

//Функция отправки запроса для создания назначения по осмотру пациента.
export async function appointmentAddRequest(examinationId, requestData) {
    try{
        const response = await axios.post(`${basicUrl}/Examination/${examinationId}/Appointment`, requestData, {
            headers: { "Authorization": `Bearer ${getLsToken()}` }
        });
        return response.status;
    }catch(err){
        console.log(err);
        return err.status;
    }
}

//Функция отправки запроса для загрузки анализа по назначению пациента.
export async function getAnalysisRequest(appointmentId) {
    try{
        const response = await axios.get(`${basicUrl}/Appointment/${appointmentId}/Analysis`, {
            headers: { "Authorization": `Bearer ${getLsToken()}` }
        });
        return response.data;
    }catch(err){
        console.log(err);
        return err.status;
    }
}

//Функция отправки запроса для добавления анализа по назначению пациента.
export async function analysisAddRequest(appointmentId, requestData) {
    try{
        const response = await axios.post(`${basicUrl}/Appointment/${appointmentId}/Analysis`, requestData, {
            headers: { "Authorization": `Bearer ${getLsToken()}` }
        });
        return response.status;
    }catch(err){
        console.log(err);
        return err.status;
    }
}

//Функция отправки запроса для пометки выполнения назначения пациента.
export async function postMarkRequest(appointmentId) {
    try{
        const response = await axios.post(`${basicUrl}/Appointment/${appointmentId}/Mark`, {}, {
            headers: { "Authorization": `Bearer ${getLsToken()}` }
        });
        console.log(response);
        return response.status;
    }catch(err){
        console.log(err);
        return err.status;
    }
}

//Функция отправки запроса для получения информации о назначения пациента.
export async function getAppointmentIfoRequest(appointmentId) {
    try{
        const response = await axios.get(`${basicUrl}/Appointment/${appointmentId}`, {
            headers: { "Authorization": `Bearer ${getLsToken()}` }
        });
        return response.data;
    }catch(err){
        console.log(err);
        return err.status;
    }
}