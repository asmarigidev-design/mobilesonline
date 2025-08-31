import React, { createContext, useEffect, useState } from 'react';  // ایمپورت ری‌اکت و هوک‌ها – Import React and hooks
import { DATAPRODUCT } from '../Products/data';  // ایمپورت داده‌های اولیه محصولات – Import initial product data
export const DataContext = createContext();  // ایجاد کانتکست برای اشتراک‌گذاری داده‌ها – Create context for data sharing

export const DataProvider = (props) => {
    const [products, setProducts] = useState(DATAPRODUCT)  // وضعیت محصولات – Products state

    const [cart, setCart] = useState([])  // وضعیت سبد خرید – Cart state

    useEffect(() => {
        const dataCart = JSON.parse(localStorage.getItem("dataCart"))
        if (dataCart) setCart(dataCart)  // بارگذاری سبد خرید از localStorage – Load cart from localStorage
    }, [])

    useEffect(() => {
        localStorage.setItem("dataCart", JSON.stringify(cart))  // ذخیره سبد خرید در localStorage – Save cart to localStorage
    }, [cart])

    const addCart = (id) => {
        const check = cart.every(item => {
            return item._id !== id
        })
        if (check) {
            const data = products.filter(product => {
                return product._id === id
            })
            setCart([...cart, ...data])  // افزودن محصول جدید به سبد – Add new product to cart
        } else {
            alert("این محصول در سبد خرید موجود است.")  // هشدار وجود محصول – Alert if product already in cart
        }
    }

    const increase = (id) => {
        cart.forEach(item => {
            if (item._id === id) {
                item.count += 1;  // افزایش تعداد محصول – Increase product quantity
            }
        })
        setCart([...cart])
    }

    const decrease = (id) => {
        cart.forEach(item => {
            if (item._id === id) {
                item.count === 1 ? item.count = 1 : item.count -= 1;  // جلوگیری از کاهش زیر ۱ – Prevent quantity below 1
            }
        })
        setCart([...cart])
    }

    const removeProduct = (id) => {
        if (window.confirm("آیا از حذف محصول مطمئنید؟")) {
            cart.forEach((item, index) => {
                if (item._id === id) {
                    cart.splice(index, 1)  // حذف محصول از آرایه – Remove product from array
                }
            })
            setCart([...cart])
        }
    }

    const value = {
        products: [products, setProducts],
        cart: [cart, setCart],
        addCart: addCart,
        increase: increase,
        decrease: decrease,
        removeProduct: removeProduct,
    }

    return (
        <DataContext.Provider value={value}> {/* فراهم‌سازی داده‌ها برای کامپوننت‌های فرزند – Provide data to child components*/}
            {props.children}
        </DataContext.Provider>
    )
}
