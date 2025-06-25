import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "App";

// Context Provider
import { SoftUIControllerProvider } from "context";
import { AuthProvider } from "context/auth/AuthContext";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <AuthProvider>
      <SoftUIControllerProvider>
        <App />
      </SoftUIControllerProvider>
    </AuthProvider>
  </BrowserRouter>
);