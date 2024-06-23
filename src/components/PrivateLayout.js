// PrivateLayout.js
import React from "react";
const Sidebar = React.lazy(() => import("./Sidebar"));
React.lazy(() => import("../styles/privateLayout.css"));

const PrivateLayout = ({ name, children }) => {
  return (
    <div className="private-layout">
      <Sidebar />
      <div className="content-container">
        <div className="row shadow-sm p-2 mb-4 bg-body rounded">
          <div className="col-9">
            <h4 className="m-0 pt-1 dashboard-heading">{name}</h4>
          </div>
          <div className="col-3 d-flex align-items-center justify-content-evenly">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              className="bi bi-bell-fill"
              viewBox="0 0 16 16"
            >
              <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2m.995-14.901a1 1 0 1 0-1.99 0A5 5 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901" />
            </svg>
            <div className="d-flex border-start border-secondary ps-3 border-2">
              <img src={require('../assets/image/user.png')} alt="user-profile-img" width={40} height={40} className="border border-secondary rounded user-profile-img"/>
              <div className="ms-3">
                <h6 className="m-0 username">Keyur chanchad</h6>
                  <span className="badge bg-warning rounded-pill">Free</span>
              </div>
            </div>
          </div>
        </div>
        {children}
      </div>
    </div>
  );
};

export default PrivateLayout;
