import React from 'react';
import './index.scss';
import CustomInput from 'src/components/form/input';

export default function LoginPage() {
  return (<>
    <div>
      <div className='head_main'>
        <div className='head_content'>
          <h2>Welcome Back</h2>
          <p>Use Credentials to acees your account</p>
        </div>
      </div>
      <div className='form_main'>
        {/* <CustomInput /> */}
      </div>
      <div className='account_main'></div>
    </div>
  </>);
}