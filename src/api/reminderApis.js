import axios from 'axios';

const BASE_URL = "http://localhost:5000/user"

export const addReminder = async (userId, plantId, taskType, date, notes) => {
    try {
        const response = await axios.post(
            `${BASE_URL}/addReminder/${userId}/${plantId}`,
            {
                "taskType" :taskType,
                "date": date,
                "notes":notes,
            },
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

export const getReminders = async (userId) => {
    try {
        const response = await axios.get(`${BASE_URL}/getReminders/${userId}`);
        return response.data;
    } catch (error) {
        throw error.response?.data || error;
    }
}

export const updateReminder = async (reminderId, data) => {
    try {
        const response = await axios.put(
            `${BASE_URL}/updateReminder/${reminderId}`,
            {data},
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


export const deleteReminder = async (reminderId) => {
    try {
        const response = await axios.delete(`${BASE_URL}/deleteReminder/${reminderId}`);
        return response.message;
    } catch (error) {
        throw error.response?.message || error;
    }
}