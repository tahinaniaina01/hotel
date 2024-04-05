import img from "@/assets/images/decorated-pattern-2.svg";
import logoHotel from "@/assets/images/icons/hotel.svg";
import room1 from "@/assets/images/room-1.png";
import room2 from "@/assets/images/room-2.png";
import room3 from "@/assets/images/room-3.png";

function About() {
  return (
    <section id="abouts">
      <div className="container my-5">
        <div className="w-full flex justify-center my-7">
          <img src={img} alt="" />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
          <div className="flex items-center justify-center">
            <p className="text-xl">
              <span className="text-4xl">A</span>
              dine is located in the middle of the Swiss Alps. In recent years,
              Adine Swiss Alps has expanded its inifrastructure, created
              attractive opportunities for investors and created new jobs for
              the entire region
            </p>
          </div>
          <div className="bg-accent p-5 flex flex-col gap-y-3">
            <div className="flex gap-x-5">
              <img src={logoHotel} alt="" className="w-7" />
              <p className="text-secondary text-xl">
                The best prices for your relaxing vacation
              </p>
            </div>
            <div className="flex gap-x-5">
              <img src={logoHotel} alt="" className="w-7" />
              <p className="text-secondary text-xl">
                The best prices for your relaxing vacation
              </p>
            </div>
            <div className="flex gap-x-5">
              <img src={logoHotel} alt="" className="w-7" />
              <p className="text-secondary text-xl">
                The best prices for your relaxing vacation
              </p>
            </div>
          </div>
        </div>
        <div className="grid md:grid-cols-3 grid-cols-1 gap-3 my-5">
          <div className="relative w-full">
            <img src={room1} alt="" className="object-cover w-full" />
            <div className="absolute w-full h-full z-10 bg-primary/70 top-0 left-0">
              <div className="hover:border-2 transition-all border-secondary w-[94%] h-[94%] m-[3%] flex justify-center items-end">
                <h1 className="text-xl lg:text-3xl mb-10 text-secondary text-center">
                  STAY ROOM
                </h1>
              </div>
            </div>
          </div>
          <div className="relative w-full">
            <img src={room2} alt="" className="object-cover w-full" />
            <div className="absolute w-full h-full z-10 bg-primary/70 top-0 left-0">
              <div className="hover:border-2 transition-all border-secondary w-[94%] h-[94%] m-[3%] flex justify-center items-end">
                <h1 className="text-xl lg:text-3xl mb-10 text-secondary text-center">
                  CONFERENCE / MEETING HALL
                </h1>
              </div>
            </div>
          </div>
          <div className="relative w-full">
            <img src={room3} alt="" className="object-cover w-full" />
            <div className="absolute w-full h-full z-10 bg-primary/70 top-0 left-0">
              <div className="hover:border-2 transition-all border-secondary w-[94%] h-[94%] m-[3%] flex justify-center items-end">
                <h1 className="text-xl lg:text-3xl mb-10 text-secondary text-center">
                  WENDING
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
