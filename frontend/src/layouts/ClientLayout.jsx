import React from 'react';
import { Outlet } from 'react-router-dom';

const ClientLayout = () => {
  return (
    <div className="min-h-screen bg-gray-100 font-sans">
      {/* Header và TopNav (bạn copy lại đoạn mã Header xanh lá và Menu đen ở bước trước vào đây) */}
      <header className="bg-brand-green text-white p-4 text-center font-bold text-xl">
        Client Header (Logo, Search, Cart)
      </header>

      {/* Phần nội dung sẽ thay đổi (Trang chủ, Chi tiết SP, Giỏ hàng...) */}
      <main>
        <Outlet /> 
      </main>
      
      {/* Footer chung */}
      <footer className="bg-gray-800 text-white p-4 text-center mt-10">
        Footer của cửa hàng
      </footer>
    </div>
  );
};

export default ClientLayout;