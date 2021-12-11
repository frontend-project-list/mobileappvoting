const results = (state = [], { payload, type }) => {
  switch (type) {
    case 'FETCHED_RESULTS':
      return payload;
    default:
      return state;
  }
};
  
export default results;
