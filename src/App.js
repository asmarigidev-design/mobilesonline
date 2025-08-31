import {BrowserRouter} from 'react-router-dom';  // برای مدیریت مسیرها – For routing management
import { DataProvider } from './components/Cart/Context';  // فراهم‌کننده داده‌ها برای سبد خرید – Context provider for cart data
import Header from './components/Header/Header';  // کامپوننت هدر – Header component
import Content from './components/Content';  // محتوای اصلی سایت – Main content component

function App() {
  return (
   <DataProvider>  {/* فراهم کردن داده‌ها برای کل اپلیکیشن – Provide shared data to the entire app */}
      <div className="main-website">  {/* ساختار اصلی سایت – Main website layout */}
        <div className="container">  {/* کانتینر مرکزی برای محتوا – Central content container */}
          <BrowserRouter>  {/* فعال‌سازی مسیرهای SPA – Enable single-page app routing */}
            <Header />  {/* نمایش هدر در تمام صفحات – Display header on all pages */}
            <Content />  {/* نمایش محتوای متغیر بر اساس مسیر – Render content based on route */}
          </BrowserRouter>
        </div>
      </div>
   </DataProvider>
  );
}

export default App;