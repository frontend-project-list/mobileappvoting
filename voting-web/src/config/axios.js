import axios from 'axios';

const axiosConfig = () => {
  axios.defaults.baseURL = process.env.REACT_APP_API_URL;
  axios.interceptors.response.use(
    (response) =>
      new Promise((resolve) => {
        resolve(response);
      }),
    (error) => {
      if (error?.response?.status === 403) {
        localStorage.removeItem('token');
        window.location = '/login';
      } 
      return new Promise((resolve, reject) => {
        reject(error);
      });
    }
  );
};

export default axiosConfig;
