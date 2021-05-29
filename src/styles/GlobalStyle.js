import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

export default createGlobalStyle`
@import url(https://cdn.rawgit.com/kattergil/NotoSerifKR-Web/76eb9ebf/stylesheet/NotoSerif-Web.css);
@import url('https://fonts.googleapis.com/css?family=Nanum+Myeongjo&display=swap');
    ${reset};
    html,
    body{
        font-size: 10px;
        font-family: 'Spoqa Han Sans Neo','sans-serif';
    }

    * {
        box-sizing: border-box;
    }
`;
