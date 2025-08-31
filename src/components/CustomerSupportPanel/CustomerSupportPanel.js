import React, { useState } from 'react';
import './CustomerSupportPanel.css';
import img1 from './img/1.jfif';
import img2 from './img/2.jfif';
import img6 from './img/3.jfif';

import { FaTelegramPlane, FaWhatsapp, FaInstagram } from 'react-icons/fa';

// کارت مشاور با تصویر قابل کلیک و افکت فعال‌سازی – Support Card with Clickable Image and Activation Effect

const IconImageToggle = () => {
  const [isActive, setIsActive] = useState(false);
  // تغییر وضعیت فعال بودن کارت با کلیک – Toggle card activation on click
  const handleClick = () => {
    setIsActive(!isActive);
  };

  return (
<div className='tog'>

         {/* محفظه کارت با کلاس فعال در صورت کلیک – Card container with active class on click */}
    <div className={`containeer${isActive ? ' active' : ''}`}>
      <div className="wrapper">
        <img 
          src={img1}
          alt="toggleable" 
          className={`${isActive ? 'active' : ''}`}
          onClick={handleClick}
        />
                  {/* نام مشاور – Advisor name */}
        <div className='title'> علی محمدی </div>
                  {/* عنوان خدمات مشاوره – Support service title */}
        <div className='place'>مشاوره رایگان خریدموبایل </div>
      </div>
              {/* توضیحات مشاور – Advisor description */}
<div className='contentt'>
  <p>  مشاور فروش و بازاریابی آنلاین با 5 سال تجربه</p>
  <div className='buttonn'>
    <div className='btn'>
<button>ارسال پیام</button>
    </div>

  </div>
  </div>    
    <ul className={`icon${isActive ? ' active' : ''}`}>
        <li><a href="/"> <FaInstagram /></a></li>
        <li><a href="/"> <FaTelegramPlane /></a></li>
        <li><a href="/"><FaWhatsapp /></a></li>
      </ul>
    </div>
    <div className={`containeer${isActive ? ' active' : ''}`}>
      <div className="wrapper">
        <img 
          src={img2}
          alt="toggleable" 
          className={`${isActive ? 'active' : ''}`}
          onClick={handleClick}
        />
        <div className='title'> امیر پیری </div>
        <div className='place'> تعمیرکار تخصصی موبایل</div>
      </div>
<div className='contentt'>
  <p>با بیش از ده سال تجربه در تعمیرات تخصصی موبایل، آماده‌ام تا گوشی شما را به بهترین شکل تعمیر کنم.</p>
  <div className='buttonn'>
          {/* دکمه ارسال پیام – Send message button */}
    <div className='btn'>
    <button>ارسال پیام</button>
    </div>
  </div>
  </div>    
    <ul className={`icon${isActive ? ' active' : ''}`}>
        <li><a href="/"> <FaInstagram /></a></li>
        <li><a href="/"> <FaTelegramPlane /></a></li>
        <li><a href="/"><FaWhatsapp /></a></li>
      </ul>
    </div>

    <div className={`containeer${isActive ? ' active' : ''}`}>
      <div className="wrapper">
        <img 
          src={img6}
          alt="toggleable" 
          className={`${isActive ? 'active' : ''}`}
          onClick={handleClick}
        />
        <div className='title'>سهیل یوسفی </div>
        <div className='place'> مدیرخدمات پس از فروش</div>
      </div>
<div className='contentt'>
  <p>مدیریت بازگشت وتعویض کالا,ارايه گارانتی وخدمات پس از فروش </p>
  <div className='buttonn'>

    <div className='btn'>
    <button>ارسال پیام</button>
    </div>
  </div>
  </div>  
      <ul className={`icon${isActive ? ' active' : ''}`}>
        <li><a href="/"> <FaInstagram /></a></li>
        <li><a href="/"> <FaTelegramPlane /></a></li>
        <li><a href="/"><FaWhatsapp /></a></li>
      </ul>  
    </div>
    

</div>
  );
};

export default IconImageToggle;
