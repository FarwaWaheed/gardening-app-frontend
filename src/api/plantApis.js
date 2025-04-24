import axios from 'axios';

const BASE_URL = 'http://localhost:5000/plant';

// Add a new plant
export const addPlant = (plantData) => {
  return axios.post(`${BASE_URL}/addplant`, plantData);
};

// Get all plants
export const getAllPlants = () => {
  return axios.get(`${BASE_URL}/getplants/all`);
};

// Get plant by ID
export const getPlantById = (id) => {
  return axios.get(`${BASE_URL}/getplant/${id}`);
};

// Update a plant
export const updatePlant = (id, updatedData) => {
  return axios.put(`${BASE_URL}/update/${id}`, updatedData);
};

// Delete a plant
export const deletePlant = (id) => {
  return axios.delete(`${BASE_URL}/delete/${id}`);
};

// Search plants by query
export const searchPlants = (query) => {
  return axios.get(`${BASE_URL}/search`, { params: { query } });
};

// Get plants by category
export const getPlantsByCategory = (category) => {
  return axios.get(`${BASE_URL}/category/${category}`);
};

// Get plant suggestions 
export const suggestPlants = (plantData) => {
  return axios.post(`${BASE_URL}/suggestions`, plantData);
};
