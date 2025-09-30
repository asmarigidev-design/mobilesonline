import React, { useState, useEffect } from 'react';  
import './HomePage.css';  
import image2 from '../img/mm.webp';  
import image3 from '../img/mm.webp';  
import image4 from '../img/mm.webp';  
import image5 from '../img/mm.webp';  
import image6 from '../img/xx.jfif';  
import image7 from '../img/H.jfif';  
import image8 from '../img/S.jfif';  
import image9 from '../img/I.jfif';  
import AOS from 'aos';  
import 'aos/dist/aos.css';  

// اسلایدر صفحه اصلی با پس‌زمینه و متن متحرک، تصویر ثابت – Homepage slider with animated background and text, static image

const slides = [  
  { 
    image: image2, 
    text: 'تجربه‌ی عالی از خرید موبایل آنلاین', 
    bgColor: '#76b947' // سرمه‌ای تیره با حس مدرن و لوکس 
  },  
  { 
    image: image3, 
    text: 'تخفیف‌های ویژه برای کاربران جدید', 
    bgColor: '#2f5233' // بنفش سلطنتی دیجیتال 
  },  
  { 
    image: image4, 
    text: 'پشتیبانی 24 ساعته و پاسخگویی سریع', 
    bgColor: '#۹۴c۹۷۳' // کرم طلایی ملایم برای حس گرم و حرفه‌ای 
  },  
  { 
    image: image5, 
    text: 'تحویل سریع و مطمئن در سراسر کشور', 
    bgColor: '#b1d8b7' // سبز آبی عمیق و متعادل 
  }  
];

function HomePage() {  
  useEffect(() => {  
    AOS.init({ duration: 1000 });  
  }, []);  

  const [currentSlide, setCurrentSlide] = useState(0);  
  const [hovered, setHovered] = useState(Array(4).fill(false)); // ایجاد آرایه برای کنترل وضعیت هاور  

  useEffect(() => {  
    const interval = setInterval(() => {  
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);  
    }, 3000);  
    return () => clearInterval(interval);  
  }, []);  

  const goToSlide = (index) => {  
    setCurrentSlide(index);  
  };  

  const handleMouseEnter = (index) => {  
    const newHovered = [...hovered];  
    newHovered[index] = true; // وضعیت هاور برای این کانتینر را فعال کن  
    setHovered(newHovered);  
  };  

  const handleMouseLeave = (index) => {  
    const newHovered = [...hovered];  
    newHovered[index] = false; // وضعیت هاور برای این کانتینر را غیرفعال کن  
    setHovered(newHovered);  
  };  

 return (  
  <div>  
      {/* کانتینر اصلی اسلایدر با رنگ پس‌زمینه پویا از اسلاید فعلی – Main slider container with dynamic background color from current slide */}
<div
  className="slider-container"
  style={{
    backgroundColor: slides[currentSlide].bgColor,
border: '5px solid #b1d8b7 ' // بنفش مه‌آلود – Misty purple border
  }}
>
          {/* حلقه برای رندر کردن هر اسلاید – Loop to render each slide */}
      {slides.map((slide, index) => (  
        <div className={`slide ${currentSlide === index ? 'active' : ''}`} key={index}>  
                {/* متن بالای تصویر با انیمیشن ورود – Top text with fade-up animation */}
          <div className="slide-text top" style={{ color: slides[currentSlide].bgColor }} data-aos="fade-up">  
            <h2>{slide.text}</h2>  
          </div>  
                  {/* تصویر اصلی اسلاید – Main slide image */}
          <img src={slide.image} alt={`Slide ${index + 1}`} className="slide-image" style={{ flex: '1', maxWidth: '100%', height: 'auto' }} />  
          <div className="slide-text bottom" style={{ }} data-aos="fade-up">  
                    {/* متن پایین تصویر با انیمیشن ورود – Bottom text with fade-up animation */}
            <h2>{slide.text}</h2>  
          </div>  
        </div>  
      ))}  
          {/* دکمه‌های نقطه‌ای برای تغییر اسلاید – Dot buttons to navigate between slides */}
      <div className="dots">  
        {slides.map((_, index) => (  
          <span key={index} className={`dot ${currentSlide === index ? 'active' : ''}`} onClick={() => goToSlide(index)}></span>  
        ))}  
      </div>  
    </div>  
{/*    کارت‌های محصول با افکت هاور: نمایش توضیحات برند و لینک محصول از پایین با پس‌زمینه شفاف (فعلاً فقط لینک آیفون فعال است) – Product cards with hover effect: reveal brand info and product link from bottom with transparent background (currently only iPhonelinke active)
*/}
    <div className='cartbody'>  
      {[image6, image7, image8, image9].map((image, index) => (  
        <div  
          className='slider-containerr'  
          style={{ backgroundImage: `url(${image})` }}  
          onMouseEnter={() => handleMouseEnter(index)}  
          onMouseLeave={() => handleMouseLeave(index)}  
          key={index}  
        >  
              {/* نمایش محتوای کارت فقط در حالت hover – Show card content only when hovered */}
          {hovered[index] && (  
         <div className='card-content' data-aos="fade-up"> 
                   {/* لینک به صفحه مربوط به برند – Link to brand-specific page */} 
         <div className="brand-card">
  <h3>{['Xiaomi', 'Huawei', 'Samsung', 'iPhone'][index]}</h3>
  {/* عنوان برند – Brand title */}

  <p>{[
    'شرکت شیاومی با تولید محصولات مقرون به صرفه، توانسته است جایگاه ویژه‌ای در بازار به دست آورد.',
    'هوآوی با کیفیت بالا، از جمله برندهای معتبر و محبوب در دنیای موبایل محسوب می‌شود.',
    'سامسونگ با تولید گوشی‌های هوشمند یکی از بزرگترین و معتبرترین برندهای موبایل در جهان است.',
    'آیفون  با طراحی‌های بی‌نظیر و عملکرد بالا، تجربه‌ای بی‌نظیر را برای کاربران فراهم می‌کند.'
  ][index]}</p>
  {/* توضیح برند – Brand description */}

  {/* فقط دکمه داخل لینک باشد */}
  <a href={`/${['products', 'products', 'products', 'products'][index]}`} style={{ textDecoration: 'none' }}>
    <button>مشاهده</button>
  </a>
</div>

       </div> 
          )}  
        </div>  
      ))}  
    </div>  
  </div>  
);
}  

export default HomePage;