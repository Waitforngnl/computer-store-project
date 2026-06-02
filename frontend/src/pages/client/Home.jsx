import React from 'react';

const Home = () => {
  return (
    <div className="container mx-auto px-4 py-4 flex flex-col gap-6">
      {/* Container chính xếp dọc (flex-col) và cách nhau một khoảng (gap-6) */}
      
      {/* ================= PHẦN TRÊN: MENU & BANNER ================= */}
      <div className="flex gap-4">
        
        {/* Cột trái: Sidebar Danh mục */}
        <aside className="w-64 bg-white rounded shadow-sm hidden md:block">
          <ul className="flex flex-col text-sm text-gray-700">
            <li className="px-4 py-3 border-b hover:text-brand-green cursor-pointer flex justify-between">
              <span>🖱️ Chuột - Bàn phím</span> <span>›</span>
            </li>
            <li className="px-4 py-3 border-b hover:text-brand-green cursor-pointer flex justify-between">
              <span>💻 Laptop</span> <span>›</span>
            </li>
            <li className="px-4 py-3 border-b hover:text-brand-green cursor-pointer flex justify-between">
              <span>🖥️ PC / Máy bộ</span> <span>›</span>
            </li>
            <li className="px-4 py-3 border-b hover:text-brand-green cursor-pointer flex justify-between">
              <span>⚙️ Linh kiện PC</span> <span>›</span>
            </li>
            {/* Thêm các mục khác tương tự */}
          </ul>
        </aside>

        {/* Cột giữa: Banner Chính */}
        <section className="flex-1 flex flex-col gap-4">
          <div className="bg-gray-800 rounded h-80 flex items-center justify-center text-white text-2xl shadow-sm">
            {/* Chỗ này sau này sẽ chèn thư viện Carousel/Slider ảnh */}
            [ MAIN BANNER SLIDER ]
          </div>
          
          {/* Sub Banners */}
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-green-500 h-32 rounded flex items-center justify-center text-white shadow-sm">Sub Banner 1</div>
            <div className="bg-green-600 h-32 rounded flex items-center justify-center text-white shadow-sm">Sub Banner 2</div>
            <div className="bg-green-700 h-32 rounded flex items-center justify-center text-white shadow-sm">Sub Banner 3</div>
          </div>
        </section>

        {/* Cột phải: Banner dọc */}
        <aside className="w-48 hidden lg:block">
          <div className="bg-black rounded h-full flex items-center justify-center text-white text-center p-4 shadow-sm">
            [ RIGHT SIDE BANNER ]
          </div>
        </aside>

      </div>

      {/* ================= PHẦN DƯỚI: DANH SÁCH SẢN PHẨM ================= */}
      <div className="w-full bg-white p-8 text-center text-xl text-gray-500 shadow-sm rounded">
        Nội dung trang chủ cửa hàng <br/>
        (Sau này chỗ này sẽ làm một Grid Layout chứa các Card sản phẩm)
      </div>

    </div>
  );
};

export default Home;