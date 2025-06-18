import React from "react";
import { Routes,Route } from "react-router-dom";
import AddCounsellor from "../components/addCounsellor";
import CounsellorsManagement from "../components/counsellorManagement";
import AdminDashboardLayout from "../components/layouts/adminLayout";
import AdminHome from "../components/adminHome";

const AdminDashboardRouter: React.FC = () => {
  return (
    <Routes>
      <Route path="/admin-dashboard" element={<AdminDashboardLayout />}>
        <Route index element={<AdminHome />} /> {/* Default page */}
        <Route path="home" element={<AdminHome />} />
        <Route path="add-counsellor" element={<AddCounsellor />} />
        <Route path="counsellorMangement" element={<CounsellorsManagement />} />
       
      </Route>
    </Routes>
  );
};

export default AdminDashboardRouter;