import React, { useState } from 'react';
import './CustomerSupportPanel.css';
import img1 from './img/1.jfif';
import img2 from './img/2.jfif';
import img6 from './img/3.jfif';

import { FaTelegramPlane, FaWhatsapp, FaInstagram } from 'react-icons/fa';

// کارت مشاور با تصویر قابل کلیک و افکت فعال‌سازی – Support Card with Clickable Image and Activation Effect

const advisors = [
  {
    id: 1,
    name: 'علی محمدی',
    title: 'مشاوره رایگان خریدموبایل',
    description: 'مشاور فروش و بازاریابی آنلاین با 5 سال تجربه',
    image: img1,
  },
  {
    id: 2,
    name: 'امیر پیری',
    title: 'تعمیرکار تخصصی موبایل',
    description: 'با بیش از ده سال تجربه در تعمیرات تخصصی موبایل، آماده‌ام تا گوشی شما را به بهترین شکل تعمیر کنم.',
    image: img2,
  },
  {
    id: 3,
    name: 'سهیل یوسفی',
    title: 'مدیرخدمات پس از فروش',
    description: 'مدیریت بازگشت وتعویض کالا,ارايه گارانتی وخدمات پس از فروش',
    image: img6,
  },
];

const IconImageToggle = () => {
  const [activeId, setActiveId] = useState(null); // وضعیت فعال بودن هر کارت – Active card state

  // تغییر وضعیت فعال بودن کارت با کلیک – Toggle card activation on click
  const handleClick = (id) => {
    setActiveId(prev => (prev === id ? null : id));
  };

  return (
    <div className='tog'>
      {advisors.map(advisor => (
        <div key={advisor.id} className={`containeer${activeId === advisor.id ? ' active' : ''}`}>
          {/* محفظه کارت با کلاس فعال در صورت کلیک – Card container with active class on click */}
          <div className="wrapper">
            <img
              src={advisor.image}
              alt="toggleable"
              className={`${activeId === advisor.id ? 'active' : ''}`}
              onClick={() => handleClick(advisor.id)}
            />
            {/* نام مشاور – Advisor name */}
            <div className='title'>{advisor.name}</div>
            {/* عنوان خدمات مشاوره – Support service title */}
            <div className='place'>{advisor.title}</div>
          </div>

          {/* توضیحات مشاور – Advisor description */}
          <div className='contentt'>
            <p>{advisor.description}</p>
            <div className='buttonn'>
              <div className='btn'>
                <button>ارسال پیام</button>
              </div>
            </div>
          </div>

          <ul className={`icon${activeId === advisor.id ? ' active' : ''}`}>
            <li><a href="/"> <FaInstagram /></a></li>
            <li><a href="/"> <FaTelegramPlane /></a></li>
            <li><a href="/"><FaWhatsapp /></a></li>
          </ul>
        </div>
      ))}
    </div>
  );
};

export default IconImageToggle;
