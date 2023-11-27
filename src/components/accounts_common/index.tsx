import React from 'react';

import './index.scss';

interface AccountProps {
  children: React.ReactNode
}

export default function AccountComponents(props: AccountProps) {
  return (<>
    <div>
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
        {props.children}
      </div>
    </div>
  </>);
}