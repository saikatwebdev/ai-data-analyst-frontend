import axios from "axios"


const API_BASE_URL = "http://localhost:8000";

const api = axios.create({
    baseURL:API_BASE_URL,
});

export const uploadDataset = async (file) =>{
    const formData = new FormData();

    formData.append("file", file);

    const response = await api.post(
        "/datasets/upload",
        formData
    );

    return response.data
};

export default api