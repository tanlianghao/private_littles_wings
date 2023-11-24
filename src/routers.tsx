import { createBrowserRouter } from "react-router-dom";
import React from "react";

import SplashScreen from "./pages/splash_screen/index";
import FeaturePreview from "./pages/feature_preview/index";
import LoginPage from "./pages/login";
import SignUp from "./pages/sign_up";

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
    },
    {
        path: '/sign/up',
        element: <SignUp/>
    }
]);

export default router;