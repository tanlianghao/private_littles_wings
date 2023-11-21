import React from 'react'
import { useController, UseControllerProps } from 'react-hook-form';

import './index.scss';

interface InputProps {
  iconPath: string,
  hintText: string,
  name: string,
  isSercet?: boolean
}

export interface FormInputs {
  userName: string,
  password: string,
}

export default function CustomInput(props: InputProps & UseControllerProps<FormInputs>) {
  const {iconPath, hintText, ...reset} = props;
  const {field} = useController(reset);
  return (<>
    <div className='input-main'>
      <img src={iconPath} alt='icon' />
      <input type="text" className='normal-input' placeholder={hintText} {...field}/>
    </div>
  </>);
}
