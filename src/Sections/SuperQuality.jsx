import shoes8 from "../assets/images/shoe8.svg";

const SuperQuality = () => {
  return (
    <section
      id="about-us"
      className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container">
      <div className="flex flex-1 flex-col">
        <h1 className="font-palanquin capitalize text-4xl dark:text-white lg:max-w-lg font-bold">
          We Provide You <span className="text-coral-red">Super Quality</span>{" "}
          Shoes
        </h1>
        <p
          className="mt-4 lg:max-w-lg dark:text-white info-text
        ">
          Ensuring premium comfort and style, our meticulously crafted footwear
          is designed to elevate your experience, providing you with unmatched
          quality, innovation, and a touch of elegance.
        </p>
        <p className="mt-4 lg:max-w-lg dark:text-white info-text">
          Our dedication to detail and excellence ensures your satisfaction
        </p>
        <div className="mt-11">
          <button
            className="flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none
                bg-coral-red text-white border-coral-red rounded-full undefined">
            View details
          </button>
        </div>
      </div>
      <div className="flex-1 flex justify-center items-center">
        <img src={shoes8} alt="shoe" className="object-contain" />
      </div>
    </section>
  );
};

export default SuperQuality;
