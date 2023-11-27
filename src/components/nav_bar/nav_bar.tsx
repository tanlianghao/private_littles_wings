import React from 'react'
import navBack from '@assets/login/arrow_left.png';

import './nav_bar.scss';
import { useNavigate } from 'react-router-dom';

interface NavBarProps {
	title?: string;
	children?: React.ReactNode;
}

export default function NavBar(props: NavBarProps) {
	let navigator = useNavigate();

	return (<>
		<div className='nav-body'>
			<img src={navBack} alt="arrowLeft" className='arrow-left' onClick={() => {navigator(-1)}}/>
			{
				props.title ? <span>{props.title}</span> : null
			}
			{
				props.children ? <div className='nav-children'>{props.children}</div> : <span></span>
			}
		</div> 
	</>);
}