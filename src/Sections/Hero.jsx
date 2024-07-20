import React, { useState } from "react";
import arrowRightIcon from "../assets/icons/arrow-right.svg";
import bigShoes1 from "../assets/images/big-shoe1.png";
import bigShoes2 from "../assets/images/big-shoe2.png";
import bigShoes3 from "../assets/images/big-shoe3.png";
import smallShoes1 from "../assets/images/thumbnail-shoe1.svg";
import smallShoes2 from "../assets/images/thumbnail-shoe2.svg";
import smallshoes3 from "../assets/images/thumbnail-shoe3.svg";

const Hero = () => {
  const [displayedImage, setDisplayedImage] = useState(bigShoes1);

  const [selectedThumbnailIndex, setSelectedThumbnailIndex] = useState(1);

  const handleImageChange = (image, index) => {
    setDisplayedImage(image);
    setSelectedThumbnailIndex(index);
  };

  return (
    <section className=" xl:padding-l wide:padding-r ">
      <section
        id="home"
        className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container">
        <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full  max-xl:padding-x pt-28">
          <p className="text-xl font-montserrat text-coral-red">
            Our Summer collections
          </p>
          <h1 className="mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold">
            <span className="xl:bg-white dark:xl:bg-black   dark:text-white xl:whitespace-nowrap relative z-10 max-lg:relative max-lg:z-0 pr-10">
              The New Arrival
            </span>
            <br />
            <div className="dark:text-white">
              <span className="text-coral-red inline-block mt-3 ">Nike</span>{" "}
              Shoes
            </div>
          </h1>
          <p className="font-montserrat text-slate-gray dark:text-white text-lg leading-8 mt-6 mb-14 sm:max-w-sm">
            Discover stylish Nike arrivals, quality comfort, and innovation for
            your active life.
          </p>
          <button 
            className="flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none
        bg-coral-red text-white dark:text-white border-coral-red rounded-full undefined">
            Shop now
            <img
              className="ml-2 rounded-full bg-white dark:bg-white dark:text-white w-5 h25"
              src={arrowRightIcon}
              alt="arrow-right-icon"
            />
          </button>
          <div className="flex justify-start items-start flex-wrap w-full mt-20 gap-16">
            <div>
              <p className="text-4xl font-palanquin dark:text-white font-bold">
                1k+
              </p>
              <p className="leading-7 font-montserrat text-slate-gray">
                Brands
              </p>
            </div>
            <div>
              <p className="text-4xl font-palanquin dark:text-white font-bold">
                500+
              </p>
              <p className="leading-7 font-montserrat text-slate-gray">Shops</p>
            </div>
            <div>
              <p className="text-4xl font-palanquin dark:text-white font-bold">
                250k+
              </p>
              <p className="leading-7 font-montserrat text-slate-gray">
                Customers
              </p>
            </div>
          </div>
        </div>

        <div className="relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center border-coral-red ">
          <img
            src={displayedImage}
            alt="Displayed Shoe"
            width="610"
            height="502"
            className="object-contain relative z-10"
          />
          <div className="flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6 border-coral-red">
            <div
              className={`flex justify-center items-center cursor-pointer bg-card bg-center sm:w-40 sm:h-40 rounded-xl max-sm:p-4 border-2 ${
                selectedThumbnailIndex === 1
                  ? "border-coral-red"
                  : "border-transparent"
              }`}
              onClick={() => handleImageChange(bigShoes1, 1)}>
              <img
                src={smallShoes1}
                alt="Thumbnail Shoe 1"
                className="object-contain"
              />
            </div>

            <div
              className={`flex justify-center items-center cursor-pointer bg-card bg-center sm:w-40 sm:h-40 rounded-xl max-sm:p-4 border-2 ${
                selectedThumbnailIndex === 2
                  ? "border-coral-red"
                  : "border-transparent"
              }`}
              onClick={() => handleImageChange(bigShoes2, 2)}>
              <img
                src={smallShoes2}
                alt="Thumbnail Shoe 2"
                className="object-contain"
              />
            </div>
            <div
              className={`flex justify-center items-center cursor-pointer bg-card bg-center sm:w-40 sm:h-40 rounded-xl max-sm:p-4 border-2 ${
                selectedThumbnailIndex === 3
                  ? "border-coral-red"
                  : "border-transparent"
              }`}
              onClick={() => handleImageChange(bigShoes3, 3)}>
              <img
                src={smallshoes3}
                alt="Thumbnail Shoe 3"
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Hero;
