import React from "react";
import App from "../App";
import { store }  from "../../redux";
import { Provider } from "react-redux";

const Root =() => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

export default Root;
