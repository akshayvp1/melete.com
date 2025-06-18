// ProtectedRoute.tsx - Fixed version with proper auth state access
import React, { useEffect, useState } from 'react';
import { Navigate, Outlet, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/app/store';
import AuthService from '../services/AuthService';
import { store } from "../redux/app/store";
import { signOut } from "../redux/features/authSlice";

interface ProtectedRouteProps {
  allowedRoles: ("user" | "admin" | "counsellor")[];
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ allowedRoles }) => {
  const auth = useSelector((state: RootState) => state.auth);
  const [isActive, setIsActive] = useState(true);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const checkUserStatus = async () => {
      try {
        console.log("moneeee");
        
        const response = await AuthService.checkStatus();
        console.log(response, "Status check response");
        if (!response.success) {
          setIsActive(false);
          store.dispatch(signOut());
          navigate('/admin/signin');
        }
      } catch (error) {
        console.error("Error checking user status:", error);
        setIsActive(false);
        store.dispatch(signOut());
        navigate('/admin/signin');
      } finally {
        setLoading(false);
      }
    };

    // Only check status if user is authenticated
    if (auth.isAuthenticated) {
      checkUserStatus();
    } else {
      setLoading(false);
    }
  }, [auth.isAuthenticated, navigate]);

  // Show loading while checking status
  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-2"></div>
          <p>Loading...</p>
        </div>
      </div>
    );
  }

  // If user status check failed, redirect to signin
  if (!isActive) {
    return <Navigate to="/admin/signin" replace />;
  }

  // Check if user is authenticated
  if (!auth.isAuthenticated) {
    return <Navigate to="/admin/signin" replace />;
  }

  // FIXED: Access role directly from auth state (not auth.user.role)
  const userRole = auth.role;
  
  if (!userRole) {
    console.warn('User role not found in auth state');
    return <Navigate to="/admin/signin" replace />;
  }

  // Check if user has required role
  if (!allowedRoles.includes(userRole)) {
    console.warn(`User role '${userRole}' not in allowed roles:`, allowedRoles);
    return <Navigate to="/admin/signin" replace />;
  }

  // User is authenticated and has proper role, render protected content
  return <Outlet />;
};

export default ProtectedRoute;