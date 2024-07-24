import React, { useRef } from 'react'
import { FaChartArea, FaStopwatch } from "react-icons/fa";
import Cars from '../../../../assets/images/car-01.png'
import Cars1 from '../../../../assets/images/car-02.png'
import Cars2 from '../../../../assets/images/car-03.png'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { IoMdSettings } from "react-icons/io";
import { MdLinearScale } from "react-icons/md";


const Car = () => {
    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
      progressCircle.current.style.setProperty('--progress', 1 - progress);
      progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    };
  return (
    <>
      
      
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 6500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className='recommend__car-card'>
            <div className='recommend__car-top'>
              <h5><span><FaChartArea /></span></h5>
            </div>
            <div className='recommend__car-img'>
              <img src={Cars} />
            </div>
            <div className='recommend__car-bottom'>
              <h4>Marque</h4>

              <div className='recommend__car-other'>
                <div className='recommend__car-icons'>
                  <p>Matricule</p>
                  <p><IoMdSettings /></p>
                  <p><FaStopwatch /></p>
                  <p>Prix/jour</p>
                </div>
              </div>

            </div>

          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='recommend__car-card'>
            <div className='recommend__car-top'>
              <h5><span><FaChartArea /></span></h5>
            </div>
            <div className='recommend__car-img'>
              <img src={Cars2} />
            </div>
            <div className='recommend__car-bottom'>
              <h4>Marque</h4>

              <div className='recommend__car-other'>
                <div className='recommend__car-icons'>
                  <p>Matricule</p>
                  <p><IoMdSettings /></p>
                  <p><FaStopwatch /></p>
                  <p>Prix/jour</p>
                </div>
              </div>

            </div>

          </div>
        </SwiperSlide>
       
        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </>

  )
}

export default Car
