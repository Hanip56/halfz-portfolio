import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";

const contextState = createContext({
  isViewed: undefined,
});

export const ContextProvider = ({ children }) => {
  const [isViewed, setIsViewed] = useState(0);

  return (
    <contextState.Provider value={{ isViewed, setIsViewed }}>
      {children}
    </contextState.Provider>
  );
};

export const useStateContext = () => useContext(contextState);
