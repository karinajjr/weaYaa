import React from 'react';
import { SubMenu, MenuItem } from 'react-pro-sidebar';

const SubMenuComponent = () => {
  return (
    <SubMenu label="Charts">
      <MenuItem>Pie charts</MenuItem>
      <MenuItem>Line charts</MenuItem>
    </SubMenu>
  );
};

export default SubMenuComponent;
