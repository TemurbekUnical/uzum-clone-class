import React from "react";
import AppContext, { useAppContext } from "./App.context";
import App from "./App";

const AppProvider = () => {
  const value = useAppContext();

  return (
    <AppContext.Provider value={value}>
      <App />
    </AppContext.Provider>
  );
};

export default AppProvider;
