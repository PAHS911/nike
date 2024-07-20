import customer1 from "../assets/images/customer1.jpeg";
import customer2 from "../assets/images/customer2.svg";
import { FaStar } from "react-icons/fa";

const CustomerReviews = () => {
  return (
    <section className="max-container ">
      <div className="flex flex-col text-center justify-center items-centers ">
        <h1 className=" font-palanquin text-center dark:text-white  text-4xl font-bold">
          What Our <span className="text-coral-red">Customers</span> Say?
        </h1>
        <br />
        <p className="m-auto mt-4 max-w-lg dark:text-white   text-center info-text">
          Hear genuine stories from our satisfied customers about their
          exceptional experiences with us.
        </p>
      </div>
      <div
        className="max-lg:flex-col mt-24 flex text-center justify-around  
      ">
        <div className="flex flex-col justify-center items-center">
          <div className="w-32 h-32  ">
            <img
              src={customer1}
              alt=""
              className="rounded-full "
            />
          </div>
          <p className="mt-6 max-w-sm dark:text-white  info-text">
            The attention to detail and the quality of the product exceeded my
            expectations. Highly recommended!
          </p>
          <div className=" mt-3">
            <p className="flex flex-row justify-center text-xl font-montserrat text-slate-gray gap-2">
              <span className="text-coral-red text-2xl">
                <FaStar />
              </span>
              (4.5)
            </p>
          </div>
          <p className="mt-1 font-palanquin text-3xl dark:text-white   font-bold ">
            Morich Brown
          </p>
        </div>
        <div className=" max-lg:mt-16 flex flex-col   justify-center items-center">
          <div className=""><img src={customer2} alt="" /></div>
          <p className="mt-6 max-w-sm dark:text-white   info-text">
            The product not only met but exceeded my expectations. I'll
            definitely be a returning customer!
          </p>
          <div className="mt-3">
            <p className="flex flex-row  text-xl font-montserrat text-slate-gray gap-2">
              <span className="text-coral-red  text-2xl  ">
                <FaStar />
              </span>
              (4.5)
            </p>
          </div>
          <p className="mt-1 font-palanquin dark:text-white  text-3xl  font-bold">
            Lota Mongeskar
          </p>
        </div>
      </div>
    </section>
  );
};

export default CustomerReviews;
