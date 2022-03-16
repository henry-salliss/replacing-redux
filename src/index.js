import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import ProductProvider from "./context/product-context";

// redux imports

// import { Provider } from "react-redux";
// import { combineReducers, createStore } from "redux";

import "./index.css";
import App from "./App";
// import productReducer from "./store/reducers/products";

ReactDOM.render(
  <ProductProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ProductProvider>,
  document.getElementById("root")
);
