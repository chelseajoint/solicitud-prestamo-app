// src/services/api.js
import axios from 'axios';

const BASE_URL = 'https://api7.cloudframework.io/recruitment/fullstack';

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    'X-WEB-KEY': 'Development',
  },
});

const getUserData = async (userId) => {
  try {
    const response = await api.get(`/users?id=${userId}`);
    return response.data.data;
  } catch (error) {
    throw error.response ? error.response.data : 'Error de red';
  }
};

const submitLoanData = async (userId, loanData) => {
  try {
    const response = await api.post(`/users/${userId}`, loanData);
    return response.data.data;
  } catch (error) {
    throw error.response ? error.response.data : 'Error de red';
  }
};

export { getUserData, submitLoanData };
