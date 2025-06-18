import { Outlet } from "react-router-dom";
import AdminDashboardLayout from "../../components/layouts/adminLayout";


const AdminDashboard = () => {
  return (
    <AdminDashboardLayout>
      <Outlet />
    </AdminDashboardLayout>
  );
};

export default AdminDashboard;
