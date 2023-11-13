import React, { useRef } from 'react';

import './index.scss';

const FeaturePreview = () => {
    let imageList = [
        require('@assets/feature_view/background_1.png'),
        require('@assets/feature_view/background_2.png'),
        require('@assets/feature_view/background_3.png'),
        require('@assets/feature_view/background_4.png'),
        require('@assets/feature_view/background_5.png'),
        require('@assets/feature_view/background_6.png'),
        require('@assets/feature_view/background_7.png'),
    ];

    const elementRef = useRef(null);
    new WaterFallView().layout();
    return (
        <>
            <div className='mainBody'>
                <div className='swiperBody'>
                    <div className='waterfallsFlow' ref={elementRef}>
                        {imageList.map((item, index) => {
                            return (
                                <img src={item} alt={'image_' + index} key={index}/>
                            );
                        })}
                    </div>
                    <h2>Find your favourite events here</h2>
                    <p>The customer is very important, the customer will be followed by the customer.</p>
                </div>
                <button>Next</button>
            </div>
        </>
    );
}

export default FeaturePreview;

class WaterFallView {
    layout() {
        console.log(123123);
    }
}