import { SlPeople, SlSizeFullscreen } from "react-icons/sl";
import { Button } from "./ui/button";

type roomProps = {
  id: number;
  name: string;
  description: string;
  facilities: {
    name: string;
    icon: JSX.Element;
  }[];
  size: number;
  maxPerson: number;
  price: number;
  image: string;
  imageLg: string;
};

export default function Room({ room }: { room: roomProps }) {
  const { image, size, maxPerson, name, description, price } = room;
  // console.log(room);

  return (
    <div className="my-5 mx-0 md:m-5 group overflow-hidden border-2 shadow-xl">
      <div className="w-full overflow-hidden">
        <img
          src={image}
          className="w-full group-hover:scale-125 object-cover"
          alt=""
        />
      </div>
      <div className="w-full h-[50px] lg:h-[60px] relative flex justify-center">
        <div className="bg-secondary shadow-xl w-[80%] h-full absolute -top-[25px] lg:top-[-30px] z-20 flex">
          <div className="flex w-1/2 justify-center items-center">
            <SlSizeFullscreen className="pr-2 text-accent w-6 h-6" />
            <p className="font-bold">{size} M²</p>
          </div>
          <div className="flex w-1/2 justify-center items-center">
            <SlPeople className="pr-1 text-accent w-6 h-6" />
            <p className="font-bold">MAX PEOPLE {maxPerson}</p>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col items-center">
        <h1 className="text-2xl lg:text-4xl font-bold">{name}</h1>
        <p className="text-lg text-center my-5 px-5">
          {description.slice(0, 75)}
        </p>
        <Button className="mt-5 mb-7 py-7 px-5">BOOK NOM FROM {price}$</Button>
      </div>
    </div>
  );
}
