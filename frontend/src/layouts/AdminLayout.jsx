import React from 'react';
import { Outlet, Link } from 'react-router-dom';

const AdminLayout = () => {
  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar Admin */}
      <aside className="w-64 bg-gray-900 text-white p-4">
        <h2 className="text-2xl font-bold mb-6 text-yellow-400">Admin Panel</h2>
        <nav className="flex flex-col gap-3">
          <Link to="/admin" className="hover:text-yellow-400">Dashboard</Link>
          <Link to="/admin/products" className="hover:text-yellow-400">Quản lý Sản phẩm</Link>
          <Link to="/admin/orders" className="hover:text-yellow-400">Quản lý Đơn hàng</Link>
          <Link to="/" className="text-gray-400 mt-10 hover:text-white">← Về trang cửa hàng</Link>
        </nav>
      </aside>

      {/* Nội dung chính của Admin */}
      <main className="flex-1 p-8">
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;