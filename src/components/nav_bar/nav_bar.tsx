import React from 'react'
import navBack from '@assets/login/arrow_left.png';

import './nav_bar.scss';

interface NavBarProps {
	title?: string;
	children?: React.ReactNode;
}

export default function NavBar(props: NavBarProps) {
	return (<>
		<div className='nav-body'>
			<img src={navBack} alt="arrowLeft" className='arrow-left'/>
			{
				props.title ? <span>{props.title}</span> : null
			}
			{
				props.children ? <div className='nav-children'>{props.children}</div> : <span></span>
			}
		</div> 
	</>);
}