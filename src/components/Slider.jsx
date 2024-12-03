import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import slider1 from "../images/slider/image 22.svg";
import slider2 from "../images/slider/Mask Group.svg";
import right from "../images/arrow_right.svg";
import left from "../images/Vector 21 (Stroke).svg";

export default function Slider() {
  const slides = [
    {
      image: slider1,
      description: "ЛААЫФААЫФААФАФАФА.",
    },
    {
      image: slider1,
      description: "ЛААЫФААЫФААФАФАФА.",
    },
    {
      image: slider1,
      description: "ФЫЫВФЫА.",
    },
    {
      image: slider1,
      description: "12312.",
    },
    {
      image: slider1,
      description: "ЛААЫФААЫФААФАФАФА.",
    },
    {
      image: slider1,
      description: "ФЫВ.",
    },
  ];

  const [currentPage, setCurrentPage] = useState(1); 

  return (
    <section className="slider">
      <div className="slider__block">
        <h2 className="slider__name">Зонак комфорта</h2>
        <div className="slider__imagesBlocks">
          <Swiper
            modules={[Navigation, Pagination]}
            navigation={{
              nextEl: ".slider__next",
              prevEl: ".slider__prev",
            }}
            loop={true}
            onSlideChange={(swiper) => setCurrentPage(swiper.realIndex + 1)} 
            className="custom-swiper"
            speed={1000}
            slidesPerView={1.1}
            spaceBetween={20}
          >
            {slides.map((slide, index) => (
              <SwiperSlide key={index} className="slider__image">
                <img
                  src={slide.image}
                  alt={`Slide ${index + 1}`}
                  className="slider__photo"
                />
              </SwiperSlide>
            ))}
          </Swiper>

      
          <div className="slider__controls">
            <div className="slider__numbers">
              <span className="slider__number">
                {currentPage}/{slides.length}
              </span>
            </div>
            <p className="slider__subbtitle">
            {slides[currentPage - 1]?.description}
          </p>
            <div className="slider__button">
              <button className="slider__prev">
                <img src={left} alt="Previous" />
              </button>
              <button className="slider__next">
                <img src={right} alt="Next" />
              </button>
              
            </div>
          </div>

     
         
        </div>
      </div>
    </section>
  );
}
