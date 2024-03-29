import img from "@/assets/logo/logo-white.svg";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="text-gray-400 bg-primary body-font">
      <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
        <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
          <a className="flex title-font font-medium items-center md:justify-start justify-center mb-5">
            <img src={img} alt="" className="w-[150px]" />
          </a>
          <p className="mt-2 text-sm text-secondary">
            Welcom to the best five-star the deluxe hotel in Swiss city. Hotel
            elementum sesue the aucan verstibulum aliquan jsuo in spaien rutrun
            volutpat.
          </p>
        </div>
        <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
          <div className="lg:w-1/3 md:w-1/2 w-full px-4">
            <h2 className="text-xl title-font font-medium text-white tracking-widest mb-3">
              Quick Link
            </h2>
            <nav className="list-none mb-10">
              <li>
                <a className="text-gray-400 hover:text-white">Our Services</a>
              </li>
              <li>
                <a className="text-gray-400 hover:text-white">Book</a>
              </li>
              <li>
                <a className="text-gray-400 hover:text-white">About Hotel</a>
              </li>
              <li>
                <a className="text-gray-400 hover:text-white">Blog</a>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/3 md:w-1/2 w-full px-4">
            <h2 className="text-xl title-font font-medium text-white tracking-widest mb-3">
              Explore
            </h2>
            <nav className="list-none mb-10">
              <li>
                <a className="text-gray-400 hover:text-white">Rooms & Suites</a>
              </li>
              <li>
                <a className="text-gray-400 hover:text-white">Spa & Wellness</a>
              </li>
              <li>
                <a className="text-gray-400 hover:text-white">Special Offers</a>
              </li>
              <li>
                <a className="text-gray-400 hover:text-white">Resteurant</a>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/3 md:w-1/2 w-full px-4">
            <h2 className="text-xl title-font font-medium text-white tracking-widest mb-3">
              Contact
            </h2>
            <nav className="list-none mb-10">
              <li>
                <a className="text-gray-400 hover:text-white">
                  6390 Engelberg, Switzerland
                </a>
              </li>
              <li>
                <a className="text-gray-400 hover:text-white">
                  +41 42 568 87 98
                </a>
              </li>
              <li>
                <a className="text-gray-400 hover:text-white">
                  info.adine@gmail.com
                </a>
              </li>
              text-xl
            </nav>
          </div>
        </div>
      </div>
      <div className="bg-black bg-opacity-75">
        <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
          <p className="text-gray-400 text-sm text-center sm:text-left">
            © 2024 adine hotel & spa — develeopped by
            <a
              href="https://twitter.com/knyttneve"
              rel="noopener noreferrer"
              className="text-gray-500 ml-1"
              target="_blank"
            >
              tahinaniaina
            </a>
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
            <a className="text-gray-400">
              <FaFacebook className="w-5 h-5" />
            </a>
            <a className="ml-3 text-gray-400">
              <FaTwitter className="w-5 h-5" />
            </a>
            <a className="ml-3 text-gray-400">
              <FaInstagram className="w-5 h-5" />
            </a>
            <a className="ml-3 text-gray-400">
              <FaLinkedin className="w-5 h-5" />
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
