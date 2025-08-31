import React, { useContext } from 'react';  // ایمپورت ری‌اکت و کانتکست – Import React and context
import { Link } from 'react-router-dom';  // لینک‌دهی داخلی با React Router – Internal navigation with React Router
import { DataContext } from '../Cart/Context';  // استفاده از کانتکست داده‌ها – Using shared data context
import formatCurrency from '../Cart/util';  // قالب‌بندی قیمت – Format price as currency

function Products() {
  const value = useContext(DataContext);  // دریافت داده‌ها از کانتکست – Access data from context
  const [products,] = value.products;  // وضعیت محصولات – Products state
  const addCart = value.addCart;  // تابع افزودن به سبد خرید – Add to cart function
  
  const handleProductClick = (id) => {
    sessionStorage.setItem('scrollPosition', window.scrollY);  // ذخیره موقعیت اسکرول قبل از رفتن به جزئیات – Save scroll position before navigating to details
  };

  return (
    <div className="products">  {/* لیست کارت‌های محصول – Product card list */}
      {
        products.map(product => (
          <div className="card" key={product._id}>  {/* کارت محصول – Product card */}
            <Link to={`/products/${product._id}`} onClick={() => handleProductClick(product._id)}>  {/* لینک به جزئیات محصول – Link to product details */}
              <img src={product.images[0]} alt={product.title} className="image" />  {/* تصویر محصول – Product image */}
            </Link>
            <div className="box">  {/* محتوای کارت – Card content */}
              <h3>
                <Link to={`/products/${product._id}`} onClick={() => handleProductClick(product._id)}>{product.title}</Link>  {/* عنوان محصول – Product title */}
              </h3>
              <p>{product.description}</p>  {/* توضیحات محصول – Product description */}
              <h4>{formatCurrency(product.price)}</h4>  {/* قیمت محصول – Product price */}
              <button onClick={() => addCart(product._id)}>افزودن به سبد خرید</button>  {/* دکمه افزودن به سبد – Add to cart button */}
            </div>
          </div>
        ))
      }
    </div>
  );
}

export default Products;  
