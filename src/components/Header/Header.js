import React, { useState, useContext, useRef, useEffect } from 'react'  // ایمپورت ری‌اکت و هوک‌ها – Import React and hooks
import { Link } from 'react-router-dom'  // لینک‌دهی بین صفحات – Routing between pages
import { FaShoppingBag } from "react-icons/fa";  // آیکون سبد خرید – Shopping cart icon
import Menu from './svg/bars-solid.svg';  // آیکون منو – Menu icon
import Close from './svg/times-solid.svg';  // آیکون بستن – Close icon
import { DataContext } from '../Cart/Context';  // کانتکست داده‌ها – Global data context

function Header() {

     const [menu, setMenu] = useState(false);  // وضعیت منو (باز/بسته) – Menu open/close state
     const value = useContext(DataContext);  // دسترسی به داده‌های سراسری – Access global context
     const [cart] = value.cart;  // تعداد آیتم‌های سبد خرید – Cart items count

     const toggleMenu = () => {
          setMenu(!menu);  // تغییر وضعیت منو – Toggle menu state
     }

     const styleMenu = {
          right: menu ? 0 : "-100%"  // موقعیت منو در حالت باز یا بسته – Menu position (open/closed)
     }

     const menuRef = useRef();  // ارجاع به منوی ناوبری – Reference to menu element

     useEffect(() => {
          const handleClickOutside = (event) => {
               if (menu && menuRef.current && !menuRef.current.contains(event.target)) {
                    setMenu(false);  // بستن منو در صورت کلیک بیرون – Close menu on outside click
               }
          };

          document.addEventListener("mousedown", handleClickOutside);  // گوش دادن به کلیک‌ها – Listen for clicks

          return () => {
               document.removeEventListener("mousedown", handleClickOutside);  // پاک‌سازی – Cleanup
          };
     }, [menu]);  // فقط وقتی منو بازه – Only when menu is open

     return (
          <div>
               <header>
                    <div className="cart-icon"> {/* آیکون سبد خرید با تعداد – Cart icon with item count */}
                         <span>{cart.length}</span>
                         <Link to="/cart">
                              <FaShoppingBag />
                         </Link>
                    </div>

                    <ul style={styleMenu} ref={menuRef}> {/* منوی ناوبری سایت – Site navigation menu */}
                         <li><Link to="/">خانه</Link></li>
                         <li><Link to="/products">محصولات</Link></li>
                         <li><Link to="/aboutus">درباره ما</Link></li>
                         <li><Link to="/customerSupportPanel">تماس با پشتیبانی</Link></li>
                         <li><Link to="/">ثبت نام / ورود</Link></li>
                    </ul>

                    <div className="logo"> {/* لوگوی سایت – Website logo */}
                         <Link to="/">انلاین موبایل</Link>
                    </div>

                    <div className="menu" onClick={toggleMenu}> {/* آیکون باز کردن منو – Open menu icon */}
                         <img src={Menu} width="30" alt="" />
                    </div>
               </header>
          </div>
     )
}

export default Header
