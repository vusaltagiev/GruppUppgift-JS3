import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./style.scss";
import { BrowserRouter } from "react-router-dom";
import ProductContextProvider from "./contexts/ProductContext";
import { AuthContextProvider } from "./contexts/AuthContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ProductContextProvider>
        <AuthContextProvider>
          <App />
        </AuthContextProvider>
      </ProductContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
