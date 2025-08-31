import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import { FaShoppingBag } from "react-icons/fa";
import Menu from './svg/bars-solid.svg';
import Close from './svg/times-solid.svg';
import {DataContext} from '../Cart/Context';

function Header() {

     const [menu, setMenu] = useState(false); // وضعیت منو (باز/بسته) – Menu open/close state
     const value = useContext(DataContext); // دسترسی به داده‌های سراسری – Access global context
     const [cart] = value.cart; // تعداد آیتم‌های سبد خرید – Cart items count

     const toggleMenu = () => {
          setMenu(!menu); // تغییر وضعیت منو – Toggle menu state
     }

     const styleMenu = {
          right: menu ? 0 : "-100%" // موقعیت منو در حالت باز یا بسته – Menu position (open/closed)
     }

  return (
  <div>'
       <header>
         <div className="cart-icon"> {/* آیکون سبد خرید با تعداد – Cart icon with item count */}
              <span>{cart.length}</span>
              <Link to="/cart">
                    <FaShoppingBag />
              </Link>
         </div>
         <ul style={styleMenu}> {/* منوی ناوبری سایت – Site navigation menu */}
              <li><img src={Close} width="30" className="menu" alt="" onClick={toggleMenu} /></li> {/* آیکون بستن منو – Close menu icon */}
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
