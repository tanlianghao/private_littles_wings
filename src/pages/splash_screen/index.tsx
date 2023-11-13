import React from "react";
import screenShot from '@assets/screenshot.png';
import { useNavigate } from "react-router-dom";

import './index.scss';

const SplashScreen = () => {
    const navigate = useNavigate();
    setTimeout(() => {
        navigate('/feature/preview', { replace: true });
    }, 2000);

    return (
        <>
        <div className="App">
        <img src={screenShot} alt='screensshot'/>
        </div>
        </>
    )
}

export default SplashScreen;