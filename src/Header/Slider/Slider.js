import React, { useRef, useState } from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";


// import required modules
import { Pagination } from "swiper";

const Slider = () => {
    return (
        <div>
            <>
            <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
            <h1 class="h1-large">The Reward Currency of An Active Lifestyle</h1>
            <p class="p-large">Simple and fun app to help you live an active life while winning points redeemable for awesome prizes.</p>
        </SwiperSlide>
        <SwiperSlide>
            <h1 class="h1-large">Make Healthy Habits Stick, One Point at a Time</h1>
            <p class="p-large">Contests, challenges, games, and other engaging content are designed to keep you active. Capture fun moments and inspire friends and family to embrace an active life.</p>
        </SwiperSlide>
        <SwiperSlide>
            <h1 class="h1-large">Contribute to Active Travel & Health Research</h1>
            <p class="p-large">Effect positive changes in your health and help improve the community in which you live, work, or play by sharing your thoughts and completing surveys.</p>
        </SwiperSlide>
      </Swiper></>
        </div>
    )
}

export default Slider;