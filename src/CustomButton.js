import React from 'react';
import { Button } from 'reactstrap';

const buttonStyle = {
  margin: '1.5rem',
  padding: '1rem'
};

//Created a very simple button function component so that it would be reusable in different apps/situations
//When button is clicked it will call props.handleClick which is bound to parent and will change state in parent
//In this case we will use handleClick to sort nodes and re-render node table
function CustomButton(props) {
  return (
    <Button
      outline
      style={buttonStyle}
      color="success"
      onClick={props.handleClick}
    >
      {props.text}
    </Button>
  );
}

export default CustomButton;
