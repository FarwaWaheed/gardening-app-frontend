import axios from 'axios';

const BASE_URL = `${import.meta.env.VITE_API_URL}/plant`;

export const addPlantRecord = async (userId, plantId, image, height, notes) => {
    try {
        const formData = new FormData();
        formData.append("image", image); // `image` should be a File object from input
        formData.append("height", height);
        formData.append("observationNote", notes);
        const response = await axios.post(
            `${BASE_URL}/addPlantRecord/${userId}/${plantId}`,
            formData,
            {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            }
        );
        return response.data;
    } catch (error) {
        throw error.response?.data || error;
    }
};

export const getPlantRecord = async (recordId) => {
    try {
        const response = await axios.get(`${BASE_URL}/getPlantRecord/${recordId}`);
        return response.data;
    } catch (error) {
        throw error.response?.data || error;
    }
}

export const getAllPlantRecords = async (userId, plantId) => {
    try {
        console.log("userid: ", userId);
        console.log("plantid: ", plantId);
        const response = await axios.get(`${BASE_URL}/getPlantRecords/all/${userId}/${plantId}`);
        return response.data.plantRecords
    } catch (error) {
        throw error.response?.data.plantRecords || error;
    }
}

export const updatePlantRecord = async (userId, plantId, height, notes, image) => {
    try {
        const formData = new FormData();
        formData.append("height", height);
        formData.append("observationNote", notes);
        if (image) {
            formData.append("image", image);
        }

        const response = await axios.put(
            `${BASE_URL}/updatePlantRecord/${userId}/${plantId}`,
            formData,
            {
                headers: {
                    "Content-Type": "multipart/form-data",
                }
            }
        );
        return response.data;
    } catch (error) {
        throw error.response?.data || error;
    }
};


export const deletePlantRecord = async (userId, plantId) => {
    try {
        const response = await axios.delete(`${BASE_URL}/deletePlant/${userId}/${plantId}`);
        return response.data;
    } catch (error) {
        throw error.response?.data || error;
    }
}