import axios from 'axios';

// ************ localhost ************
//  const BASE_URL = `http://localhost:8000/`;

const BASE_URL= `https://wysa-sleep-form-api.onrender.com`;

const headers = {
  // Accept: 'application/json',
  'Content-Type': 'application/json',
};


export const axiosInstance = axios.create({
  baseURL: `${BASE_URL}api/`,
  headers: headers,
  timeout: 120000,
});


