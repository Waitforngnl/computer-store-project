import React from 'react';

const Dashboard = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Tổng quan thống kê</h1>
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-white p-6 rounded shadow">Doanh thu tháng</div>
        <div className="bg-white p-6 rounded shadow">Đơn hàng mới</div>
        <div className="bg-white p-6 rounded shadow">Sản phẩm sắp hết</div>
      </div>
    </div>
  );
};

export default Dashboard;