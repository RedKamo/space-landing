import { useState } from "react";
import { technology } from "../data.json";

const Technology = () => {
  const [rockets] = useState(technology);
  const [rocket, setRocket] = useState(0);

  const { name, images, description } = rockets[rocket];

  return (
    <main className=" bg-techno-background bg-cover bg-center min-h-screen font-bella text-slate-50 pt-44  ">
      <h1 className="  max-w-7xl mx-auto text-center   lg:text-left font-barlow tracking-[0.1em] uppercase text-sm lg:text-2xl py-10">
        {" "}
        <span className=" text-slate-500 font-bold font-barlow">03</span> space
        launche 101
      </h1>
      <section className="flex flex-col-reverse md:flex-row md:items-center max-w-7xl lg:h-[530px] lg:justify-around mx-auto gap-8 ">
        <section className="w-full lg:w-1/2 flex flex-col lg:flex-row  items-center gap-8">
          <article className=" w-full   flex lg:flex-col lg:w-20 justify-center items-center">
            {rockets.map((rock, index) => (
              <button
                key={index}
                onClick={() => setRocket(index)}
                className={`border-2 flex justify-center items-center border-slate-500 w-10 h-10 lg:w-20 lg:h-20 my-4 rounded-full text-sm lg:text-3xl uppercase font-bella mx-2 tracking-wider text-blue-200    ${
                  index === rocket && " bg-slate-200 text-slate-900 "
                }`}
              >
                {index + 1}
              </button>
            ))}
          </article>
          <section className=" flex flex-col  lg:justify-between items-center h-80 lg:items-start">
            <span className=" text-sm  uppercase font-barlow text-blue-200 ">
              the terminology ...
            </span>
            <h1 className="text-2xl lg:text-[46px]  font-bella text-center uppercase py-2">
              {name}
            </h1>
            <p className="  text-center  text-sm lg:text-lg lg:text-left font-barlow  text-blue-200 pt-4 leading-8">
              {description}
            </p>
          </section>
        </section>
        <article className="w-full lg:w-2/4 flex justify-end">
          <picture>
            <source media="(min-width: 778px)" srcSet={images.portrait} />
            <img
              src={images.landscape}
              alt=""
              className="block mx-auto mb-10"
            />
          </picture>
        </article>
      </section>
    </main>
  );
};

export default Technology;
