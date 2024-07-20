import {
  Hero,
  PopularProducts,
  SuperQuality,
  Subscribe,
  SpecialOffer,
  Services,
  Footer,
  CustomerReview,
} from "./Sections";
import Nav from "./components/Nav";
import React, { useEffect } from "react";

const App = () => {
  useEffect(() => {
    const currentTheme = localStorage.getItem("theme") || "light";
    if (currentTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, ["theme"]);
  return (
    <main className="relative  dark:bg-black">
      <Nav />
      <section className=" xl:padding-1 wide:padding-r padding-b">
        <Hero />
      </section>
      <section className="padding">
        <PopularProducts />
      </section>
      <section className="padding">
        <SuperQuality />
      </section>
      <section className="padding-x py-10">
        <Services />
      </section>
      <section className="padding">
        <SpecialOffer />
      </section>
      <section className="padding dark:bg-black bg-pale-blue">
        <CustomerReview />
      </section>
      <section className="padding-x sm:py-32 py-16 w-full">
        <Subscribe />
      </section>
      <section className="padding   padding-x padding-t pb-8 bg-black text-white ">
        <Footer />
      </section>
    </main>
  );
};

export default App;
