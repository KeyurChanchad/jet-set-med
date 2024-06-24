import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <h3>JetSetMed</h3>
      </div>
      <nav className="sidebar-nav">
        <NavLink to="/dashboard" activeClassName="active-link">Dashboard</NavLink>
        <NavLink to="/appointment-history" activeClassName="active-link">Appointment History</NavLink>
        <NavLink to="/medical-reports" activeClassName="active-link">Medical Reports</NavLink>
        <NavLink to="/our-services" activeClassName="active-link">Our Services</NavLink>
        <NavLink to="/logout" activeClassName="active-link">Logout</NavLink>
      </nav>
    </div>
  );
};

export default Sidebar;