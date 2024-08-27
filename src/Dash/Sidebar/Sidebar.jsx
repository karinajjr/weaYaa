import React from 'react';
import './Sidebar.css';

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="logo">WeaYaa-Intranet</div>
      <ul>
        <li className="active">Dashboard</li>
        <li>Staff</li>
        <li>Projects</li>
        <li>Status</li>
      </ul>
      <div className="bottom-menu">
        <button>Settings</button>
        <button>Logout</button>
      </div>
    </div>
  );
}

export default Sidebar;
