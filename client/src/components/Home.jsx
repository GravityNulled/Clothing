import React from "react";
import { BiShoppingBag } from "react-icons/bi";
import { BannerSlider, cardData } from "../data";
import HomeSlider from "./HomeSlider";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Card from "./Card";
import { Pagination, Navigation, Autoplay } from "swiper";
import ProductList from "./ProductList";
import { Mailing } from "./Mailing";
const Home = () => {
  return (
    <section className="w-full">
      <div className="container mx-auto md:w-5/6">
        <Swiper
          autoplay={{
            delay: 2500,
          }}
          navigation={true}
          modules={[Pagination, Navigation, Autoplay]}
        >
          {BannerSlider.map((banner, index) => {
            return (
              <SwiperSlide key={index}>
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

        {/* CATEGORIES */}
        <div className="grid gap-4 mt-3 md:grid-cols-2 xl:grid-cols-3">
          {cardData.map((card, index) => {
            return <Card key={index} img={card.img} title={card.title} />;
          })}
        </div>
        {/* Product List */}
        <ProductList />

        {/* Mailing List */}
        <Mailing />
      </div>
    </section>
  );
};

export default Home;
