const report = (state = [], { payload, type }) => {
  switch (type) {
    case 'GET_REPORT':
      return payload;
    default:
      return state;
  }
};
    
export default report;
