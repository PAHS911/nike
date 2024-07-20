import shoes4 from "../assets/images/shoe4.svg";
import shoes5 from "../assets/images/shoe5.svg";
import shoes6 from "../assets/images/shoe6.svg";
import shoes7 from "../assets/images/shoe7.svg";
import { FaStar } from "react-icons/fa";

const PopularProducts = () => {
  return (
    <section id="products" className="">
      <section className="max-container max-sm:mt12">
        <div className="flex flex-col justify-start gap-5">
          <h2 className="text-4xl font-semibold dark:text-white">
            Our <span className="text-coral-red">Popular</span> Products
          </h2>
          <p className="lg:max-w-lg mt-2 font-montserrat dark:text-white text-slate-gray">
            Experience top-notch quality and style with our sought-after
            selections. Discover a world of comfort, design, and value
          </p>
        </div>
        <div className="gap-14 mt-16 md:grid-cols-3 sm:gap-6 sm:grid-cols-2 grid-cols-1 grid lg:grid-cols-4">
          <div className="flex flex-1 flex-col w-full max-sm:w-full">
            <img className="" src={shoes4} alt="shoe" />
            <div className="mt-8 flex justify-start gap-2.5">
              <span className="text-coral-red text-2xl">
                <FaStar />
              </span>
              <p className="font-montserrat text-xl leading-normal text-slate-gray">
                (4.5)
              </p>
            </div>
            <h3 className="mt-2 text-2xl leading-normal dark:text-white font-semibold font-palanquin">
              Nike Air Jordan-01
            </h3>
            <p className="mt-2 font-semibold font-montserrat  text-coral-red text-2xl leading-normal">
              $200.20
            </p>
          </div>

          <div className="flex flex-1 flex-col w-full max-sm:w-full">
            <img className="" src={shoes5} alt="shoe" />
            <div className="mt-8 flex justify-start gap-2.5">
              <span className="text-coral-red text-2xl">
                <FaStar />
              </span>
              <p className="font-montserrat text-xl leading-normal text-slate-gray">
                (4.5)
              </p>
            </div>
            <h3 className="mt-2 text-2xl dark:text-white leading-normal font-semibold font-palanquin">
              Nike Air Jordan-10
            </h3>
            <p className="mt-2 font-semibold font-montserrat text-coral-red text-2xl leading-normal">
              $210.20
            </p>
          </div>

          <div className="flex flex-1 flex-col w-full max-sm:w-full">
            <img className="" src={shoes6} alt="shoe" />
            <div className="mt-8 flex justify-start gap-2.5">
              <span className="text-coral-red text-2xl">
                <FaStar />
              </span>
              <p className="font-montserrat text-xl leading-normal text-slate-gray">
                (4.5)
              </p>
            </div>
            <h3 className="mt-2 text-2xl leading-normal dark:text-white font-semibold font-palanquin">
              Nike Air Jordan-100
            </h3>
            <p className="mt-2 font-semibold font-montserrat text-coral-red text-2xl leading-normal">
              $220.20
            </p>
          </div>
          <div className="flex flex-1 flex-col w-full max-sm:w-full">
            <img className="" src={shoes7} alt="shoe" />
            <div className="mt-8 flex justify-start gap-2.5">
              <span className="text-coral-red text-2xl">
                <FaStar />
              </span>
              <p className="font-montserrat text-xl leading-normal text-slate-gray">
                (4.5)
              </p>
            </div>
            <h3 className="mt-2 text-2xl dark:text-white leading-normal font-semibold font-palanquin">
              Nike Air Jordan-001
            </h3>
            <p className="mt-2 font-semibold font-montserrat text-coral-red text-2xl leading-normal">
              $230.20
            </p>
          </div>
        </div>
      </section>
    </section>
  );
};

export default PopularProducts;
