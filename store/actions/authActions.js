// src/store/actions/authActions.js

export const login = (user) => ({
    type: 'LOGIN',
    payload: {
      user,
    },
  });
  
  export const logout = () => ({
    type: 'LOGOUT',
  });
  