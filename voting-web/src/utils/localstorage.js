const getUserFromToken = () => {
  const token = localStorage.getItem('token');
  if (token) {
    try {
      const user = token.split('.')[1];
      return atob(user);
    } catch (err) {
      return null;
    }
  }
  return null;
};
export default getUserFromToken;
