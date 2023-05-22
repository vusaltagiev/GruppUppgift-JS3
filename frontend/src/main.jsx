import { Provider } from "react-redux";
import { store } from "../src/components/CartRelated/store";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./style.scss";
import { BrowserRouter } from "react-router-dom";
import ProductContextProvider from "./contexts/ProductContext";
import { AuthContextProvider } from "./contexts/AuthContext";
import { AuthContextProvider } from "./contexts/AuthContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <ProductContextProvider>
          <AuthContextProvider>
            <App />
          </AuthContextProvider>
        </ProductContextProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
