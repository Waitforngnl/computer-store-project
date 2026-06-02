import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Import Layouts
import ClientLayout from './layouts/ClientLayout';
import AdminLayout from './layouts/AdminLayout';

// Import Pages
import Home from './pages/client/Home';
import Dashboard from './pages/admin/Dashboard';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        
        {/* NHÓM ROUTE CHO NGƯỜI MUA (CLIENT) */}
        <Route path="/" element={<ClientLayout />}>
          <Route index element={<Home />} />
          {/* Các route khác sẽ thêm vào sau: 
          <Route path="product/:id" element={<ProductDetail />} /> 
          <Route path="cart" element={<Cart />} />
          */}
        </Route>

        {/* NHÓM ROUTE CHO QUẢN TRỊ VIÊN (ADMIN) */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Dashboard />} />
          {/* Các route khác sẽ thêm vào sau:
          <Route path="products" element={<ManageProducts />} />
          */}
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;