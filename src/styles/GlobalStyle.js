import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export default createGlobalStyle`
    ${reset};
    html,
    body{
        font-size: 10px;
        font-family: 'Spoqa Han Sans Neo','sans-serif';
        letter-spacing: -0.02em;
    }

    * {
        box-sizing: border-box;
    }
`;
