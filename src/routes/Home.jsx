const Home = () => {
  return (
    <main className=" bg-home-background-mobile md:bg-home-background-table lg:bg-home-background  bg-cover bg-center min-h-screen font-bell text-slate-50 px-4 ">
      <section className="flex flex-col w-full justify-around items-center  min-h-screen lg:flex-row">
        <article className="w-full flex flex-col items-center justify-center text-center h-72  md:w-[450px] lg:h-full max-w-lg px-4 grow   ">
          <span className="w-full text-base md:text-xl lg:text-3xl text-center  font-barlowCondense  tracking-[0.1em]  text-blue-200 font-light">
            SO, YOU WANT TO TRAVEL TO
          </span>
          <h1 className="text-7xl text-center  md:text-[150px] font-bella">
            SPACE
          </h1>
          <p className=" pt-8 font-barlow text-sm leading-6 text-center min-w-80 md:text-base lg:text-lg lg:text-left  text-blue-200">
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </article>
        <article className="w-full grow  md:w-[450px]  lg:w-full max-w-lg flex justify-center items-center ">
          <h2 className=" text-xl md:text-3xl bg-slate-50 text-slate-900 w-40 h-40 md:w-60 md:h-60   rounded-full flex justify-center items-center font-bella">
            EXPLORE
          </h2>
        </article>
      </section>
    </main>
  );
};

export default Home;
