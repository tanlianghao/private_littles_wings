import React from 'react';

import './index.scss';
import NavBar from 'src/components/nav_bar/nav_bar';
import VerificationCodeAndForgetPas from 'src/components/verificy_forget_widget';

export default function VerificationCode() {

  const buttonHandler = () => {

  }

  return (<>
    <div className='verificy-main'>
      <NavBar></NavBar>
      <VerificationCodeAndForgetPas
        title='Verification'
        desc={`we’ve send you the verification \n code on +91 7990792614`}
        buttonDesc='Continue'
        onTapHandler={buttonHandler}
      >
        <div>验证码输入框</div>
      </VerificationCodeAndForgetPas>
      <div className='bg-position'></div>
    </div>
  </>);
}