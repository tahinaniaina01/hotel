import logoDark from "@/assets/logo/logo-dark.svg";
import logoWhite from "@/assets/logo/logo-white.svg";
import { useEffect, useRef, useState } from "react";
import { BsFacebook, BsInstagram, BsPinterest } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";
import { FaTimes } from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { Link } from "react-scroll";
import { Button } from "./ui/button";

export default function Headers() {
  const [isScroll, setIsScroll] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const hundleScroll = () => {
      if (ref.current) {
        scrollY > ref.current?.offsetHeight
          ? setIsScroll(true)
          : setIsScroll(false);
      }
    };
    window.addEventListener("scroll", hundleScroll);

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
              <FiPhoneCall className="text-accent" /> +41 42 568 87 98
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
            className={`fixed md:relative top-0 md:mt-0 md:pt-3 transition-all duration-500 ${
              isOpen ? "right-0" : "-right-full"
            } p-3 bg-primary md:right-0 md:bg-transparent z-40 md:z-50 flex flex-col items-center md:flex-row gap-y-2`}
          >
            <FaTimes
              className="md:hidden absolute top-4 left-2 text-xl text-secondary"
              onClick={() => setIsOpen(false)}
            />
            <nav className="md:ml-auto flex flex-col md:flex-row items-center md:pr-5 text-base justify-center xl:text-xl">
              <Link
                to="hero"
                smooth={true}
                duration={500}
                offset={-100}
                className={`mr-1 hover:text-accent text-secondary ${
                  isScroll ? "md:text-primary" : "md:text-secondary"
                } cursor-pointer text-sm md:text-xl xl:text-2xl relative lg:px-3 py-2 hover:text-accent before:transition-all before:duration-500 before:content-[''] before:absolute before:left-0 before:top-[100%] before:w-0 hover:before:w-full before:h-1 before:bg-accent `}
              >
                Home
              </Link>
              <Link
                to="abouts"
                smooth={true}
                duration={500}
                offset={-100}
                className={`mr-1 hover:text-accent text-secondary ${
                  isScroll ? "md:text-primary" : "md:text-secondary"
                } cursor-pointer text-sm md:text-xl xl:text-2xl relative lg:px-3 px-2 py-2 hover:text-accent before:transition-all before:duration-500 before:content-[''] before:absolute before:left-0 before:top-[100%] before:w-0 hover:before:w-full before:h-1 before:bg-accent `}
              >
                Abouts
              </Link>
              <Link
                to="rooms"
                smooth={true}
                duration={500}
                offset={-100}
                className={`mr-1 hover:text-accent text-secondary ${
                  isScroll ? "md:text-primary" : "md:text-secondary"
                } cursor-pointer text-sm md:text-xl xl:text-2xl relative lg:px-3 px-2 py-2 hover:text-accent before:transition-all before:duration-500 before:content-[''] before:absolute before:left-0 before:top-[100%] before:w-0 hover:before:w-full before:h-1 before:bg-accent `}
              >
                Rooms
              </Link>
              <Link
                to="events"
                smooth={true}
                duration={500}
                offset={-100}
                className={`mr-1 hover:text-accent text-secondary ${
                  isScroll ? "md:text-primary" : "md:text-secondary"
                } cursor-pointer text-sm md:text-xl xl:text-2xl relative lg:px-3 px-2 py-2 hover:text-accent before:transition-all before:duration-500 before:content-[''] before:absolute before:left-0 before:top-[100%] before:w-0 hover:before:w-full before:h-1 before:bg-accent `}
              >
                Events
              </Link>
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
