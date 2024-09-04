import React from 'react';
import { Sidebar, Menu } from 'react-pro-sidebar';
import { Link } from 'react-router-dom';
import menuItemStyles from '../styles/menuItemStyles';
import MenuItemComponent from './MenuItemComponent.js'; 
import SubMenuComponent from './SubMenuComponent.js';   
import './SidebarComponent.css'; 



const SidebarComponent = () => {
  return (
    <div className="no-flex">
     <Sidebar className="sidebar">
     <Menu menuItemStyles={menuItemStyles}>
     <MenuItemComponent />
     <SubMenuComponent />
     </Menu>
    </Sidebar>
    </div>
   
  );
};

export default SidebarComponent;
