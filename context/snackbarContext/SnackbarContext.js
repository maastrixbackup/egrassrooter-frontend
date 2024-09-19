import React, { createContext, useContext, useState } from "react";

const SnackbarContext = createContext({
  type: "",
  message: "",
  loading: false,
  setType: () => {},
  setMessage: () => {},
  setLoading: () => {},
});
export const useSnackBarContext = () => {
  return useContext(SnackbarContext);
};

function SnackbarContextProvider({ children }) {
  const [type, setType] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("Test Message");

  const value = {
    type,
    setType,
    message,
    setMessage,
    loading,
    setLoading,
  };
  return (
    <SnackbarContext.Provider value={value}>
      {children}
    </SnackbarContext.Provider>
  );
}

export default SnackbarContextProvider;
