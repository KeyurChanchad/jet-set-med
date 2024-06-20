import HomePage from './pages/HomePage';
import "./fonts/Bitter-Bold.ttf";
import "./fonts/Bitter-ExtraBold.ttf";
import "./fonts/Bitter-Italic.ttf";
import "./fonts/Bitter-Light.ttf";
import "./fonts/Bitter-Medium.ttf";
import "./fonts/Bitter-Regular.ttf";
import "./fonts/Bitter-SemiBold.ttf";
import "./fonts/Bitter-Thin.ttf";
import CreateAccount from './pages/CreateAccount';
import Login from './pages/Login';
import SuccessPage from './pages/SuccessPage';

// const App = ()=> {
//   return (
//     <div className="App">
//       {/* <HomePage /> */}
//       {/* <CreateAccount /> */}
//       {/* <Login /> */}
//       <SuccessPage />
//     </div>
//   );
// }

// export default App;


import React from 'react';
import { BrowserRouter as Router, Route, Routes, NavLink, Navigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Sidebar from './components/Sidebar';
import EditProfile from './components/EditProfile';
import user from './assets/image/user.png';
import PrivateRoute from './components/PrivateRoute';
import history from './navigation';
import PublicLayout from './components/PublicLayout';
import PrivateLayout from './components/PrivateLayout';
import Dashboard from './pages/Dashboard';

function App() {
  const isAuthenticated = !!localStorage.getItem('token');
  return (
    <Router history={history}>
      <div className="app-container">
        <Routes>
        {/* Public Routes */}
        <Route path="/login" element={<PublicLayout><Login /></PublicLayout>} />
        <Route path="/signup" element={<PublicLayout><CreateAccount /></PublicLayout>} />
        <Route path="/" element={isAuthenticated ? <HomePage /> : <Navigate to="/login" />} />
        <Route path="/account-success" element={isAuthenticated ? <SuccessPage /> : <Navigate to="/login" />} />

        {/* Private Routes */}
        <Route path="/dashboard" element={<PrivateRoute><PrivateLayout><Dashboard /></PrivateLayout></PrivateRoute>} />
        <Route path="/edit-profile" element={<PrivateRoute><PrivateLayout><EditProfile /></PrivateLayout></PrivateRoute>} />
        {/* Add other private routes here */}
        
        <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        
      </div>
    </Router>
  );
}

export default App;