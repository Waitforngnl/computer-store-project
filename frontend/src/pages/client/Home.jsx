import React, { useState } from 'react';
import logoImage from '../../assets/Logo-removebg-preview.png';

const categories = [
  { 
    label: 'Chuột-Bàn phím-Tai nghe',
    subCategories: [
      {
        title: 'Chuột Máy Tính',
        items: ['Logitech', 'Asus ROG', 'Corsair', 'Rapoo', 'Lenovo', 'ATK - VXE', 'HyperX', 'Keychron - Lemokey', 'Angry Miao', 'Hộp quà tặng']
      },
      {
        title: 'Bàn Phím',
        items: ['Razer', 'Logitech', 'Rapoo', 'Dell - AlienWare', 'Corsair', 'Hộp quà tặng']
      },
      {
        title: 'Bàn Phím Cơ',
        items: ['Dareu', 'AULA', 'AKKO', 'Keychron - Lemokey', 'NuPhy', 'Evoworks', 'Dry Studio', 'Hộp quà tặng']
      },
      {
        title: 'Tai Nghe',
        items: ['Razer', 'HyperX', 'Logitech', 'Corsair', 'Rapoo', 'ATK', 'Hộp quà tặng']
      },
      {
        title: 'Loa',
        items: ['Razer', 'Creative']
      },
      {
        title: 'Tay Cầm',
        items: ['Razer', 'Asus', 'Machenike', 'Rapoo', 'Dareu']
      }
    ]
  },
  {
    label: 'PC / Máy Bộ',
    subCategories: [
      {
        title: 'Mini PC',
        items: ['Asus', 'Intel', 'ASRock', 'Gigabyte']
      },
      {
        title: 'PC Siêu Tốc',
        items: ['PC Văn Phòng ST','PC Gaming ST','PC Đồ Họa Render','PC ITX / Nhỏ Gọn','PC AI','PC Tự Build']
      },
      {
        title: 'PC theo VGA',
        items: ['RTX 3050 - 5050','RTX 5060 - 5060 Ti','RTX 5070 - 5070 Ti','RTX 5080','RTX 5090','AMD RADEON SERIES']
      },
      {
        title: 'PC theo hãng',
        items: ['PC Powered By MSI','AMD Official Store']
      },
      {
        title: 'PC AI TOP',
        items: ['Asus','Gigabyte','MSI']
      },
      {
        title: 'PC theo nhu cầu',
        items: ['PC Intel Core i5','PC Intel Core i7','PC Intel Core i9','PC Intel Core Ultra 2','PC AMD 5000 Series','PC AMD 9000 Series']
      },
      {
        title: 'PC Theo Mức Giá',
        items: ['PC giá dưới 10 triệu','PC giá 10 - 20 triệu','PC giá 20 - 30 triệu','PC giá trên 30 triệu']
      },
      {
        title: 'PC Đồng Bộ',
        items: ['PC HP', 'PC Lenovo', 'PC Dell', 'PC Gigabyte']
      }
    ]
  },
  { 
    label: 'PC Tự Build', 
    subCategories: [
      {

      }
    ] 
  },
  { 
    label: 'Linh kiện PC / Laptop',
    subCategories: [
      {

      }
    ] 
  },
  { 
    label: 'Màn hình - Loa',
    subCategories: [
      {

      }
    ] 
  },
  { 
    label: 'Lifestyle - Livestream setup', 
    subCategories: [
      {}
    ]
  },
  { 
    label: 'SSD gắn trong', 
    subCategories: [
      {

      }
    ]
  },
  { 
    label: 'RAM Laptop, PC', 
    subCategories: [
      {

      }
    ] 
  },
  { 
    label: 'Thẻ nhớ', 
    subCategories: [
      {

      }
    ] 
  },
  { 
    label: 'Ổ cứng SSD di động', 
    subCategories: [
      {

      }
    ] 
  },
  { 
    label: 'Ổ cứng HDD di động', 
    subCategories: [
      {

      }
    ] 
  },
  { 
    label: 'USB', 
    subCategories: [
      {

      }
    ] 
  },
  { 
    label: 'HDD', 
    subCategories: [
      {}
    ] 
  },
  { 
    label: 'GIẢI PHÁP NAS', 
    subCategories: [
      {}
    ] 
  },
  { 
    label: 'Phụ kiện', 
    subCategories: [
      {}
    ] 
  },
  { 
    label: 'Dịch vụ thu phí', 
    subCategories: [
      {}
    ] 
  },
  { 
    label: 'Phần mềm Bản Quyền', 
    subCategories: [
      {}
    ] 
  },
];

const Home = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className="min-h-screen bg-gray-100 font-sans">
      
      {/* 1. Header Chính */}
      <header className="bg-brand-green text-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between gap-4 lg:gap-8">
          
          <div className="w-36 md:w-48 h-[56px] bg-white p-1 flex items-center justify-center rounded-lg shadow-lg cursor-pointer flex-shrink-0 hover:scale-105 transition-transform overflow-hidden">
            <img 
              src={logoImage} 
              alt="GearRig Logo" 
              className="w-full h-full object-contain scale-125" 
            />
          </div>

          {/* Nút Danh mục sản phẩm (Click để bật/tắt Sidebar) */}
          <div 
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="hidden lg:flex items-center gap-2 cursor-pointer hover:text-yellow-300 transition-colors flex-shrink-0 select-none"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <span className="font-medium text-lg">Danh mục sản phẩm</span>
          </div>
          
          <div className="flex-1 max-w-2xl">
            <div className="flex bg-white rounded overflow-hidden shadow-inner h-10">
              <input 
                type="text" 
                placeholder="Bạn cần tìm gì?" 
                className="w-full px-4 text-gray-800 outline-none text-sm"
              />
              <button className="bg-yellow-400 px-5 text-gray-800 hover:bg-yellow-500 transition-colors flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 font-bold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </div>
          </div>

          <div className="flex items-center gap-4 md:gap-6 flex-shrink-0">
            <div className="flex items-center gap-2 cursor-pointer hover:text-yellow-300 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              <div className="text-sm leading-tight hidden md:block">
                <div>Tài khoản</div>
                <div className="font-semibold">Đăng nhập</div>
              </div>
            </div>

            <div className="flex items-center gap-2 border border-white px-3 py-1.5 rounded cursor-pointer hover:border-yellow-400 hover:text-yellow-400 transition-all">
              <div className="relative">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                <span className="absolute -top-2 -right-2 bg-yellow-400 text-gray-900 text-[11px] font-bold rounded-full h-5 w-5 flex items-center justify-center border border-brand-green">
                  0
                </span>
              </div>
              <span className="font-medium hidden sm:block mt-1">Giỏ hàng</span>
            </div>
          </div>
        </div>
      </header>

      {/* 2. Thanh Navigation */}
      <nav className="bg-brand-dark text-white text-sm">
        <div className="container mx-auto px-4 py-2 flex gap-6 font-semibold">
          <a href="#" className="hover:text-yellow-400">THANH TOÁN</a>
          <a href="#" className="hover:text-yellow-400">TRẢ GÓP</a>
          <a href="#" className="hover:text-yellow-400">HỆ THỐNG CỬA HÀNG</a>
          <a href="#" className="hover:text-yellow-400">HỖ TRỢ KHÁCH HÀNG</a>
        </div>
      </nav>

      {/* 3. Phần Nội dung chính */}
      <main className="container mx-auto px-4 py-4 flex flex-col gap-6 relative">
        
        <div className="flex gap-4">
          
          {/* Cột trái: Sidebar Danh mục - Điều khiển ẩn hiện qua isSidebarOpen */}
          {isSidebarOpen && (
            <aside className="w-[260px] bg-white rounded shadow-sm hidden md:block flex-shrink-0 relative z-40">
              {/* Thẻ ul cần relative tĩnh để các menu con (absolute) trượt ra mượt mà */}
              <ul className="flex flex-col text-[14px] text-gray-700 py-2 relative">
                {categories.map((category, index) => (
                  <li 
                    key={index} 
                    // group class để bắt sự kiện hover cho thẻ con (Mega Menu)
                    className={`px-4 py-2.5 border-b border-gray-50 cursor-pointer flex justify-between items-center group hover:bg-gray-50 transition-colors ${category.highlight ? 'text-brand-green font-medium' : 'hover:text-brand-green'}`}
                  >
                    <span>{category.label}</span>
                    <span className="text-gray-400 group-hover:text-brand-green font-bold opacity-0 group-hover:opacity-100 transition-opacity">›</span>

                    {/* KHOẢNG MEGA MENU TRƯỢT RA */}
                    {category.subCategories && category.subCategories.length > 0 && (
                      <div className="absolute top-0 left-full w-[850px] min-h-full bg-white shadow-xl border-l border-gray-100 hidden group-hover:flex flex-col p-6 cursor-default z-50">
                        {/* Chia cột cho các danh mục con (grid 4 cột) */}
                        <div className="grid grid-cols-4 gap-x-8 gap-y-6">
                          {category.subCategories.map((sub, subIndex) => (
                            <div key={subIndex} className="flex flex-col">
                              {/* Tiêu đề in đậm (Ví dụ: Chuột Máy Tính) */}
                              <h3 className="font-bold text-gray-800 mb-2">{sub.title}</h3>
                              {/* Danh sách các item bên trong */}
                              <ul className="flex flex-col gap-1">
                                {sub.items.map((item, itemIndex) => (
                                  <li key={itemIndex} className="text-gray-600 hover:text-brand-green hover:underline cursor-pointer text-[13px]">
                                    {item}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </aside>
          )}

          {/* Cột giữa: Banner Chính */}
          <section className="flex-1 flex flex-col gap-4 relative z-0">
            <div className="bg-gray-800 rounded h-80 flex items-center justify-center text-white text-2xl shadow-sm">
              [ MAIN BANNER SLIDER ]
            </div>
            
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-green-500 h-32 rounded flex items-center justify-center text-white shadow-sm">Sub Banner 1</div>
              <div className="bg-green-600 h-32 rounded flex items-center justify-center text-white shadow-sm">Sub Banner 2</div>
              <div className="bg-green-700 h-32 rounded flex items-center justify-center text-white shadow-sm">Sub Banner 3</div>
            </div>
          </section>

          {/* Cột phải: Banner dọc */}
          <aside className="w-48 hidden lg:block relative z-0">
            <div className="bg-black rounded h-full flex items-center justify-center text-white text-center p-4 shadow-sm">
              [ RIGHT SIDE BANNER ]
            </div>
          </aside>

        </div>

      </main>
    </div>
  );
};

export default Home;