const Subscribe = () => {
  return (
    <section id="contact-us" className="">
      <section className="max-container flex justify-between items-center max-lg:flex-col gap-10">
        <h3 className="text-4xl dark:text-white leading-[68px] lg:max-w-md font-palanquin font-bold">
          Sign Up for <span className="text-coral-red">Updates</span> &
          Newsletter
        </h3>
        <div className="lg:max-w-[40%] w-full flex items-center max-sm:flex-col gap-5 p-2.5 sm:border sm:border-slate-gray rounded-full ">
          <input
            className=" input dark:bg-black "
            type="text "
            placeholder="subscribe@nike.com"
          />
          <div className="flex max-sm:justify-end items-center max-sm:w-full">
            <button className="flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none bg-coral-red text-white border-coral-red rounded-full w-full ">
              Sign Up
            </button>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Subscribe;
