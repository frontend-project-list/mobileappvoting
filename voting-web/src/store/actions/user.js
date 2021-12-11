/* eslint-disable import/prefer-default-export */
import axios from 'axios';
import { LOGIN, LOGIN_FAILED } from '../types/user';

export const login = (user) => async (dispatch) => {
  try {
    const { data } = await axios.post('/arbitration', user);
    dispatch({
      type: LOGIN,
      payload: data.data[0]
    });
    localStorage.setItem('token', data.data.token);
  } catch (error) {
    dispatch({
      type: LOGIN_FAILED,
      payload: error.rsponse || error
    });
    throw error;
  }
};

export const importStudents = (students) => async (dispatch) => {
  try {
    const { data } = await axios.post('/students/import', students, {
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorizatin: `Bearer ${localStorage.getItem('token')}`
      }
    });
    dispatch({
      type: 'UPLOADED_OK',
      payload: data.data[0]
    });
    localStorage.setItem('token', data.data.token);
  } catch (error) {
    const errorMessage = error.response.data.message || error;
    dispatch({
      type: 'ADDING_FAILED',
      payload: error.rsponse || error
    });
    throw errorMessage;
  }
};

export const getAllStudents = () => async (dispatch) => {
  try {
    const { data } = await axios.get('/students');
    dispatch({
      type: 'FETCHED_STUDENTS',
      payload: data.data
    });
  } catch (error) {
    const errorMessage = error.response?.data.message || error;
    dispatch({
      type: 'FAILED_FETCHING_STUDENTS',
      payload: error.rsponse || error
    });
    throw errorMessage;
  }
};

export const getAllResults = () => async (dispatch) => {
  try {
    const { data } = await axios.get('/candidates/results', {
      headers: {
        Authorizatin: `Bearer ${localStorage.getItem('token')}`
      }
    });
    dispatch({
      type: 'FETCHED_RESULTS',
      payload: data.data
    });
  } catch (error) {
    const errorMessage = error.response.data?.message || error;
    dispatch({
      type: 'FAILED_FETCHED_RESULTS',
      payload: error.rsponse || error
    });
    throw errorMessage;
  }
};
