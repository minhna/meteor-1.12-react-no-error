import React, { useContext } from 'react';

import { AccountContext } from './account-context.js'

export default function UseTheContext() {
  const { isLoggedIn } = useContext(AccountContext);
  return (
    <div>
      <h3>use the context</h3>
      <div>isLoggedIn: {isLoggedIn ? 'true' : 'false'}</div>
    </div>
  )
}
