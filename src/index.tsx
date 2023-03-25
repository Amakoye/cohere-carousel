import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App";
import { store } from "./store";
import "./styles/Style.css";

const RootApp = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <RootApp />
  </React.StrictMode>
);
