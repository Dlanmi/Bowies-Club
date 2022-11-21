import { createGlobalStyle } from "styled-components";
import "@fontsource/akaya-telivigala";
import "@fontsource/fuzzy-bubbles";

const GlobalStyles = createGlobalStyle`

    /* * {
        outline: 1px solid red !important;
    } */

    *,*::before,*::after{
        margin: 0;
        padding: 0;
    }

    body{
        font-family: "Fuzzy Bubbles", cursive;
        overflow-x: hidden;
    }

    h1,h2,h3,h4,h5,h6{
        margin: 0;
        padding: 0;
    }

    a {
        text-decoration: none;
        color: inherit;
    }
`;

export default GlobalStyles;
