

import axios from "axios"
import { API_URL } from "../../utils/api";
import { storeData,getData } from "../../utils/storage";



export const userLogin = (user) => async(dispatch)=>{

    console.log(API_URL)
    try {
        const res = await axios.post(`${API_URL}/students/login`, user);
       await storeData("token",res.data.data.token);
      return dispatch({
        type: "USER_LOGIN",
        payload: res.data.data
    });
    } catch (error) {
        dispatch({
            type: "USER_LOGIN_ERROR",
            payload: error.response?.data || error.message
        });
        throw error.response?.data?.message || error.message;
    }
}

export const candidateRegister = (data) => async(dispatch)=>{

   const token = await getData("token");
    try {
        const res = await axios.post(`${API_URL}/candidates/register`,data, {
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'multipart/form-data',
              },
        });
        console.log(res.data);
        return dispatch({
            type: "REGISTERED",
            payload: res.data.data
        });
    } catch (error) {
        dispatch({
            type: "REGISTERED_FAILED",
            payload: error.response?.data || error.message
        });
        throw error.response?.data?.message || error.message;
    }
}


export const addMyVote = (candidate,position) => async(dispatch)=>{
    const token = await getData("token");
    try {
        const res = await axios.post(`${API_URL}/candidates/vote/${candidate}/${position}`,{},{
            headers: {
                Authorization: `Bearer ${token}`,
            }
        });
        return dispatch({
            type: "ADD_MY_VOTE",
            payload: res.data.data
        });
    } catch (error) {
        dispatch({
            type: "ADD_MY_VOTE_FAILED",
            payload: error.response?.data || error.message
        });
        throw error.response?.data?.message || error.message;
    }
}