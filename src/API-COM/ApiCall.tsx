import axios, { AxiosRequestConfig } from 'axios';
import { APICONFIG } from './ApiConfig';

const Login = (reqBody: any) => {
    return axios.post(APICONFIG.LoginAPI, reqBody);
}

const getPageData = (body: any) => {
    const config = {
        headers: {
            Authorization: localStorage.getItem('token'),
            'Content-Type': 'application/json',
        },
    };
    return axios.post(APICONFIG.getPageAPI, body, config);
}
const getUserData = (body: any) => {
    const config = {
        headers: {
            Authorization: localStorage.getItem('token'),
            'Content-Type': 'application/json',
        },
    };
    return axios.post(APICONFIG.getUserAPI, body, config);
}

const uploadFile = (body: any) => {
    const config = {
        headers: {
            Authorization: localStorage.getItem('token'),
            'Content-Type': 'multipart/form-data',
        },
    };
    return axios.post(APICONFIG.uploadFile, body, config);
}

const sendAccess = (body: any) => {
    const config = {
        headers: {
            Authorization: localStorage.getItem('token'),
            'Content-Type': 'application/json',
        },
    };
    return axios.post(APICONFIG.accessSendAPi, body, config);
}


export const APICALL = {
    Login,
    getPageData,
    uploadFile,
    getUserData,
    sendAccess
}