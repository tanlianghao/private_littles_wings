import React from 'react'
import NavBar from 'src/components/nav_bar/nav_bar';
import { useForm } from 'react-hook-form';

import './index.scss';
import CustomInput, { InputProps } from 'src/components/form/input';

import profileImg from '@assets/login/Profile.png';
import messageImg from '@assets/login/Message.png';
import lockImg from '@assets/login/Lock.png';
import AccountComponents from 'src/components/accounts_common';

interface SignUpData {
	fullName: string,
	email: string,
	password: string,
	confirmPassword: string
}
const titleConst = 'Sign up';

export default function SignUp() {
	const formDataList: Array<InputProps> = [
		{
			iconPath: profileImg,
			hintText: 'Full name',
			name: 'fullName'
		},
		{
			iconPath: messageImg,
			hintText: 'abc@email.com',
			name: 'email'
		},
		{
			iconPath: lockImg,
			hintText: 'Your password',
			name: 'password'
		},
		{
			iconPath: lockImg,
			hintText: 'Confirm password',
			name: 'confirmPassword'
		}
	];
	const { control } = useForm<SignUpData>({
		defaultValues: {
			fullName: '',
			email: '',
			password: '',
			confirmPassword: ''
		}
	});
	
	const buttonHandler = () => {
		console.log('buttonHandler')
	}
  return (<>
    <div className='sign-up-body'>
			<NavBar></NavBar>
			<h1>{titleConst}</h1>
			<ul>
				{
					formDataList.map((item, index) => {
						return (<li key={'form_'+ index}>
							<CustomInput control={control} {...item}/>
						</li>);
					})
				}
			</ul>
			<button onClick={buttonHandler} className='signuptap'>{titleConst}</button>
			<AccountComponents>
				<p className='account-tip'>Already have a account ? <span>Login</span></p>
			</AccountComponents>
			<div className='bg-position'></div>
    </div>
  </>);
}