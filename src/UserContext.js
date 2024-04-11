import React, { createContext, useContext, useState } from "react";

// Step 1: Create the context outside of the provider component
export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  // Step 3: Use useState to create the userDetails state and its updater function
  const [userDetails, setUserDetails] = useState({});

  return (
    // Provide the state and updater function through the context
    <UserContext.Provider value={{ userDetails, setUserDetails }}>
      {children}
    </UserContext.Provider>
  );
};

// Custom hook to use the user context
export const useUser = () => useContext(UserContext);
