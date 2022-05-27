import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Compose from "./components/Compose";
import ReduxProvider from "./providers/ReduxProvider";
import store from "./Redux/store";
import { fetchproduct } from "./Redux/action";
import "./fonts/fonts.css";
import "./style/style.scss";

store.dispatch(fetchproduct);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <Compose components={[React.StrictMode, ReduxProvider]}>
        <App />
    </Compose>
);
