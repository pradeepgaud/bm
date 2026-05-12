import { Outlet } from "react-router-dom";

import "./AdminLayout.css";
import Sidebar from "../Sidebar/Sidebar";

const AdminLayout = () => {
  return (
    <div className="admin-layout">
      <Sidebar />

      <div className="admin-main">
        <Outlet />
      </div>
    </div>
  );
};

export default AdminLayout;
