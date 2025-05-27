import { RouterProvider } from "react-router";
import { router } from "@app/routes/Router";

export const AppRouterProvider = () => {
    return <RouterProvider router={router} />;
};
