// router 설정해두는 파일입니다.

import { createBrowserRouter } from "react-router";
import LoginPage from "@pages/LoginPage/LoginPage";
import HomePage from "@pages/HomePage/HomePage";
import RegisterPage from "@pages/RegisterPage/RegisterPage";
import CheckEmployeePage from "@pages/CheckEmployeePage/CheckEmployeePage";
import NotFoundPage from "@pages/404Page/404Page";
import AnswerDetailPage from "@pages/AnswerDetailPage/AnswerDetailPage";
import TeamAnswerPage from "@pages/TeamAnswerPage/TeamAnswerPage";
import BoardDetailPage from "@pages/BoardDetail/BoardDetail";
import BoardRegistrationPage from "@pages/BoardRegistrationPage/BoardRegistrationPage"
import BoardWritePage from "@pages/WritePage/WrigtePage";
import MyAnswerPage from "@/pages/MyAnswerPage/MyAnswerPage";
import BookMarkPage from "@/pages/BookMarkPage/BookMarkPage";
import TotalAnswerPage from "@pages/TotalAnswerPage/TotalAnswerPage";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <LoginPage />,
        errorElement: <NotFoundPage />,
    },
    {
        path: "/home",
        element: <HomePage />,
    },
    {
        path: "/register",
        element: <RegisterPage />,
    },
    {
        path: "/checkemplnum",
        element: <CheckEmployeePage />,
    },
    {
        path: "/answerdetail",
        element: <AnswerDetailPage />,
    },
    {
        path: "/teamanswerlist",
        element: <TeamAnswerPage />,
    },
    {
        path: "/boardDetail/:postId",
        element: <BoardDetailPage />,
    },
    {
      path: "/modify/:postId",
      element: <BoardRegistrationPage />
    },
    {
      path: "/write",
      element: <BoardWritePage />
    },
        {
      path: "/myanswerlist",
      element: <MyAnswerPage />
    },
    {
      path: "/teamanswerlist",
      element: <TeamAnswerPage />
    },
    {
      path: "/bookmarked",
      element: <BookMarkPage/>
    },
    {
      path: "/totallist",
      element: <TotalAnswerPage/>
    }

]);
