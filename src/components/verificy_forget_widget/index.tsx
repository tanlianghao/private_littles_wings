import React from 'react';

import './index.scss';

interface verificyAndForgetProps {
  title: string;
  desc: string;
  children?: React.ReactNode;
  buttonDesc: string;
  onTapHandler: Function;
}

export default function VerificationCodeAndForgetPas(props: verificyAndForgetProps) {
  return (<>
    <div className='verificy_password_main'>
      <h1>{props.title}</h1>
      <p className='desc'>{props.desc}</p>
      {props.children ? props.children : null}
      <button onClick={() => props.onTapHandler()}>{props.buttonDesc}</button>
      <p className='count-down'>Re-send code in  <span>0:20</span></p>
    </div>
  </>);
}