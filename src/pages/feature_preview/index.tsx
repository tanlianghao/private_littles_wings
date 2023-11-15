import React, { useEffect, useRef, useState } from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
// import Swiper and modules styles
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';

import './index.scss';
import { useNavigate } from 'react-router-dom';

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

	let swiperContainer = new Array(3).fill(imageList);
	let navigator = useNavigate();
	const cachePreviewIndexs: Array<number> = [];
	let [isReaded, setIsReaded] = useState<boolean>(false);

	const elementRef = useRef(null);

	// 缓存看过的内容
	let cacheReadedPreviewHandler = (index: number) => {
		if (cachePreviewIndexs.includes(index)) {
			return;
		}
		cachePreviewIndexs.push(index);

		if (cachePreviewIndexs.length === swiperContainer.length) {
			setIsReaded(true);
		}
	}

	// next跳转路径
	function onTapButtonHandler() {
		if (!isReaded) {
			console.error('onTapButtonHandler', 'preview no looked')
			return;
		}

		navigator('/register/account');
	}

	useEffect(() => {
			new WaterFallView().layout(elementRef);
	}, []);

	return (
		<>
			<div className='mainBody'>
				<Swiper
					modules={[Navigation, Pagination]}
					pagination={{ el: '.swiper-pagination', 
						bulletClass: 'swiper-pagination-customer-bullet',
						bulletActiveClass: 'swiper-pagination-customer-bullet-active',
					}}
					onSlideChange={(swiper) => {
						cacheReadedPreviewHandler(swiper.activeIndex)
					}}
					onInit={(swiper) => {
						cacheReadedPreviewHandler(swiper.activeIndex)
					}}
				>
						{
							swiperContainer.map((images, index) => {
								return (<SwiperSlide key={'slide_' + index} className='swiperBody'>
									<div className='waterfallsFlow'>
													{images.map((item: string, index: React.Key) => {
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
								</SwiperSlide>);
							})
						}
						<div className="swiper-pagination"></div>
				</Swiper>
				<button className={`normal_button ${ isReaded ? 'button_active': 'nextButton'}`}
					onClick={onTapButtonHandler}
				>Next</button>
			</div>
		</>
	);
}

export default FeaturePreview;

class WaterFallView {

	layout(ref: React.MutableRefObject<any>) {
		let imageWaterFallsDom = document.getElementsByClassName('waterfallsFlow');
		const columnNo = 3;
		const space = 5.0;
		
		for (let i = 0; i< imageWaterFallsDom.length; i++) {
			let containerElement = imageWaterFallsDom[i] as HTMLElement;
			let containerWidth = containerElement.offsetWidth;
			let containerHeight = containerElement.offsetHeight;
			let imageWidth = (containerWidth / columnNo) - space;
			let childrens = imageWaterFallsDom[i].children as HTMLCollectionOf<HTMLImageElement>;	
			let top = 0, left = 0;
			let cacheHeightByItem = [];
			childrens[0].onload = () => {
				for (let i = 0; i < childrens.length; i++) {
					let itemDom = childrens[i] as HTMLImageElement;

					if (i < columnNo) {
						left = (imageWidth + space) * i;
						cacheHeightByItem.push(itemDom.offsetHeight);
					} else {
						const index = this.getMinHeightIndex(cacheHeightByItem);
						left = childrens[index].offsetLeft;
						top = childrens[index].offsetHeight + space;
						cacheHeightByItem[index] += top;
						
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
	}

	getMinHeightIndex(cacheHeightByItem: number[]) {
		let minIndex = 0;
		let currentMinValue = cacheHeightByItem[minIndex];

		for (let i = 0; i < cacheHeightByItem.length; i++) {
			if (currentMinValue > cacheHeightByItem[i]) {
				minIndex = i;
				currentMinValue = cacheHeightByItem[i];
			}
		}
		return minIndex;
	}
}