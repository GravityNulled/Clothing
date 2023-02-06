import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Card from "./Card";
import { Pagination, Navigation, Autoplay } from "swiper";
import BrownHat from "../assets/images/BrownHat.jpg";
import BrownJacket from "../assets/images/BrownJacket.jpg";
import Jacket from "../assets/images/Jacket.jpg";
import Jacket2 from "../assets/images/Jacket2.jpg";
import model from "../assets/images/model.jpg";
import pink from "../assets/images/pink.jpg";
import blueDress from "../assets/images/blueDress.jpg";
import shirtHanger from "../assets/images/shirtHanger.jpg";
import BlueTshirt from "../assets/images/BlueTshirt.jpg";
import NikeAirMax from "../assets/images/NikeAirMax.jpg";
import WomenHeels from "../assets/images/WomenHeels.jpg";
const Home = () => {
  return (
    <section className="py-2 h-[90vh]">
      <div className="container mx-auto md:w-5/6">
        <Swiper
          autoplay={{
            delay: 2000,
          }}
          navigation={true}
          modules={[Pagination, Navigation, Autoplay]}
        >
          <SwiperSlide>
            <div className="relative w-full h-[600px]">
              <img
                src={BrownHat}
                className="w-full object-cover h-[100%]"
                alt="brownhat"
              />
              <div className="absolute top-[40%] md:top-[40%] md:left-[60%]  text-white flex flex-col  px-8 py-3">
                <h1 className="font-bold uppercase md:text-3xl">Summer Sale</h1>
                <p>DONT COMPROMISE ON STYLE! GET FLAT 30% OFF</p>
                <button className="px-2 w-[150px] border-black border-[1px] outline-none mt-10 bg-white text-black">
                  SHOP NOW
                </button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative w-full h-[600px]">
              <img
                src={BrownJacket}
                className="w-full object-cover h-[100%]"
                alt="brownJacket"
              />
              <div className="absolute top-[40%] md:top-[40%] md:left-[60%]  text-white flex flex-col  px-8 py-3">
                <h1 className="font-bold uppercase md:text-3xl">Summer Sale</h1>
                <p>DONT COMPROMISE ON STYLE! GET FLAT 30% OFF</p>
                <button className="px-2 w-[150px] border-black border-[1px] outline-none mt-10 bg-white text-black">
                  SHOP NOW
                </button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative w-full h-[600px]">
              <img
                src={shirtHanger}
                className="w-full object-cover h-[100%]"
                alt="shirts"
              />
              <div className="absolute top-[40%] md:top-[40%] md:left-[60%]  text-white flex flex-col  px-8 py-3">
                <h1 className="font-bold uppercase md:text-3xl">Summer Sale</h1>
                <p>DONT COMPROMISE ON STYLE! GET FLAT 30% OFF</p>
                <button className="px-2 w-[150px] border-black border-[1px] outline-none mt-10 bg-white text-black">
                  SHOP NOW
                </button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative w-full h-[600px]">
              <img
                src={WomenHeels}
                className="w-full object-cover h-[100%]"
                alt="Women  Heels"
              />
              <div className="absolute top-[40%] md:top-[40%] md:left-[60%]  text-white flex flex-col  px-8 py-3">
                <h1 className="font-bold uppercase md:text-3xl">Summer Sale</h1>
                <p>DONT COMPROMISE ON STYLE! GET FLAT 30% OFF</p>
                <button className="px-2 w-[150px] border-black border-[1px] outline-none mt-10 bg-white text-black">
                  SHOP NOW
                </button>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
        <div className="grid md:grid-cols-3 justify-center gap-2 mt-10 items-center">
          <Card img={Jacket} title={"Shirt Style!"} />
          <Card img={Jacket2} title={"Loungewear"} />
          <Card img={model} title={"Light Jacket"} />
        </div>
        <div className="grid md:grid-cols-2 justify-center gap-4 mt-10 items-center">
          <Card img={pink} title={"Shirt Style!"} />
          <Card img={blueDress} title={"The Perfect Dress "} />
        </div>
      </div>
    </section>
  );
};

export default Home;
