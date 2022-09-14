import { useState } from "react";
import { technology } from "../data.json";

const Technology = () => {
  const [rockets] = useState(technology);
  const [rocket, setRocket] = useState(0);

  const { name, images, description } = rockets[rocket];

  return (
    <main className=" bg-techno-background bg-cover bg-center h-screen font-bella text-slate-50 pt-44  ">
      <h1 className="  max-w-7xl mx-auto  pl-24 font-barlow tracking-[0.1em] uppercase text-2xl py-10">
        {" "}
        <span className=" text-slate-500 font-bold font-barlow">03</span> space
        launche 101
      </h1>
      <section className="flex  max-w-7xl  mx-auto">
        <section className="w-full lg:w-2/4 flex items-center gap-4">
          <article className=" w-20 mx-10">
            {rockets.map((rock, index) => (
              <button
                key={index}
                onClick={() => setRocket(index)}
                className={`border-2 border-slate-500 w-20 h-20 my-4 rounded-full text-3xl uppercase font-bella mx-2 tracking-wider text-blue-200 pb-2   ${
                  index === rocket && " bg-slate-200 text-slate-900 "
                }`}
              >
                {index + 1}
              </button>
            ))}
          </article>
          <section className="flex flex-col justify-between min-h-max ">
            <span className=" uppercase font-barlow text-blue-200 pb-4">
              the terminology ...
            </span>
            <h1 className="text-[56px] w-[31rem] font-bella uppercase py-2">
              {name}
            </h1>
            <p className="w-[27.75rem] text-lg font-barlow  text-blue-200 pt-4 leading-8">
              {description}
            </p>
          </section>
        </section>
        <article className="w-full lg:w-2/4 flex justify-end">
          <img src={images.portrait} alt="" />
        </article>
      </section>
    </main>
  );
};

export default Technology;
