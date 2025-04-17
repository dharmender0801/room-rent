
export const Domain = "http://localhost:8080"

const LoginAPI = `${Domain}/api/auth/v1/login`;
const getPageAPI = `${Domain}/api/upload/v1/list`
const getUserAPI = `${Domain}/api/auth/v1/list`
const uploadFile = `${Domain}/api/upload/uploadFiles`
const accessSendAPi = `${Domain}/api/upload/v1/access`

export const APICONFIG = {
    LoginAPI,
    getPageAPI,
    uploadFile,
    getUserAPI,
    accessSendAPi
}