// 전역 CSS 설정 파일입니다.
// 태그,html 등에 공통적인 디자인이 필요할 때 해당 파일에서 수정하시면 됩니다.

import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
    ${reset}

    a {
        text-decoration: none;
    }

  * {
        box-sizing: border-box;
    }

    button{
        cursor:pointer;
    }
`;

export default GlobalStyle;
