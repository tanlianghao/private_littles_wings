import { createBrowserRouter } from "react-router-dom";
import React from "react";

import SplashScreen from "./pages/splash_screen/index";

const router = createBrowserRouter([
    {
        path: "/",
        element: <SplashScreen />,
        index: true,
    },
    {
        path: "/feature/preview",
    }
]);

export default router;