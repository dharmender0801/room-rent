import { useState } from "react"
import FileUpload from "./FileUpload";
import axios from "axios";
import { APICALL } from "../API-COM/ApiCall";
import { toast, ToastContainer } from "react-toastify";

const AddProp = () => {
    const [className, setClass] = useState('btn-bdr');
    const uploadFileToAPI = async (file: File) => {
        const formData = new FormData();
        formData.append('file', file);
        try {
            const res = await APICALL.uploadFile(formData);

            if (res.status === 200) {
                toast.success('File uploaded successfully!');
            } else {
                toast.error(`Upload failed! Status: ${res.status}`);
            }
        } catch (err) {
            toast.error('Error uploading file!');
            console.error(err);
        }

    };

    return (
        <>
            <div className="justify-center">
                <FileUpload onFileUpload={uploadFileToAPI} />
            </div>
        </>
    )
}
export default AddProp;