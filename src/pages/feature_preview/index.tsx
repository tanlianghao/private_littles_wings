import React, { useEffect, useRef } from 'react';

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

    useEffect(() => {
        new WaterFallView().layout(elementRef);
    });

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
                    <h1>Find your favourite events here</h1>
                    <div className='content-main'>
                        <p>The customer is very important, the</p>
                        <p>customer will be followed by the customer.</p>
                    </div>
                </div>
                <button className='nextButton'>Next</button>
            </div>
        </>
    );
}

export default FeaturePreview;

class WaterFallView {
    cacheHeightByItem = [];

    layout(ref: React.MutableRefObject<any>) {
        let childrens = ref.current.children;
        let containerWidth = ref.current.offsetWidth;
        let containerHeight = ref.current.offsetHeight;
        const columnNo = 3;
        const space = 5.0;
        let top = 0, left = 0;

        let imageWidth = (containerWidth / columnNo) - space;

        childrens[0].onload = () => {
            for (let i = 0; i < childrens.length; i++) {
                let itemDom = childrens[i] as HTMLElement;

                if (i < columnNo) {
                    left = (imageWidth + space) * i;
                    this.cacheHeightByItem.push(itemDom.offsetHeight);
                } else {
                    const index = this.getMinHeightIndex();
                    left = childrens[index].offsetLeft;
                    top = childrens[index].offsetHeight + space;
                    this.cacheHeightByItem[index] += top;
                    
                    let currentItemPostion = top + itemDom.offsetHeight;
    
                    if (currentItemPostion < containerHeight) {
                        let itemHeight = containerHeight - top;
                        itemDom.style.height = itemHeight + 'px';
                    }
                }
                itemDom.style.top = top + 'px';
                itemDom.style.left = left + 'px';
            }
        }

    }

    getMinHeightIndex() {
        let minIndex = 0;
        let currentMinValue = this.cacheHeightByItem[minIndex];


        for (let i = 0; i < this.cacheHeightByItem.length; i++) {
            if (currentMinValue > this.cacheHeightByItem[i]) {
                minIndex = i;
                currentMinValue = this.cacheHeightByItem[i];
            }
        }
        return minIndex;
    }
}