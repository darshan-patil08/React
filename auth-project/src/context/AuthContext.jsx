import { createContext, useState } from 'react';

// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [registeredUser, setRegisteredUser] = useState([]);
  const [loginUser, setLoginUser] = useState(null);

  return (
    <AuthContext.Provider value={{registeredUser, loginUser, setRegisteredUser, setLoginUser}}>
      {children}
    </AuthContext.Provider>
  );
};
