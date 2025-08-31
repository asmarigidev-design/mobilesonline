import React from 'react'  // ایمپورت ری‌اکت – Import React
import {Routes, Route} from 'react-router-dom';  // تعریف مسیرها با React Router – Define routes using React Router
import Products from './Products/Products';  // کامپوننت محصولات – Products component
import Cart from './Cart/Cart';  // کامپوننت سبد خرید – Cart component
import Details from './Cart/Details';  // کامپوننت جزئیات محصول – Product details component
import HomePage from './HomePage/HomePage';  // صفحه اصلی – Home page
import CustomerSupportPanel from './CustomerSupportPanel/CustomerSupportPanel';  // پنل پشتیبانی مشتری – Customer support panel
import AboutUs from './About/AboutUs';  // صفحه درباره ما – About us page

function Content() {
  return (
    <Routes>  {/* تعریف مسیرهای اپلیکیشن – Define application routes */}
      <Route path="/products" element={<Products />} />  {/* مسیر صفحه محصولات – Products page route */}
      <Route path="/products/:id" element={<Details />} />  {/* مسیر جزئیات محصول با شناسه – Product details by ID */}
      <Route path="/cart" element={<Cart />} />  {/* مسیر سبد خرید – Cart page route */}
      <Route path="/" element={<HomePage />} />  {/* مسیر صفحه اصلی – Home page route */}
      <Route path="/aboutus" element={<AboutUs />} />  {/* مسیر درباره ما – About us route */}
      <Route path="/customerSupportPanel" element={<CustomerSupportPanel />} />  {/* مسیر پنل پشتیبانی – Support panel route */}
    </Routes>
  )
}

export default Content  // خروجی گرفتن از کامپوننت مسیرها – Exporting the routing component
