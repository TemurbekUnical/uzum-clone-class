import React from "react";
// import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
import { SlaydStyle } from "./Slayd.style";
import "./Slayd.style";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Slayd = () => {
  return (
    <SlaydStyle className="headerDiv container ">
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper "
      >
        {/* https://uzum.uz/uz/category/v-shkolu--194 */}
        <SwiperSlide>
          <img
            src="https://images.uzum.uz/cj3romd40v9pplt72ac0/main_page_banner.jpg"
            alt=""
          />{" "}
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJN1I8nbAGeIe5vclylEjyt3KzRd1WuwAhkhkpn4Tmmx1Ya6qxyvKsuqCiK0iIm6R6pYQ&usqp=CAU"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://images.uzum.uz/cj8d8u3k9fq5pecuhlog/main_page_banner.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://images.uzum.uz/cj6ce030lbjbpr7fcr20/main_page_banner.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://images.uzum.uz/cj6cekd6sfhggrk1kqvg/main_page_banner.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://images.uzum.uz/cj3rrljltlh4bk4otg5g/main_page_banner.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://images.uzum.uz/cj48vbj6edfostik6ig0/main_page_banner.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOnLGeJG_5ro6asKSYpoSF8OO81nxwmEH0TUt8rcGfPA1Evz0lOcDOqfnAFwM-AOO_TkA&usqp=CAU"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOnLGeJG_5ro6asKSYpoSF8OO81nxwmEH0TUt8rcGfPA1Evz0lOcDOqfnAFwM-AOO_TkA&usqp=CAU"
            alt=""
          />
        </SwiperSlide>
      </Swiper>
    </SlaydStyle>
  );
};

export default Slayd;
