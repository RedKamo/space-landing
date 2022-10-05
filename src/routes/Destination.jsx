import { useState } from "react";
import { destinations } from "../data.json";

const Destination = () => {
  const [planets] = useState(destinations);
  const [planet, setPlanet] = useState(0);

  const { name, images, description, distance, travel } = planets[planet];

  return (
    <main className=" bg-destination-background-mobile md:bg-destination-background-tablet lg:bg-destination-background bg-cover bg-center min-h-screen font-bella text-slate-50 pt-44 px-4 text-sm ">
      <h1 className="max-w-7xl mx-auto pl-2   md:text-left md:text-xl lg:text-3xl font-barlow tracking-[0.1em] uppercase text-center  py-10">
        {" "}
        <span className=" text-slate-500 font-bold font-barlow">01</span> Pick
        your Destination
      </h1>
      <section className="flex flex-col lg:flex-row items-center justify-center gap-20 max-w-7xl mx-auto  min-h-[600px]">
        <article className="w-full lg:w-1/2 flex justify-center">
          <img className="mt-10" src={images.png} alt="" />
        </article>
        <section className=" w-full lg:w-1/2 flex flex-col items-center  justify-center text-sm md:text-base lg:items-start ">
          <article>
            {planets.map((pla, index) => (
              <button
                key={index}
                onClick={() => setPlanet(index)}
                className={`uppercase font-barlow  mx-2 tracking-wider text-blue-200 pb-2   ${
                  index === planet && "border-b-2 border-white text-slate-200 "
                }`}
              >
                {pla.name}
              </button>
            ))}
          </article>
          <article className=" pt-5 font-barlow flex flex-col items-center max-w-xl  lg:items-start ">
            <h2 className="text-6xl md:text-8xl font-bella uppercase py-2">
              {name}
            </h2>
            <p className=" font-barlow  text-blue-200 pt-4 text-center text-sm md:text-base lg:text-left">
              {description}
            </p>
            <div className="flex-grow border-t border-1 border-gray-300 mt-14 w-full "></div>
            <section className="flex flex-col md:flex-row lg:text-start lg:justify-start gap-20  pt-8  w-full  justify-evenly text-center">
              <article>
                <h3 className=" font-barlow uppercase text-sm tracking-[.2em]">
                  avg. Distance
                </h3>
                <p className=" text-3xl uppercase pt-4">{distance}</p>
              </article>
              <article>
                <h3 className="font-barlow uppercase text-sm tracking-[.2em]">
                  est. travel time
                </h3>
                <p className="text-3xl uppercase pt-4">{travel}</p>
              </article>
            </section>
          </article>
        </section>
      </section>
    </main>
  );
};

export default Destination;
