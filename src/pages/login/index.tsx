import React from 'react';
import './index.scss';
import CustomInput from 'src/components/form/input';
import userNameIcon from '@assets/login/person.png';
import passwordIcon from '@assets/login/password_1.png';

export default function LoginPage() {
  // 点击忘记密码操作
  const handleForgotPassword = () => {
    console.log('handleForgotPassword');
  };

  // 点击登录逻辑
  const handleLogin = () => {
    console.log('handleLogin');
  }

  // 注册账号
  const registerAccount = () => {
    console.log('registerAccount');
  }

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
          <CustomInput iconPath={userNameIcon} hintText='Enter Username' formKey='userName' />
        </div>
        <div className='form-margin'>
          <CustomInput iconPath={passwordIcon} hintText='Enter Password' formKey='password' />
        </div>
        <div className='forgot_password' onClick={handleForgotPassword}>Forgot Password ?</div>
        <button className='login-button' onClick={handleLogin}>Login</button>
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