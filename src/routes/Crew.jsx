import { useState } from "react";
import { crew } from "../data.json";

const Crew = () => {
  const [astronauts] = useState(crew);
  const [astronaut, setAstronaut] = useState(0);

  const { name, images, role, bio } = astronauts[astronaut];

  return (
    <main className="bg-crew-background bg-cover bg-center h-screen font-bella text-slate-50 pt-44  ">
      <section className="flex  max-w-7xl mx-auto h-full">
        <section className="w-full lg:w-2/4 flex min-h-max flex-col justify-between my-10">
          <h1 className=" font-barlow tracking-[0.1em] uppercase text-2xl ">
            <span className="pr-4 text-slate-500 font-bold font-barlow">
              02
            </span>
            meet your crew
          </h1>
          <article>
            <span className=" font-bella text-[32px] uppercase text-slate-400">
              {role}
            </span>
            <h1 className="text-[56px] font-bella uppercase py-2">{name}</h1>
            <p className="w-[27.75rem] text-lg font-barlow  text-blue-200 pt-4 leading-8">
              {bio}
            </p>
          </article>
          <article>
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
        <article className="w-full lg:w-2/4 flex justify-center">
          <img src={images.png} alt="" />
        </article>
      </section>
    </main>
  );
};

export default Crew;
