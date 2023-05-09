import React from "react";
import ReactDOM from "react-dom";
import { ChakraProvider } from "@chakra-ui/react";
import AuthContextProvider from "./Context/AuthContextProvider";
import App from "./App";
import customTheme from "./CustomThemem/Theme";
import { BrowserRouter } from "react-router-dom";
const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={customTheme}>
      <AuthContextProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </AuthContextProvider>
    </ChakraProvider>
  </React.StrictMode>,
  rootElement
);
