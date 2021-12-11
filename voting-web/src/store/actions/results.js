/* eslint-disable indent */
import axios from 'axios';

// eslint-disable-next-line import/prefer-default-export
export const publishResults = (status) => async (dispatch) => {
    try {
        await axios.post('/candidates/publish', {status}, {
            headers: {
                Authorizatin: `Bearer ${localStorage.getItem('token')}`
            }
        });
        dispatch({ type: 'PUBLISH_RESULTS' });

    } catch (error) {
        const errorMessage = error.response.data?.message || error;
        dispatch({
            type: 'FAILED_PUBLISH_RESULTS',
            payload: error.rsponse || error
        });
        throw errorMessage;
    }
};
