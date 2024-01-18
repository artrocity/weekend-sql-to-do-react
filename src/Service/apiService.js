// Import Modules
import axios from 'axios';

// Assign API URL
const API_BASE_URL = 'http://localhost:3000';

// GET ROUTE
export const fetchTasks = () => {
    return axios.get(`${API_BASE_URL}/todo`)
        .then(response => {
            return response.data;
        })
        .catch(error => {
            console.error('Fetch tasks failed:', error);
            return [];
        });
};

// POST ROUTE
export const addTask = (newTask) => {
    return axios.post(`${API_BASE_URL}/todo`, newTask);
};

// DELETE ROUTE
export const deleteTask = (taskID) => {
    return axios.delete(`${API_BASE_URL}/todo/${taskID}`);
}