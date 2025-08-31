import React from 'react';
import './AboutUs.css';
import storeImage from '../img/aaa.jfif'; 
// این کامپوننت اطلاعات مربوط به فروشگاه را نمایش می‌دهد.
// This component displays information about the store.

function AboutUs() {
  return (
    <div className="about-us-container">
      <div className="content">
<a href='/'>
<img src={storeImage} alt="Our Store" className="store-image" />

  </a>        <div className="text-content">
          <h2>فروشگاه آنلاین موبایل</h2>
          <p>ما در فروشگاه آنلاین موبایل با ارائه جدیدترین و باکیفیت‌ترین موبایل‌های موجود در بازار، تلاش می‌کنیم تا تجربه خریدی لذت‌بخش و مطمئن را برای شما فراهم کنیم.</p>
          <p>با داشتن مغازه حضوری، شما می‌توانید به راحتی و با اطمینان بیشتر، محصولات ما را از نزدیک مشاهده و خرید کنید. ما افتخار می‌کنیم که با تیمی مجرب و حرفه‌ای، در خدمت شما باشیم.</p>
          <p>آدرس فروشگاه حضوری: خیابان خیام کوچه 23، پلاک 45، اصفهان</p>
          <p>شماره تماس:0923657570807</p>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
