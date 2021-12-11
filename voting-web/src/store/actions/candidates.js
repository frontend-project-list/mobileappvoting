/* eslint-disable import/prefer-default-export */
import axios from 'axios';
import { FAILED_GET_ALL_CANDIDATES, GET_ALL_CANDIDATES } from '../types/user';

export const getAllCandidates = () => async (dispatch) => {
  try {
    const { data } = await axios.get('/candidates/all', {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      }
    });
    dispatch({
      type: GET_ALL_CANDIDATES,
      payload: data.data[0],
    });
    if (data.data[0] && data.data[0][0].ispublished) {
      dispatch({ type: 'PUBLISH_RESULTS' });
    }

  } catch (error) {
    dispatch({
      type: FAILED_GET_ALL_CANDIDATES,
      payload: error.response || error
    });
    throw error;
  }
};

export const approve = (id) => async (dispatch) => {
  try {
    const { data } = await axios.get(`/arbitration/approve/${id}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      }
    });
    dispatch({
      type: 'CANDIDATE_APPROVED',
      payload: data.data
    });
  } catch (error) {
    dispatch({
      type: 'FAILED_APPROVE_CANDIDATES',
      payload: error.response || error
    });
    throw error;
  }
};

export const getReport = () => async (dispatch) => {
  try {
    const { data } = await axios.get('/candidates/report', {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      }
    });
    dispatch({
      type: 'GET_REPORT',
      payload: data.data
    });
  } catch (error) {
    dispatch({
      type: 'GET_REPORT_FAILED',
      payload: error.response || error
    });
    throw error;
  }
};
