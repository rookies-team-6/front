import { createGlobalStyle } from "styled-components";
import Gothic from "@shared/assets/fonts/NanumGothic-Regular.ttf";

const GlobalFonts = createGlobalStyle`
  @font-face {
    font-family: 'Gothic';
    src: url(${Gothic}) format('truetype');
    font-weight: normal;
    font-style: normal;
  }
`;

export default GlobalFonts;