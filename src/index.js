import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./Redux/Store/store";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* redux store */}
    <BrowserRouter>
      <Provider store={store}>
        {/* for toast notification */}
        <ToastContainer />
        {/* rendering the app */}
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
