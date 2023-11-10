import React from "react";
import screenShot from '@assets/screenshot.png';

import './index.scss';

const SplashScreen = () => {
    return (
        <>
        <div className="App">
        <img src={screenShot} alt='screensshot'/>
        </div>
        </>
    )
}

export default SplashScreen;