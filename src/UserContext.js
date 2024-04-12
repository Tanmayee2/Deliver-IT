import React, { createContext, useContext, useState } from "react";
export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userDetails, setUserDetails] = useState(null);

  return (
    <UserContext.Provider value={{ userDetails, setUserDetails }}>
      {children}
    </UserContext.Provider>
  );
};

const useUserContext = () => useContext(UserContext);
export default useUserContext;
