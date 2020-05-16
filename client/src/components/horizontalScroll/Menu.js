import React from 'react'
import MenuItem from './MenuItem'

// All items component
// Important! add unique key
const Menu = (list, selected) =>
  list.map(el => {
    const {name} = el;
    return <MenuItem text={name} key={name} selected={selected} />;
  });

  export default Menu