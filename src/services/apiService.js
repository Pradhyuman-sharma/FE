import { axiosInstance } from "./axiosConfig";

// register user
export const registerUser = (data) => {
    try {
      return axiosInstance
        .post( "auth/register",data, {
          headers: {
            'Content-Type': 'application/json',
          },
        })
        .then(function (response) {
          return response.data;
        })
        .then((response) => {
          return response;
        })
        .catch((err) => {
            
        return err.response.data;
        });
    } catch (err) {}
  };

  // login user
export const loginUser = (data) => {
    try {
      return axiosInstance
        .post( "auth/login",data, {
          headers: {
            'Content-Type': 'application/json',
          },
        })
        .then(function (response) {
          return response.data;
        })
        .then((response) => {
          return response;
        })
        .catch((err) => {
          return err.response.data;
        });
    } catch (err) {}
  };
  


// get sleep form data
export const getSleepFormData = (token) => {
    try {
      return axiosInstance
        .get( "sleepForm/getFormData", {
          headers: {
            'access-token': token,
            'Content-Type': 'application/json',
          },
        })
        .then(function (response) {
          return response.data;
        })
        .then((response) => {
          return response;
        })
        .catch((err) => {
          return err.response.data;
        });
    } catch (err) {}
  };

  // update sleep form data
export const updateSleepFormData = (token,data) => {
    try {
      return axiosInstance
        .post( "sleepForm/update",data, {
          headers: {
            'access-token': token,
            'Content-Type': 'application/json',
          },
        })
        .then(function (response) {
          return response.data;
        })
        .then((response) => {
          return response;
        })
        .catch((err) => {
          return err.response.data;
        });
    } catch (err) {}
  };
  