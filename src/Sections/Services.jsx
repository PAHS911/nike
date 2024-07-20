import { FaShippingFast, FaHandsHelping } from "react-icons/fa";
import { RiSecurePaymentFill } from "react-icons/ri";

const Services = () => {
  return (
    <section className="max-container flex justify-center flex-wrap gap-9">
      <div className=" ring-0  dark:bg-slate-gray     flex-1 sm:w-[350px] sm:min-w-[350px] w-full rounded-[20px] shadow-xl px-10 py-16">
        <div className="text-2xl text-white bg-coral-red w-8 h-8 flex justify-center items-center rounded-full">
          <FaShippingFast />
        </div>
        <h3 className="mt-5 font-palanquin text-3xl leading-normal  font-bold">
          Free shipping
        </h3>
        <p className="mt-3 break-words font-montserrat text-lg leading-normal dark:text-black  text-slate-gray">
          Enjoy seamless shopping with our complimentary shipping service.
        </p>
      </div>

      <div className="ring-0  ring-slate-50  dark:bg-slate-gray shadow-xl  flex-1 sm:w-[350px] sm:min-w-[350px] w-full rounded-[20px]  px-10 py-16">
        <div className="text-2xl text-white bg-coral-red w-8 h-8 flex justify-center items-center rounded-full">
          <RiSecurePaymentFill />
        </div>
        <h3 className="mt-5 font-palanquin text-3xl  leading-normal font-bold">
          Secure Payment
        </h3>
        <p className="mt-3 break-words font-montserrat text-lg dark:text-black  leading-normal text-slate-gray">
          Experience worry-free transactions with our secure payment options.
        </p>
      </div>

      <div className="ring-0 ring-slate-50 dark:bg-slate-gray  shadow-xl   flex-1 sm:w-[350px] sm:min-w-[350px] w-full rounded-[20px] px-10 py-16">
        <div className="text-2xl text-white bg-coral-red w-8 h-8 flex justify-center items-center rounded-full">
          <FaHandsHelping />
        </div>
        <h3 className="mt-5 font-palanquin   text-3xl leading-normal font-bold">
        Love to help you
        </h3>
        <p className="mt-3 break-words font-montserrat text-lg leading-normal dark:text-black  text-slate-gray">
        Our dedicated team is here to assist you every step of the way.
        </p>
      </div>
    </section>
  );
};

export default Services;
