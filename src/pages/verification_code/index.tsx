import React, { useRef } from 'react';

import './index.scss';
import NavBar from 'src/components/nav_bar/nav_bar';
import VerificationCodeAndForgetPas from 'src/components/verificy_forget_widget';

export default function VerificationCode() {
  const inputList = new Array(4).fill("-");
  let inputRefs: React.MutableRefObject<any>[] = new Array(4).fill(useRef(null));

  const buttonHandler = () => {

  }

  const focusHandler = (ref: React.MutableRefObject<any>) => {
    ref.current.placeholder = '';
  }

  const blurHandler = (ref: React.MutableRefObject<any>) => {
    ref.current.placeholder = '-';
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
        <div className='verification-code'>
          {
            inputList.map((item, index) => {
              const ref = inputRefs[index];
              return (<div className='code-item' key={index}>
                <input type="number" placeholder={item} onFocus={() => focusHandler(ref)} onBlur={() => blurHandler(ref)} ref={ref}/>
              </div>)
            })
          }
        </div>
      </VerificationCodeAndForgetPas>
      <div className='bg-position'></div>
    </div>
  </>);
}