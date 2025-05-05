import axios from 'axios';
import {url} from './apiInstance.js';
const BASE_URL = `${import.meta.env.VITE_API_URL}/garden`;

// Add Plant to My Garden
export const addPlant = async (userId, plantId) => {
    try {
        console.log("userid: ", userId)
        const response = await axios.post(`${BASE_URL}/addPlant/${userId}`, {
            "plantId": plantId
        });
        return response.data;
    } catch (error) {
        throw error.response?.data || error;
    }
};

export const getGardenPlants = async (userId) => {
    try {
        const response = await axios.get(`${BASE_URL}/getPlants/all/${userId}`);
        return response.data;
    } catch (error) {
        throw error.response?.data || error;
    }
}

export const deleteGardenPlants = async (userId, plantId) => {
    try {
        const response = await axios.delete(`${BASE_URL}/deletePlant/${userId}/${plantId}`, {
            "plantId": plantId
        });
        return response.data;
    } catch (error) {
        throw error.response?.data || error;
    }
}