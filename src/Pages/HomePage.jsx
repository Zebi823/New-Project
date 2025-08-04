import React,{useState} from 'react';
import { ArrowRight ,ChevronRight, } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import ProductCards from "../components/ProductCards"
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Navbar from './Navbar';

const HomePage = () => {
   const slides = [
    {
      img: "https://wallpapercat.com/w/full/8/6/f/1326831-3840x2160-desktop-4k-gadget-wallpaper-photo.jpg",
      offer: "10% OFF Vouchers!",
    },
    {
      img: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8",
      offer: "Up to 20% OFF Tech Deals!",
    },
    {
      img: "https://images.unsplash.com/photo-1503602642458-232111445657",
      offer: "Mega Sale on Smart Devices!",
    },
  ];

  return (
    <>
      <Navbar active={true}/>

      <main className="flex flex-col lg:flex-row min-h-80 bg-gray-100 px-12 py-10">
        {/* Left Content */}
         <div className=" lg:w-1/4  ">
 <div className="pl-3 pr-4  border-r border-gray-400 h-full space-y-4  text-gray-800 text-base font-medium">
      {[
        "Women's Fashion",
        "Men's Fashion",
        "Electronics",
        "Health and Beauty",
        "Gadgets",
        "Groceries and Pets",
        "Sports and Outdoor",
        "Medicines",
        "Home and Lifestyles"
      ].map((item, index) => (
        <div
          key={index}
          className="flex items-center w-50 justify-between hover:text-red-700 transition-all duration-200 cursor-pointer"
        >
          <span>{item}</span>
          {(item === "Women's Fashion" || item === "Men's Fashion") && (
            <ChevronRight size={18} className="text-gray-500" />
          )}
        </div>
      ))}
    </div>
</div>


     
            <div className="relative lg:w-3/4  pr-2 pl-12">
      <Swiper
      slidesPerView={1}
      spaceBetween={30}
        modules={[Navigation, Pagination, Autoplay]}
        loop={true}
         autoplay={{
          delay: 2500,
           disableOnInteraction: false,
            }}
        pagination={{ clickable: true }}
        navigation={true}
        className="rounded-lg relative"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative">
              <img
                src={slide.img}
                alt="Slide Image"
                className="w-full h-auto shadow-lg max-h-[350px] object-cover"
              />
          
   <div className="absolute inset-0 flex flex-col items-start justify-center pl-10 space-y-4 ">
           <h2 className="text-white text-3xl font-extrabold leading-snug">
                  {slide.offer.split(" ")[0]}{" "}
                  <span className="text-yellow-300">
                    {slide.offer.split(" ")[1]}
                  </span>
                  <br />
                  {slide.offer.split(" ").slice(2).join(" ")}
                </h2>
                <button className="text-white px-1 py-2 flex items-center gap-1 border-b">
                  Shop Now <ArrowRight stroke="currentColor" size={20} />
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      </div>
      </main>

      
      <div className="text-1xl  text-start bg-gray-100 py-6 ">
          <h1 className='font-bold text-red-700 leading-tight py-3 ml-14'> Today's </h1> 
           <h1 className='font-bold leading-tight  ml-14 text-3xl text-black-700 text-start
            bg-gray-100 py-3'>Best Selling Products</h1>
      </div>

    
      <ProductCards/>
  
  

 




    </>
  );
};

export default HomePage;
      