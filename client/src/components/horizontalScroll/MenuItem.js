import React from 'react';
import Badge from 'react-bootstrap/Badge';
// One item component
// selected prop will be passed
const MenuItem = ({text, selected}) => {
  let status = selected ? 'primary' : 'dark'
  return <Badge variant={status} style={{borderRadius: 50, width: 90, height: 90, padding: 5, display: 'flex', justifyContent: 'center', alignItems: 'center'}}> {text} </Badge>;
};

export default MenuItem