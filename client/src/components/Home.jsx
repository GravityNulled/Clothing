import React from "react";
import { BannerSlider } from "../data";
import HomeSlider from "./HomeSlider";
import Footer from "./Footer";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Card from "./Card";
import { Pagination, Navigation, Autoplay } from "swiper";
import ProductList from "./ProductList";
import { Outlet } from "react-router-dom";
const Home = () => {
  return (
    <section className="h-[90vh]">
      <div className="container mx-auto md:w-5/6">
        <Swiper
          autoplay={{
            delay: 2000,
          }}
          navigation={true}
          modules={[Pagination, Navigation, Autoplay]}
        >
          {BannerSlider.map((banner, index) => {
            return (
              <SwiperSlide>
                <div className="flex">
                  <HomeSlider
                    key={index}
                    img={banner.img}
                    heading={banner.heading}
                    para={banner.para}
                  />
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
        <ProductList />
      </div>
      {/* <Outlet /> */}
    </section>
  );
};

export default Home;
