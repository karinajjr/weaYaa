import React from 'react';
import { MenuItem } from 'react-pro-sidebar';
import { Link } from 'react-router-dom';

const MenuItemComponent = () => {
  return (
    <>
      <MenuItem component={<Link to="/documentation" />}>Documentation</MenuItem>
      <MenuItem component={<Link to="/calendar" />}>Calendar</MenuItem>
      <MenuItem component={<Link to="/e-commerce" />}>E-commerce</MenuItem>
    </>
  );
};

export default MenuItemComponent;
