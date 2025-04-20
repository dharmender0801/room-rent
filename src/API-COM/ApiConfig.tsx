
export const Domain = "http://localhost:8080"

const LoginAPI = `${Domain}/api/auth/v1/login`;
const getPageAPI = `${Domain}/api/upload/v1/list`
const getUserAPI = `${Domain}/api/auth/v1/list`
const uploadFile = `${Domain}/api/upload/uploadFiles`
const accessSendAPi = `${Domain}/api/upload/v1/access`
const addCommentToFile = `${Domain}/api/upload/v1/addComment`
const Signup = `${Domain}/api/auth/v1/signup`
const Reset = `${Domain}/api/auth/v1/reset`
const updatePassword = `${Domain}/api/auth/v1/updatePassword`

export const APICONFIG = {
    LoginAPI,
    getPageAPI,
    uploadFile,
    getUserAPI,
    accessSendAPi,
    addCommentToFile,
    Signup,
    Reset,
    updatePassword
}