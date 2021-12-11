

import axios from "axios"
import { API_URL } from "../../utils/api";



export const getAllPositions = () => async(dispatch)=>{

    try {
        const res = await axios.get(`${API_URL}/positions`);
        console.log(res.data);
        dispatch({
            type: "GET_ALL_POSITIONS",
            payload: res.data.data
        });
        return res.data.data;
    } catch (error) {
        dispatch({
            type: "GET_ALL_POSITIONS_ERROR",
            payload: error.response?.data
        });
        throw error.response?.data?.message;
    }
}

