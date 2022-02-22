import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store/store";
import ScrollToTop from "./components/common/ScrollToTop";
import { ToastContainer } from "react-toastify";
import "./i18n";

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <React.StrictMode>
        <ToastContainer autoClose={2000} />
        <ScrollToTop />
        <App />
      </React.StrictMode>
    </Router>
  </Provider>,
  document.getElementById("root"),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
