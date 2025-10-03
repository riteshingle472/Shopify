import React from "react";
import Swiper1 from "../../assets/Swiper1.jpg";
import Swiper2 from "../../assets/Swiper2.jpg";
import Swiper3 from "../../assets/Swiper3.jpg";
import Swiper4 from "../../assets/Swiper4.webp";
import Swiper5 from "../../assets/Swiper5.webp";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { FaLeftLong, FaRightLong } from "react-icons/fa6";

const SwiperSlider = () => {

  return (
    <section className="max-w-[1300px] mx-auto py-10 sm:px-12 px-5 mb-10">

      <div className="text-center py-3">
        <h1 className="text-4xl text-zinc-800 font-bold">
          Our Collection
        </h1>
      </div>

      <div className="flex gap-3 my-5 justify-between">
          <button className="custom-prev text-xl sm:text-2xl text-white bg-blue-600 active:bg-blue-700 p-2 rounded-md"><FaLeftLong/></button>
          <button className="custom-next text-xl sm:text-2xl text-white bg-blue-600 active:bg-blue-700 p-2 rounded-md"><FaRightLong/></button>
      </div>
      
      <div className=" w-full md:h-[50vh] h-[25vh]">
        <div className="flex w-full h-full justify-center rounded-lg">
          <Swiper
            pagination={{
              type: "fraction",
            }}
            navigation={{
              nextEl:'.custom-next',
              prevEl:'.custom-prev',
            }}
            loop={true}
            modules={[Pagination, Navigation]}
            className="mySwiper"
          >
            <SwiperSlide><img src={Swiper1} className="w-full h-full object-contain" /></SwiperSlide>
            <SwiperSlide><img src={Swiper2} className="w-full h-full object-contain " /></SwiperSlide>
            <SwiperSlide><img src={Swiper3} className="w-full h-full object-contain " /></SwiperSlide>
            <SwiperSlide><img src={Swiper4} className="w-full h-full object-contain " /></SwiperSlide>
            <SwiperSlide><img src={Swiper5} className="w-full h-full object-contain " /> </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default SwiperSlider;
