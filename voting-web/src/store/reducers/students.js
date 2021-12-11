const students = (state = [], { payload, type }) => {
  switch (type) {
    case 'FETCHED_STUDENTS':
      return payload;
    default:
      return state;
  }
};

export default students;
