import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/style.scss";
import WrapComponents from "./components/WrapComponents";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
    <React.StrictMode>
        <WrapComponents />
    </React.StrictMode>
);
