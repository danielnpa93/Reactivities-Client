import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
    box-sizing:border-box;
    margin:0;
    padding:0;
}

html, body, #root{
    height:100%;
}

body{
    background-color:#f5f5f5;
    font-size:14px;
    font-family:Arial, Helvetica, sans-serif;
}

#root{
    display:grid;
    grid-template-rows:50px 1fr;
    grid-template-columns:2fr 1fr;
    grid-template-areas:"header header"
                        "dashboard details";
}

`;
