

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import AdminDashboardRouter from './routes/adminDashboardRoutes';
import CommonRoutes from './routes/commonRoutes';
import AdminRoutes from './routes/adminRoutes';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/*" element={<CommonRoutes />} />
        <Route path="/dashboard/*" element={<AdminDashboardRouter />} />
        <Route path="/admin/*" element={<AdminRoutes/>} />

      </Routes>
    </Router>
  );
}

export default App;
