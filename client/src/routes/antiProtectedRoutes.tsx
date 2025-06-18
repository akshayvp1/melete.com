// // AntiProtectedRoute.tsx - Fixed version with proper auth state access
// import React from "react";
// import { useSelector } from "react-redux";
// import { RootState } from "../redux/app/store";
// import { Navigate, useLocation } from "react-router-dom";

// interface AntiProtectedRouteProps {
//   children: React.ReactNode;
// }

// const AntiProtectedRoute: React.FC<AntiProtectedRouteProps> = ({ children }) => {
//   const auth = useSelector((state: RootState) => state.auth);
//   const location = useLocation();

//   // Paths that authenticated users should NOT be able to access
//   const restrictedPaths = [
//     "/admin/signin",    // Admin login page
//     "/",          // General signin (if you have one)
//     "/service",          // General signup (if you have one)
//     "/expert",            // OTP verification
//     "/contact",           // Role selection
//     "/improve",
    
//   ];

//   const currentPath = location.pathname.toLowerCase();

//   // If user is authenticated and trying to access restricted paths
//   if (auth.isAuthenticated && restrictedPaths.includes(currentPath)) {
//     // FIXED: Access role directly from auth state (not auth.user.role)
//     const userRole = auth.role;
   
//     // Redirect based on user role
//     if (userRole === 'admin') {
//       return <Navigate to="/dashboard/admin-dashboard/home" replace />;
//     } else if (userRole === 'counsellor') {
//       return <Navigate to="/dashboard/counsellor-dashboard/home" replace />;
//     } else if (userRole === 'user') {
//       return <Navigate to="/dashboard/user-dashboard/home" replace />;
//     } else {
//       // Default redirect if role is not recognized
//       return <Navigate to="/dashboard" replace />;
//     }
//   }

//   // If not authenticated or not accessing restricted paths, render children
//   return <>{children}</>;
// };

// export default AntiProtectedRoute;





import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/app/store";
import { Navigate, useLocation } from "react-router-dom";

interface AntiProtectedRouteProps {
  children: React.ReactNode;
}

const AntiProtectedRoute: React.FC<AntiProtectedRouteProps> = ({ children }) => {
  const auth = useSelector((state: RootState) => state.auth);
  console.log(auth.role,"ithan mone auth");
  
  const location = useLocation();

  const restrictedPaths = [
    "/admin/signin",
    "/",
    "/service",
    "/experts",
    "/contact",
    "/improve",
    "/blog",
    "/about",
  ];

  const currentPath = location.pathname.toLowerCase();

  if (auth.isAuthenticated && restrictedPaths.includes(currentPath)) {
    const userRole = auth.role;
    if (userRole === "admin") {
      return <Navigate to="/dashboard/admin-dashboard/home" replace />;
    } else if (userRole === "counsellor") {
      return <Navigate to="/dashboard/counsellor-dashboard/home" replace />;
    } else if (userRole === "user") {
      return <Navigate to="/dashboard/user-dashboard/home" replace />;
    } else {
      return <Navigate to="/dashboard" replace />;
    }
  }

  return <>{children}</>;
};

export default AntiProtectedRoute;