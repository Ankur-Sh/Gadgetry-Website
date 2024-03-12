import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import "./index.css";
import App from "./App";
import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import cartReducer, { likeReducer } from "./reducers/gadgets";
const store = configureStore({
    reducer: {
        auth: authReducer,
        cart: cartReducer,
        like: likeReducer,
    },
});
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>
);
