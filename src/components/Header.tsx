import logoDark from "@/assets/logo/logo-dark.svg";
import logoWhite from "@/assets/logo/logo-white.svg";
import { useEffect, useRef, useState } from "react";
import { BsFacebook, BsInstagram, BsPinterest } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";
import { FiPhoneCall } from "react-icons/fi";
import { Button } from "./ui/button";

export default function Headers() {
  const [isScroll, setIsScroll] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const hundleScroll = () => {
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
        <div className="container flex items-center flex-col md:flex-row md:justify-between py-3">
          <div className="flex items-center gap-5">
            <p className="text-white flex items-center gap-x-2">
              <CiLocationOn className="text-accent" /> 6390 Engelberg.
              Switzerland
            </p>
            <p className="text-white flex items-center gap-x-2">
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
          className={`container mx-auto flex py-5 flex-col md:flex-row md:justify-between items-center gap-y-3`}
        >
          <div>
            <img src={isScroll ? logoDark : logoWhite} alt="" />
          </div>
          <div className="flex flex-col md:flex-row gap-y-2">
            <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center xl:text-xl">
              <a
                className={`mr-5 hover:text-accent ${
                  isScroll ? "text-primary" : "text-secondary"
                } cursor-pointer`}
              >
                HOME
              </a>
              <a
                className={`mr-5 hover:text-accent ${
                  isScroll ? "text-primary" : "text-secondary"
                } cursor-pointer`}
              >
                ROOMS
              </a>
              <a
                className={`mr-5 hover:text-accent ${
                  isScroll ? "text-primary" : "text-secondary"
                } cursor-pointer`}
              >
                EVENTS
              </a>
              <a
                className={`mr-5 hover:text-accent ${
                  isScroll ? "text-primary" : "text-secondary"
                } cursor-pointer`}
              >
                GALLERY
              </a>
              <a
                className={`mr-5 hover:text-accent ${
                  isScroll ? "text-primary" : "text-secondary"
                } cursor-pointer`}
              >
                CONTACT
              </a>
            </nav>
            <Button variant="primary" className="font-bold">
              KNOW MORE
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
