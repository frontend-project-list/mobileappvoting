import { GET_ALL_CANDIDATES } from '../types/user';

const candidatesReducer = (state = [], { payload, type }) => {
  switch (type) {
    case GET_ALL_CANDIDATES:
      return [...payload];
    default:
      return state;
  }
};

export default candidatesReducer;
