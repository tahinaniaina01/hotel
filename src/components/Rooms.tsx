import { roomData } from "@/data/data";

export default function Rooms() {
  console.log(roomData);

  return (
    <section className="w-full flex flex-col items-center">
      <h1 className="text-xl lg:text-6xl my-5 lg:my-7 text-accent">
        Rooms & Suites
      </h1>
      <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"></div>
    </section>
  );
}
