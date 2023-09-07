import React from "react";
import ReactDOM from "react-dom/client";
import AppProvider from "./App.provider";
import "./index.css";
import { ToastContainer } from "react-toastify";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <AppProvider />
    <ToastContainer />
  </BrowserRouter>
);
