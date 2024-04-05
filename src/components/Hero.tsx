import deco from "@/assets/images/decorated-pattern.svg";
import img1 from "@/assets/img/heroSlider/1.jpg";
import img2 from "@/assets/img/heroSlider/2.jpg";
import img3 from "@/assets/img/heroSlider/3.jpg";
import "swiper/css";
import "swiper/css/effect-fade";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Button } from "./ui/button";

export const Hero = () => {
  const Slides = [img1, img2, img3];
  return (
    <section id="hero" className="relative">
      <Swiper
        className="h-[580px] lg:h-[720px] xl:h-[900px] bg-black/50"
        modules={[Autoplay]}
        autoplay={{ delay: 4000 }}
      >
        {Slides.map((img, index) => {
          return (
            <SwiperSlide key={index} className="h-full bg-black/40">
              <div className="w-full h-full absolute">
                <img className="w-full h-full object-cover" src={img} alt="" />
              </div>
              <div className="absolute bg-black/80 top-0 left-0 w-full h-full z-20 flex items-center justify-center flex-col">
                <div className="container flex flex-col gap-y-5 items-center">
                  <h1 className="xl:text-5xl md:text-xl text-sm mt-20 md:mt-0 font-bold text-secondary text-center">
                    Relax at the bedrooms with Comfy Couches
                  </h1>
                  <div className="w-1/3">
                    <img src={deco} alt="" className="object-cover w-full" />
                  </div>
                  <p className="text-secondary md:text-md lg:text-xl xl:text-2xl my-3 text-center">
                    Everything for an active vacation
                    <br /> and lucure experience lover.
                  </p>
                  <Button
                    variant={"accent"}
                    className="lg:px-7 lg:py-5 px-5 py-3 mt-7 cursor-pointer"
                  >
                    EXPLORE NOW
                  </Button>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};
