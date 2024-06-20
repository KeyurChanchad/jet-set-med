// PrivateLayout.js
import React from 'react';
const Sidebar = React.lazy(() => import('./Sidebar'));

const PrivateLayout = ({ children }) => {
  return (
    <div className="private-layout">
      <Sidebar />
      <div className="content-container">
        {children}
      </div>
    </div>
  );
};

export default PrivateLayout;
