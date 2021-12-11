import { LOGIN } from '../types/user';

const useReducer = (state = {}, { payload, type }) => {
  switch (type) {
    case LOGIN:
      return {
        ...payload
      };
    default:
      return state;
  }
};

export default useReducer;
