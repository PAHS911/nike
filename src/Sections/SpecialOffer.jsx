import offer from "../assets/images/offer.svg";
import { FaLongArrowAltRight } from "react-icons/fa";

const SpecialOffer = () => {
  return (
    <section className="flex justify-between items-center max-xl:flex-col-reverse gap-10 max-container">
      <div className="flex-1">
        <img src={offer} alt="" className="object-contain w-full" />
      </div>
      <div className="flex flex-1 flex-col">
        <h2 className="text-4xl font-palanquin dark:text-white font-bold">
          <span className="text-coral-red">Special</span> Offer
        </h2>
        <p className="mt-4 info-text dark:text-white">
          Embark on a shopping journey that redefines your experience with
          unbeatable deals. From premier selections to incredible savings, we
          offer unparalleled value that sets us apart.
        </p>
        <p className="mt-6 info-text dark:text-white">
          Navigate a realm of possibilities designed to fulfill your unique
          desires, surpassing the loftiest expectations. Your journey with us is
          nothing short of exceptional.
        </p>
        <div className="mt-11 flex flex-wrap gap-4">
          <button
            className="flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none
      bg-coral-red text-white border-coral-red rounded-full undefined ">
            Shop now{" "}
            <span className="bg-white text-coral-red rounded-full w-5 h-5 flex justify-center items-center relative left-3 ">
              <FaLongArrowAltRight />
            </span>
          </button>
          <button
            className="flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none
      bg-white text-slate-gray border-slate-gray rounded-full undefined">
            Learn more
          </button>
        </div>
      </div>
    </section>
  );
};

export default SpecialOffer;
