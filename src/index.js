import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";
import App from "./App";
import theme from "./utils/theme";
import GlobalStyles from './utils/global';
import  {BrowserRouter }  from "react-router-dom";

ReactDOM.render(
    <BrowserRouter >
        <ThemeProvider theme={theme}>
            <>
                <App />
                <GlobalStyles></GlobalStyles>
            </>
        </ThemeProvider>
    </BrowserRouter >

    , document.getElementById("root"));