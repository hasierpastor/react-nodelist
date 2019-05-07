import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const headerStyle = {
  fontFamily: 'raleway',
  fontSize: '4rem',
  margin: '1rem'
};

const iconStyle = {
  color: '#228B22'
};

//Simple reusable header component
function Header(props) {
  return (
    <h1 style={headerStyle}>
      Tree Table <FontAwesomeIcon icon="tree" style={iconStyle} />
    </h1>
  );
}

export default Header;
