import React, { useState } from 'react';

import './index.scss';
import NavBar from 'src/components/nav_bar/nav_bar';
import VerificationCodeAndForgetPas from 'src/components/verificy_forget_widget';

export default function VerificationCode() {
  const inputList = new Array(4).fill("-");
  const [value, setValue] = useState({
    0: "",
    1: "",
    2: "",
    3: ""
  });

  const buttonHandler = () => {

  }

  const focusHandler = (e: React.FocusEvent<HTMLInputElement>) => {
    e.target.placeholder = "";
  }

  const blurHandler = (e: React.FocusEvent<HTMLInputElement>) => {
    e.target.placeholder = "-";
  }

  const inputHandler = (e, index: number) => {
    const inputValue = e.target.value;
    if (inputValue.length <= 1) {
      let newObj = {...value, [index]: inputValue}
      setValue(newObj);
    }
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
              return (<div className='code-item' key={index}>
                <input type="number"
                  value={value[index]}
                  placeholder={item}
                  onInput={(e) => inputHandler(e, index)}
                  onFocus={focusHandler}
                  onBlur={blurHandler}
                />
              </div>)
            })
          }
        </div>
      </VerificationCodeAndForgetPas>
      <div className='bg-position'></div>
    </div>
  </>);
}