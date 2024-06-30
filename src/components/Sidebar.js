import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/sidebar.css';
import Drawer from 'react-modern-drawer';
import 'react-modern-drawer/dist/index.css';
import { List } from 'react-bootstrap-icons';

const Sidebar = () => {
  const [isOpen, setIsOpen] = React.useState(true);

  const toggleDrawer = () => {
      setIsOpen((prevState) => !prevState)
  }

  return (
    <Fragment>
        <button onClick={toggleDrawer} className='btn btn-primary sidebar-btn'> <List color='white' /> </button>
            <Drawer
                open={isOpen}
                onClose={toggleDrawer}
                direction='left'
                className='bla bla bla'
            >
            <div className="sidebar">
              <div className="sidebar-header">
                <h3>Jet Set Med</h3>
              </div>
              <nav className="sidebar-nav">
                <NavLink to="/dashboard" activeClassName="active-link">Dashboard</NavLink>
                <NavLink to="/appointment-history" activeClassName="active-link">Appointment History</NavLink>
                <NavLink to="/medical-reports" activeClassName="active-link">Medical Reports</NavLink>
                <NavLink to="/our-services" activeClassName="active-link">Our Services</NavLink>
                <NavLink to="/logout" activeClassName="active-link">Logout</NavLink>
              </nav>
            </div>
            </Drawer>
    </Fragment>
    
  );
};

export default Sidebar;