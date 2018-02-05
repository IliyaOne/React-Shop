import React from 'react';

import clasess from './Header.scss';

 const Header =  (props) => {
  return (
    <div className={ clasess.Header }>
      {props.children}
    </div>
  )
}
export default Header;