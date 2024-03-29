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
    <section className="relative">
      <Swiper
        className="h-[580px] lg:h-[720px] xl:h-[900px] bg-black/50"
        modules={[Autoplay]}
        autoplay={{ delay: 3000 }}
      >
        {Slides.map((img, index) => {
          return (
            <SwiperSlide key={index} className="h-full bg-black/40">
              <div className="w-full h-full absolute">
                <img className="w-full h-full object-cover" src={img} alt="" />
              </div>
              <div className="absolute bg-black/80 top-0 left-0 w-full h-full z-20 flex items-center justify-center flex-col">
                <div className="container flex flex-col gap-y-5 items-center">
                  <Button variant={"accent"} className="px-7 py-5 mt-7">
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
