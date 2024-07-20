import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaCopyright,
} from "react-icons/fa";

import footerLogo from "../assets/images/footer-logo.svg";
const Footer = () => {
  return (
    <section className="">
      <div
        className="flex
        gap-20 max-lg:flex-col ">
        <div className="max-lg:flex max-lg:flex-col  max-lg:item-center">
          <img className="w-36 h-12" src={footerLogo} alt="" />
          <p className="mt-6 text-base leading-7 font-montserrat text-white-400 sm:max-w-sm">
            Get shoes ready for the new term at your nearest Nike store. Find
            Your perfect Size In Store. Get Rewards
          </p>
          <div className="mt-7 flex  gap-5">
            <div className=" text-xl flex justify-center  items-center w-12 h-12 bg-white rounded-full text-black">
              <FaFacebookF />
            </div>
            <div className="flex justify-center text-xl items-center w-12 h-12 bg-white rounded-full text-black">
              <FaTwitter />
            </div>
            <div className="flex justify-center text-2xl items-center w-12 h-12 bg-white rounded-full text-black">
              <FaInstagram />
            </div>
          </div>
        </div>
        <div className="max-sm:flex-col  flex flex-1 justify-between">
          <div className="">
            <p className="font-montserrat text-2xl leading-normal font-medium mb-6 text-white">
              Products
            </p>
            <ul>
              <li className="mt-3 font-montserrat text-base leading-normal text-white-400 hover:text-slate-gray">
                <a href="">Air Force 1 </a>
              </li>
              <li className="mt-3 font-montserrat text-base leading-normal text-white-400 hover:text-slate-gray">
                <a href="">Air Max 1 </a>
              </li>
              <li className="mt-3 font-montserrat text-base leading-normal text-white-400 hover:text-slate-gray">
                <a href="">Air Jordan 1 </a>
              </li>
              <li className="mt-3 font-montserrat text-base leading-normal text-white-400 hover:text-slate-gray">
                <a href="">Air Force 2 </a>
              </li>
              <li className="mt-3 font-montserrat text-base leading-normal text-white-400 hover:text-slate-gray">
                <a href="">Nike Waffle Racer</a>
              </li>
              <li className="mt-3 font-montserrat text-base leading-normal text-white-400 hover:text-slate-gray">
                <a href="">Nike Cortez</a>
              </li>
            </ul>
          </div>
          <div className="">
            <p className="max-sm:mt-10 font-montserrat text-2xl leading-normal font-medium mb-6 text-white">
              Help
            </p>
            <ul>
              <li className="mt-3 max-sm:mt-6 font-montserrat text-base leading-normal text-white-400 hover:text-slate-gray">
                <a href="">About us </a>
              </li>
              <li className="mt-3 font-montserrat text-base leading-normal text-white-400 hover:text-slate-gray">
                <a href="">FAQs </a>
              </li>
              <li className="mt-3 font-montserrat text-base leading-normal text-white-400 hover:text-slate-gray">
                <a href="">How it works</a>
              </li>
              <li className="mt-3 font-montserrat text-base leading-normal text-white-400 hover:text-slate-gray">
                <a href="">Privacy policy </a>
              </li>
              <li className="mt-3 font-montserrat text-base leading-normal text-white-400 hover:text-slate-gray">
                <a href="">Payment policy</a>
              </li>
            </ul>
          </div>
          <div className="">
            <p className="max-sm:mt-10   font-montserrat text-2xl leading-normal font-medium mb-6 text-white">
              Get in touch
            </p>
            <ul>
              <li className="mt-3 font-montserrat text-base leading-normal text-white-400 cursor-pointer hover:text-slate-gray">
                customer@nike.com
              </li>
              <li className="mt-3 font-montserrat text-base cursor-pointer leading-normal text-white-400 hover:text-slate-gray">
                +92554862354
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className=" flex justify-between font-montserrat relative mt-24 max-sm:flex-col max-sm:items-center   ">
        <p className="flex gap-2 items-center  hover:text-slate-gray relative top-0 cursor-pointer  ">
          <FaCopyright /> Copyright. All rights reserved.
        </p>

        <p className="hover:text-slate-gray cursor-pointer  ">
          Terms & Conditions
        </p>
      </div>
    </section>
  );
};

export default Footer;
