import React from 'react'
import './index.scss';

interface InputProps {
  iconPath: string,
  hintText: string,
  formKey: string,
  isSercet?: boolean
}

export default function CustomInput(props: InputProps) {
  const {iconPath, hintText, formKey, isSercet} = props;
  return (<>
    <div className='input-main'>
      <img src={iconPath} alt='icon' />
      <input type="text" className='normal-input' name={formKey} placeholder={hintText}/>
    </div>
  </>);
}