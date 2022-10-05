import { useState } from "react";
import { crew } from "../data.json";

const Crew = () => {
  const [astronauts] = useState(crew);
  const [astronaut, setAstronaut] = useState(0);

  const { name, images, role, bio } = astronauts[astronaut];

  return (
    <main className=" bg-crew-background-mobile md:bg-crew-background-tablet lg:bg-crew-background bg-cover bg-center min-h-screen pt-24 font-bella text-slate-50  ">
      <h1 className="max-w-7xl mx-auto pl-2 md:text-left md:text-xl lg:text-3xl font-barlow tracking-[0.1em] uppercase text-center  py-10">
        {" "}
        <span className=" text-slate-500 font-bold font-barlow">02</span> meet
        your crew
      </h1>
      <section className="  flex flex-col-reverse items-center justify-center md:flex-col  md:items-center lg:flex-row lg:min-h-[700px] lg:justify-around max-w-7xl mx-auto min-h-screen ">
        <section className=" w-full md:max-w-[480px] lg:w-2/4  flex flex-col-reverse md:flex-col text-center lg:text-left lg:max-w-[540px] ">
          <article className="md:pb-6">
            <span className=" font-bella text-base lg:text-[32px] uppercase text-slate-400">
              {role}
            </span>
            <h1 className="text-2xl md:text-4xl lg:text-[56px] font-bella uppercase py-2">
              {name}
            </h1>
            <p className="w-full  lg:w-[27.75rem] text-sm lg:text-lg font-barlow  text-blue-200 pt-4 leading-8">
              {bio}
            </p>
          </article>
          <article className=" py-4 ">
            {astronauts.map((astro, index) => (
              <button
                key={index}
                onClick={() => setAstronaut(index)}
                className={`w-4 h-4 rounded-full bg-slate-600 mx-2 ${
                  index === astronaut && " bg-blue-100"
                }`}
              ></button>
            ))}
          </article>
        </section>
        <article className=" items-center w-full md:max-h-[560px] lg:w-2/4 flex justify-center border-b-2 border-slate-400">
          <img className=" md:max-h-[560px] " src={images.png} alt="" />
        </article>
      </section>
    </main>
  );
};

export default Crew;
