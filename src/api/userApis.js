import api from './apiInstance';
import axios from 'axios';

const BASE_URL = 'http://localhost:5000/user';

// Sign Up
export const signUpUser = async (userData) => {
  try {
    const response = await api.post(`${BASE_URL}/signUp`, userData);
    console.log(response);
    return response.data;
  } catch (error) {
    throw error.response?.data || error;
  }
};

// Log In
export const logInUser = async (credentials) => {
  try {
    const response = await api.post(`${BASE_URL}/logIn`, credentials);
    return response.data;
  } catch (error) {
    throw error.response?.data || error;
  }
};

// Update User
export const updateUser = async (id, updatedData) => {
  try {
    const response = await api.post(`${BASE_URL}/updateUser/${id}`, updatedData);
    return response.data;
  } catch (error) {
    throw error.response?.data || error;
  }
};

//getUserByID

export const getUserById = async (id) => {
  try {
    const response = await api.get(`${BASE_URL}/get/${id}`);
    return response.data;
  } catch (error) {
    throw error.response?.data || error;
  }
};

//getAllUsers

export const getAllUsers = async () => {
  try {
    const response = await api.get(`${BASE_URL}/getAll`);
    return response.data;  // Axios response data is available in `response.data`
  } catch (error) {
    throw new Error('Failed to fetch users: ' + error.message);
  }
};

//deleteUser

export const deleteUser = async (userId) => {
  try {
    const response = await api.delete(`${BASE_URL}/deleteUser/${userId}`);
    return response.data;  // You can return some confirmation data if needed
  } catch (error) {
    throw new Error('Failed to delete user: ' + error.message);
  }
};