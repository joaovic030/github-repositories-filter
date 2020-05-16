import React from 'react';
import Badge from 'react-bootstrap/Badge';
// One item component
// selected prop will be passed
const MenuItem = ({text, selected}) => {
  let status = selected ? 'primary' : 'dark'
  return <Badge variant={status} style={{borderRadius: 50, width: 70, height: 70, display: 'flex', justifyContent: 'center', alignItems: 'center'}}> {text} </Badge>;
};

export default MenuItem