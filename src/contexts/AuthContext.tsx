import React, { useState, Dispatch, SetStateAction } from 'react';

export type AuthContextDefaultValueType = {
  token: string;
  setToken: Dispatch<SetStateAction<string>>;
  roles: string;
  setRoles: Dispatch<SetStateAction<string>>;
  username: string;
  setUsername: Dispatch<SetStateAction<string>>;
  permissions: string;
  setPermissions: Dispatch<SetStateAction<string>>;
};

const defaultContextValue: AuthContextDefaultValueType = {
  token: localStorage.getItem('jwtSecurityToken') || '',
  setToken: () => localStorage.getItem('jwtSecurityToken') || '',
  roles: localStorage.getItem('roles') || '',
  setRoles: () => localStorage.getItem('roles') || '',
  username: localStorage.getItem('username') || '',
  setUsername: () => localStorage.getItem('username') || '',
  permissions: localStorage.getItem('permissions') || '',
  setPermissions: () => localStorage.getItem('permissions') || '',
};

export const AuthContext = React.createContext(defaultContextValue);

const AuthProvider = ({ children }: any): JSX.Element => {
  const [token, setToken] = useState(
    localStorage.getItem('jwtSecurityToken') || '',
  );
  const [roles, setRoles] = useState(localStorage.getItem('roles') || '');
  const [username, setUsername] = useState(
    localStorage.getItem('username') || '',
  );
  const [permissions, setPermissions] = useState(
    localStorage.getItem('permissions') || '',
  );

  return (
    <AuthContext.Provider
      value={{
        token,
        setToken,
        roles,
        setRoles,
        username,
        setUsername,
        permissions,
        setPermissions,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
