// router 설정해두는 파일입니다.

import { createBrowserRouter } from "react-router";
import LoginPage from  "@pages/LoginPage/LoginPage"
import HomePage from "@pages/HomePage/HomePage"
import RegisterPage from "@pages/RegisterPage/RegisterPage"

export const router = createBrowserRouter([
    {
        path: "/",
        element: <p>test</p>
    },
    {
      path: "/home",
      element: <HomePage />  
    }
]);
