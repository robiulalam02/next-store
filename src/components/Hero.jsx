"use client";

import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import { Autoplay, Navigation, Pagination } from "swiper/modules";

const Hero = () => {
    return (
        <div className='lg:h-[600px]'>
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={30}
                slidesPerView={1}
                navigation
                autoplay={{delay: 3000}}
                loop={true}
                pagination={{ clickable: true }}
                className='rounded-xl overflow-hidden'
            >
                <SwiperSlide className='rounded-2xl overflow-hidden'>
                    <div>
                        <img src="/banner/banner-1.png" alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide className='rounded-2xl overflow-hidden'>
                    <div>
                        <img src="/banner/banner-2.png" alt="" />
                    </div>
                </SwiperSlide >
                <SwiperSlide className='rounded-2xl overflow-hidden'>
                    <div>
                        <img src="/banner/banner-3.png" alt="" />
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default Hero
