import React from "react";
import AuthContextProvider from "./context/AuthContext";
import { ToastContainer } from "react-toastify";
import AppRouter from "./router/AppRouter";

const App = () => {
  return (
    <div>
      <AuthContextProvider>
        <AppRouter />
        <ToastContainer />
      </AuthContextProvider>
      
    </div>
  );
};

export default App;
