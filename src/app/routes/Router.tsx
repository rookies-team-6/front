// router 설정해두는 파일입니다.

import { createBrowserRouter } from "react-router";
import LoginPage from  "@pages/LoginPage/LoginPage"
import HomePage from "@pages/HomePage/HomePage"
import RegisterPage from "@pages/RegisterPage/RegisterPage"
import CheckEmployeePage from "@pages/CheckEmployeePage/CheckEmployeePage";
import NotFoundPage from "@pages/404Page/404Page";
import AnswerDetailPage from "@pages/AnswerDetailPage/AnswerDetailPage";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <LoginPage /> ,
        errorElement: <NotFoundPage />
    },
    {
      path: "/home",
      element: <HomePage />  
    },
    {
      path: "/register",
      element: <RegisterPage />  
    },
    {
      path: "/checkemplnum",
      element: <CheckEmployeePage />  
    },
    {
      path: "/answerdetail",
      element: <AnswerDetailPage />  
    }
]);
