import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (<>
  <section className='crousel p-5 mt-5'>
    <div className='container text-light'>
      <Slider {...settings}>
         <div className='crousel-image p-1'> <img src='/images/w3.jpg'/>
         <div className='overlay'> 
         </div>
         </div>
         <div className='crousel-image p-1'> <img src='/images/s2.jpg'/>
         <div className='overlay'></div></div> 
         <div className='crousel-image p-1'> <img src='/images/w4.jpg'/>
         <div className='overlay'></div></div> 
         <div className='crousel-image p-1'> <img src='/images/w6.jpg'/>
         <div className='overlay'></div></div>  
         <div className='crousel-image p-1'> <img src='/images/s3.jpg'/>
         <div className='overlay'></div></div> 
         <div className='crousel-image p-1'> <img src='/images/m8.jpg'/>
         <div className='overlay'></div> </div>
         <div className='crousel-image p-1'> <img src='/images/s7.jpg'/>
         <div className='overlay'></div>
            </div>  
      </Slider>
      </div>
    </section>
    </>
  );
};

export default Carousel;
