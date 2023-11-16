import { createBrowserRouter } from "react-router-dom";
import React from "react";

import SplashScreen from "./pages/splash_screen/index";
import FeaturePreview from "./pages/feature_preview/index";
import LoginPage from "./pages/login";

const router = createBrowserRouter([
    {
        path: "/",
        element: <SplashScreen />,
        index: true,
    },
    {
        path: "/feature/preview",
        element: <FeaturePreview />
    },
    {
        path: "/login",
        element: <LoginPage/>
    }
]);

export default router;