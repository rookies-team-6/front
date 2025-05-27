import { createGlobalStyle } from "styled-components";
import DMSans from "@shared/assets/fonts/DMSans.ttf";

const GlobalFonts = createGlobalStyle`
    @font-face{
        font-family: 'DMSans';
        src: local("DMSans"), url(${DMSans}) format('ttf');
        font-weight: normal;
    }
`;

export default GlobalFonts;