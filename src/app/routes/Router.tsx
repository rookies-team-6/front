// router 설정해두는 파일입니다.

import { createBrowserRouter } from "react-router";
import QuestionComponent from "@widgets/QuestionComponent/QuestionComponent"

export const router = createBrowserRouter([
    {
        path: "/",
        element: <QuestionComponent />,
    },
]);
