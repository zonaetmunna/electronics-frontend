import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";

const Slider = () => {
  return (
    <div className='container'>
      <Swiper
        spaceBetween={50}
        onSlideChange={() => console.log('slide change')}
        // onSwiper={(swiper) => console.log(swiper)}
        autoplay={true}
      >
        <SwiperSlide>
          <img src='https://i.ibb.co/fQNVj0f/download-1.jpg' alt='watch' />
        </SwiperSlide>
        <SwiperSlide>
          <img src='https://i.ibb.co/fQNVj0f/download-1.jpg' alt='watch' />
        </SwiperSlide>
        <SwiperSlide>
          <img src='https://i.ibb.co/fQNVj0f/download-1.jpg' alt='watch' />
        </SwiperSlide>
        <SwiperSlide>
          <img src='https://i.ibb.co/fQNVj0f/download-1.jpg' alt='watch' />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
