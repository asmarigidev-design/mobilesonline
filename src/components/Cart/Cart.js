import React, { useContext, useEffect, useState } from 'react';   // ایمپورت ری‌اکت و هوک‌ها – Import React and hooks
import { DataContext } from './Context';   // استفاده از کانتکست داده‌ها – Using shared data context
import formatCurrency from './util';   // تابع قالب‌بندی قیمت – Currency formatting function
import { Link } from 'react-router-dom';   // لینک‌دهی داخلی با React Router – Internal navigation with React Router

function Cart() {   
    const value = useContext(DataContext);   // دریافت داده‌ها از کانتکست – Accessing data from context
    const [cart,] = value.cart;   // وضعیت سبد خرید – Cart state
    const increase = value.increase;   // تابع افزایش تعداد – Increase item count
    const decrease = value.decrease;   // تابع کاهش تعداد – Decrease item count
    const removeProduct = value.removeProduct;   // حذف محصول از سبد – Remove product from cart
    const [total, setTotal] = useState(0);   // وضعیت مجموع قیمت – Total price state

    useEffect(() => {   
        const getTotal = () => {   
            const res = cart.reduce((prev, item) => {   
                return prev + (item.price * item.count);   
            }, 0);   
            setTotal(res);   
        };   
        getTotal();   // محاسبه مجموع قیمت هنگام تغییر سبد – Calculate total when cart changes
    }, [cart]);   

    if (cart.length === 0) {   
return (
  <h2
    style={{
      textAlign: "center",
      fontSize: "2.5rem",
      color: "#d32f2f",
      backgroundColor: "#fff3f3",
      padding: "20px",
      borderRadius: "12px",
      boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
      marginTop: "50px",
      fontFamily: "'Vazirmatn', sans-serif"
    }}
  >
    🛒 سبد خرید شما خالی است
  </h2>
);
    }   

    return (   
        <>   
            {cart.map(product => (   
                <div className="details cart" key={product._id}>   {/* کارت محصول در سبد خرید – Product card in cart*/}
                    <div   
                        className="img-container"   
                        style={{ backgroundImage: `url(${product.images[0]})` }}   
                    ></div>   
                    <div className="box-details">   
                        <h2>{product.title}</h2>   
                        <h3>{formatCurrency(product.price)}</h3>   
                        <div className="colors">   
                            {product && product.colors.map((color, index) => (   
                                <button key={index} style={{ background: color }}></button>   // نمایش رنگ‌های محصول – Display product colors
                            ))}   
                        </div>   
                        <p>{product.description}</p>   
                        <p>{product.content}</p>   
                        <div className="amount">   
                            <button className="count" onClick={() => increase(product._id)}>+</button>  {/* دکمه افزایش تعداد – Increase button*/}
                            <span>{product.count}</span>   
                            <button className="count" onClick={() => decrease(product._id)}>-</button>  {/*  دکمه کاهش تعداد – Decrease button*/}
                        </div>   
                        <div className="delete" onClick={() => removeProduct(product._id)}>X</div> {/* دکمه حذف محصول – Delete button*/}
                    </div>   
                </div>   
            ))}   
            <div className="total">   
                <Link to="/">پرداخت</Link>  {/*  لینک به صفحه پرداخت – Link to checkout page*/}
                <h3>مجموع قیمت : {formatCurrency(total)}</h3>   {/* نمایش مجموع قیمت – Display total price*/}
            </div>   
        </>   
    );   
}   

export default Cart;  
