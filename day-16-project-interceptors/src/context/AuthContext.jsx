import { createContext, useState } from 'react';

// eslint-disable-next-line react-refresh/only-export-components
export const Auth = createContext();

export const AuthProvider = ({ children }) => {
  const [registeredUser, setRegisteredUser] = useState(JSON.parse(localStorage.getItem('registeredUser')) || []);
  const [loginUser, setLoginUser] = useState(JSON.parse(localStorage.getItem('loginUser')) || null);


  return (
    <Auth.Provider value={{registeredUser, loginUser, setRegisteredUser, setLoginUser}}>
      {children}
    </Auth.Provider>
  );
};
