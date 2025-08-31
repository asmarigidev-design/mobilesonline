import React, { useContext, useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import { DataContext } from './Context';
import formatCurrency from './util';
import { Link } from 'react-router-dom';
import { FaTimes } from 'react-icons/fa'; // آیکون بستن – Close icon

function Details() {
  const { id } = useParams();
  const value = useContext(DataContext);
  const [products,] = value.products;
  const [index, setIndex] = useState(0);
  const addCart = value.addCart;
  const imgDiv = useRef();

  const details = products.filter((product, index) => {
    return product._id === id;
  });

  useEffect(() => {
    // بازنشانی موقعیت اسکرول هنگام بازگشت به صفحه محصولات
    const scrollPosition = sessionStorage.getItem('scrollPosition');
    if (scrollPosition) {
      window.scrollTo(0, parseInt(scrollPosition, 10));
    }
  }, []);

const handleMouseMove = (e) => {
  const { left, top, width, height } = e.target.getBoundingClientRect();
  const x = ((e.pageX - left) / width) * 100;
  const y = ((e.pageY - top) / height) * 100;
  imgDiv.current.style.backgroundPosition = `${x}% ${y}%`;
};


  if (!details.length) {
    return <p>محصول یافت نشد.</p>;
  }

  const product = details[0];


  return (
    <div className="product-details">
     
      <div className="details" key={product._id}>
    <Link to="/products" className="close-btn">
  <FaTimes /> {/* آیکون بستن به‌جای متن – Close icon instead of text */}
</Link>

        <div
          className="img-container"
          style={{ backgroundImage: `url(${product.images[index]})` }}
          onMouseMove={handleMouseMove}
          ref={imgDiv}
          onMouseLeave={() => imgDiv.current.style.backgroundPosition = `center`}
        >
        </div>
        <div className="box-details">
          <h2>{product.title}</h2>
          <h3>{formatCurrency(product.price)}</h3>
          <div className="colors">
            {
              product.colors.map((color, index) => (
                <button key={index} style={{ background: color }}></button>
              ))
            }
          </div>
          <p>{product.description}</p>
          <p>{product.content}</p>
          <div className="thumb">
            {
              product.images.map((img, index) => (
                <img src={img} key={index} onClick={() => setIndex(index)} alt="product" />
              ))
            }
          </div>
          <button className="cart" onClick={() => addCart(product._id)}>افزودن به سبد خرید</button>
        </div>
      </div>
    </div>
  );
}

export default Details;
