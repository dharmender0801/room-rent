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


export const APICALL = {
    Login,
    getPageData,
}