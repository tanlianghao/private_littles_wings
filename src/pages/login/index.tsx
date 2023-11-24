import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import CustomInput from 'src/components/form/input';
import userNameIcon from '@assets/login/person.png';
import passwordIcon from '@assets/login/password_1.png';

import {useForm, SubmitHandler} from 'react-hook-form';

import './index.scss';


interface FormInputs {
  userName: string,
  password: string,
}

export default function LoginPage() {
  const { handleSubmit, control, watch } = useForm<FormInputs>({
    defaultValues: {
      userName: '',
      password: ''
    }
  });

  const [canSubmit, setCanSubmit] = useState(false);
  const navigator = useNavigate();


  // 点击忘记密码操作
  const handleForgotPassword = () => {
    console.log('handleForgotPassword');
  };

  // 点击登录逻辑
  const handleLogin: SubmitHandler<FormInputs> = (data, e) => {
    e.preventDefault();
    console.log('handleLogin', data);
  }

  // 注册账号
  const registerAccount = () => {
    navigator('/sign/up');
  }

  React.useEffect(() => {
    const subscription = watch((values, {name, type}) => {
      let isValid = Object.values(values).every((item) => item !== "");
      setCanSubmit(isValid);
    });
    return () => subscription.unsubscribe();
  }, [watch])

  return (<>
    <div>
      <div className='head_main'>
        <div className='head_content'>
          <h2>Welcome Back</h2>
          <p>Use Credentials to acees your account</p>
        </div>
      </div>
      <div className='form_main'>
        <div className='form-margin'>
          <CustomInput iconPath={userNameIcon} hintText='Enter Username' name='userName' control={control}/>
        </div>
        <div className='form-margin'>
          <CustomInput iconPath={passwordIcon} hintText='Enter Password' name='password' control={control}/>
        </div>
        <div className='forgot_password' onClick={handleForgotPassword}>Forgot Password ?</div>
        <button className={canSubmit ? 'login-button':'login-button disable-button'} onClick={handleSubmit(handleLogin)}>Login</button>
      </div>
      <span className='divide-line'>Or</span>
      <div className='account-main'>
        <button className='account-buttons'>
          <span className='facebook-icon'></span>
          Login with Facebook
        </button>
        <button className='account-buttons'>
          <span className='google-icon'></span>
          Login with Google
        </button>
        <p className='account-tip'>Don’t have an account? <span onClick={registerAccount}>Signup</span></p>
      </div>
    </div>
  </>);
}