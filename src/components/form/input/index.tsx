import React from 'react'
import './index.scss';

interface InputProps {
  iconPath: string,
  hintText: string,
  formKey: string,
  isSercet: boolean
}

export default function CustomInput(props: InputProps) {
  return (<>
    <input type="text" />
  </>);
}