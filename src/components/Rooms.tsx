import img from "@/assets/images/decorated-pattern-2.svg";
import { roomData } from "@/data/data";
import Room from "./Room";

export default function Rooms() {
  // console.log(roomData);

  return (
    <section id="rooms" className="w-full flex flex-col items-center">
      <h1 className="text-4xl lg:text-6xl mt-5 lg:mt-7 text-accent">
        Rooms & Suites
      </h1>
      <img src={img} alt="" className="mt-5 lg:mt-7" />
      <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-3 mb-10">
        {roomData.map((room, index) => {
          return <Room key={index} room={room} />;
        })}
      </div>
    </section>
  );
}
