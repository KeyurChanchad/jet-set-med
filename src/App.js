import React from 'react';
import "./fonts/Bitter-Bold.ttf";
import "./fonts/Bitter-ExtraBold.ttf";
import "./fonts/Bitter-Italic.ttf";
import "./fonts/Bitter-Light.ttf";
import "./fonts/Bitter-Medium.ttf";
import "./fonts/Bitter-Regular.ttf";
import "./fonts/Bitter-SemiBold.ttf";
import "./fonts/Bitter-Thin.ttf";
import HomePage from './pages/HomePage';
import CreateAccount from './pages/CreateAccount';
import Login from './pages/Login';
import SuccessPage from './pages/SuccessPage';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import EditProfile from './components/EditProfile';
import PrivateRoute from './components/PrivateRoute';
import history from './navigation';
import PublicLayout from './components/PublicLayout';
import PrivateLayout from './components/PrivateLayout';
import ForgotPassword from './pages/ForgotPassword';
import ResetPassword from './pages/ResetPassword';
import MedicalReports from './components/MedicalReports';
import AppointmentHistory from './components/AppointmentHistory';
import Dashboard from './components/Dashboard';

function App() {
  const isAuthenticated = !!localStorage.getItem('token');
  return (
    <Router history={history}>
      <div className="app-container">
        <Routes>
        {/* Public Routes */}
        <Route path="/login" element={<PublicLayout><Login /></PublicLayout>} />
        <Route path="/signup" element={<PublicLayout><CreateAccount /></PublicLayout>} />
        <Route path="/forgotPassword" element={<PublicLayout><ForgotPassword /></PublicLayout>} />
        <Route path="/resetPassword/:token" element={<PublicLayout><ResetPassword /></PublicLayout>} />
        <Route path="/" element={isAuthenticated ? <HomePage /> : <Navigate to="/login" />} />
        <Route path="/account-success" element={isAuthenticated ? <SuccessPage /> : <Navigate to="/login" />} />

        {/* Private Routes */}
        <Route path="/dashboard" element={<PrivateRoute><PrivateLayout><Dashboard /></PrivateLayout></PrivateRoute>} />

        <Route path="/edit-profile" element={<PrivateRoute><PrivateLayout name = "Edit Profile"><EditProfile /></PrivateLayout></PrivateRoute>} />

        <Route path="/medical-reports" element={<PrivateRoute><PrivateLayout name = "Medical Reports"><MedicalReports /></PrivateLayout></PrivateRoute>} />

        <Route path="/appointment-history" element={<PrivateRoute><PrivateLayout name = "Appointment History"><AppointmentHistory /></PrivateLayout></PrivateRoute>} />
        
        <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        
      </div>
    </Router>
  );
}

export default App;