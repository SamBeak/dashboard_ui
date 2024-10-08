import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/style.scss";
import WrapComponents from "./components/WrapComponents";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "./theme";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
    <React.StrictMode>
        <ChakraProvider theme={theme}>
            <WrapComponents />
        </ChakraProvider>
    </React.StrictMode>
);
