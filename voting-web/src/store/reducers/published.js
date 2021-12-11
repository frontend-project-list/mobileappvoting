const results = (state = false, { type }) => {
  switch (type) {
    case 'PUBLISH_RESULTS':
      return !state;
    default:
      return state;
  }
};
    
export default results;
