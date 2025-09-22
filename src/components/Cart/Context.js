import React, { createContext, useEffect, useState } from 'react'; // ایمپورت ری‌اکت و هوک‌ها
import { DATAPRODUCT } from '../Products/data'; // ایمپورت داده‌های اولیه محصولات
import Swal from 'sweetalert2'; // ایمپورت SweetAlert2 برای هشدارهای زیبا

export const DataContext = createContext(); // ایجاد کانتکست برای اشتراک‌گذاری داده‌ها

export const DataProvider = (props) => {
    const [products, setProducts] = useState(DATAPRODUCT); // وضعیت محصولات
    const [cart, setCart] = useState([]); // وضعیت سبد خرید

    useEffect(() => {
        const dataCart = JSON.parse(localStorage.getItem("dataCart"));
        if (dataCart) setCart(dataCart); // بارگذاری سبد خرید از localStorage
    }, []);

    useEffect(() => {
        localStorage.setItem("dataCart", JSON.stringify(cart)); // ذخیره سبد خرید در localStorage
    }, [cart]);

const addCart = (id, selectedImage) => {
  const check = cart.every(item => !(item._id === id && item.selectedImage === selectedImage));
  if (check) {
    const data = products.filter(product => product._id === id);
    if (data.length > 0) {
      const product = {
        ...data[0],
        selectedImage: selectedImage || data[0].images[0],
        count: 1
      };
      setCart([...cart, product]);
    }
  } else {
    Swal.fire({
      icon: 'warning',
      title: 'محصول تکراری',
      text: 'این ترکیب از محصول و تصویر در سبد خرید موجود است.',
      confirmButtonText: 'باشه'
    });
  }
};



    const increase = (id) => {
        const updatedCart = cart.map(item => {
            if (item._id === id) {
                return { ...item, count: item.count + 1 }; // افزایش تعداد محصول
            }
            return item;
        });
        setCart(updatedCart);
    };

    const decrease = (id) => {
        const updatedCart = cart.map(item => {
            if (item._id === id) {
                const newCount = item.count > 1 ? item.count - 1 : 1;
                return { ...item, count: newCount }; // جلوگیری از کاهش زیر ۱
            }
            return item;
        });
        setCart(updatedCart);
    };

    const removeProduct = (id) => {
        Swal.fire({
            title: 'حذف محصول',
            text: 'آیا از حذف محصول مطمئنید؟',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'بله، حذف شود',
            cancelButtonText: 'خیر'
        }).then((result) => {
            if (result.isConfirmed) {
                const updatedCart = cart.filter(item => item._id !== id); // حذف محصول از آرایه
                setCart(updatedCart);
                Swal.fire({
                    icon: 'success',
                    title: 'محصول حذف شد',
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        });
    };

    const value = {
        products: [products, setProducts],
        cart: [cart, setCart],
        addCart,
        increase,
        decrease,
        removeProduct,
    };

    return (
        <DataContext.Provider value={value}>
            {/* فراهم‌سازی داده‌ها برای کامپوننت‌های فرزند */}
            {props.children}
        </DataContext.Provider>
    );
};
