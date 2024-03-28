import logoDark from "@/assets/logo/logo-dark.svg";
import logoWhite from "@/assets/logo/logo-white.svg";
import { useEffect, useRef, useState } from "react";
import { BsFacebook, BsInstagram, BsPinterest } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";
import { FiPhoneCall } from "react-icons/fi";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { Button } from "./ui/button";

export default function Headers() {
  const [isScroll, setIsScroll] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const hundleScroll = () => {
      if (ref.current)
        scrollY > ref.current?.offsetHeight
          ? setIsScroll(true)
          : setIsScroll(false);
    };
    window.addEventListener("scroll", hundleScroll);
    // console.log(ref.current?.offsetHeight);

    return () => {
      window.removeEventListener("scroll", hundleScroll);
    };
  }, []);

  return (
    <header className={`absolute top-${scrollY} left-0 z-50 w-full`}>
      <div ref={ref} className="bg-primary w-full">
        <div className="md:container flex items-center flex-col md:flex-row md:justify-between py-3">
          <div className="flex items-center justify-between md:w-auto w-full px-1">
            <p className="text-white flex items-center gap-x-2">
              <CiLocationOn className="text-accent" /> 6390 Engelberg.
              Switzerland
            </p>
            <p className="text-white ml-3 flex items-center gap-x-2">
              <FiPhoneCall className="text-accent" /> +41 31 377 77 77
            </p>
          </div>
          <div className="flex items-center text-secondary gap-x-3">
            <BsInstagram />
            <BsPinterest />
            <BsFacebook />
            <h1 className="font-bold">FOLLOW US</h1>
          </div>
        </div>
      </div>
      <div
        className={`${
          isScroll
            ? "fixed top-0 bg-white shadow-xl z-50"
            : "relative bg-trasparent"
        } w-full`}
      >
        <div
          className={`container mx-auto flex py-3 justify-between items-center`}
        >
          <div>
            <img src={isScroll ? logoDark : logoWhite} alt="" />
          </div>
          <div
            className={`fixed md:relative top-0 pt-[150px] md:pt-3 transition-all duration-500 ${
              isOpen ? "right-0" : "-right-full"
            } p-3 ${
              isScroll ? "bg-secondary" : "bg-primary"
            } md:right-0 md:bg-transparent z-40 md:z-50 flex flex-col items-center md:flex-row gap-y-2`}
          >
            <nav className="md:ml-auto flex flex-col md:flex-row items-center md:pr-5 text-base justify-center xl:text-xl">
              <a
                className={`mr-1 hover:text-accent ${
                  isScroll ? "text-primary" : "text-secondary"
                } cursor-pointer text-sm md:text-xl xl:text-2xl relative lg:px-3 py-2 hover:text-accent before:transition-all before:duration-500 before:content-[''] before:absolute before:left-0 before:top-[100%] before:w-0 hover:before:w-full before:h-1 before:bg-accent `}
              >
                Home
              </a>
              <a
                className={`mr-1 hover:text-accent ${
                  isScroll ? "text-primary" : "text-secondary"
                } cursor-pointer text-sm md:text-xl xl:text-2xl relative lg:px-3 px-2 py-2 hover:text-accent before:transition-all before:duration-500 before:content-[''] before:absolute before:left-0 before:top-[100%] before:w-0 hover:before:w-full before:h-1 before:bg-accent `}
              >
                Rooms
              </a>
              <a
                className={`mr-1 hover:text-accent ${
                  isScroll ? "text-primary" : "text-secondary"
                } cursor-pointer text-sm md:text-xl xl:text-2xl relative lg:px-3 px-2 py-2 hover:text-accent before:transition-all before:duration-500 before:content-[''] before:absolute before:left-0 before:top-[100%] before:w-0 hover:before:w-full before:h-1 before:bg-accent `}
              >
                Events
              </a>
              <a
                className={`mr-1 hover:text-accent ${
                  isScroll ? "text-primary" : "text-secondary"
                } cursor-pointer text-sm md:text-xl xl:text-2xl relative lg:px-3 px-2 py-2 hover:text-accent before:transition-all before:duration-500 before:content-[''] before:absolute before:left-0 before:top-[100%] before:w-0 hover:before:w-full before:h-1 before:bg-accent `}
              >
                Gallery
              </a>
              <a
                className={`mr-1 hover:text-accent ${
                  isScroll ? "text-primary" : "text-secondary"
                } cursor-pointer text-sm md:text-xl xl:text-2xl relative lg:px-3 px-2 py-2 hover:text-accent before:transition-all before:duration-500 before:content-[''] before:absolute before:left-0 before:top-[100%] before:w-0 hover:before:w-full before:h-1 before:bg-accent `}
              >
                Contact
              </a>
            </nav>
            <Button variant="accent" className="font-bold">
              Know more
            </Button>
          </div>
          <HiOutlineMenuAlt3
            className="md:hidden w-12 h-12 bg-accent text-secondary p-2 rounded-md cursor-pointer"
            onClick={() => setIsOpen(true)}
          />
        </div>
      </div>
    </header>
  );
}
