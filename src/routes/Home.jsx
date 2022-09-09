
const Home = () => {
  return (
    <main className=" bg-home-background bg-cover bg-center h-screen font-bell text-slate-50 ">
      <section className="flex justify-around items-end align-bottom gap-10 h-4/6 w-full" >
        <article className="w-full lg:w-2/4 max-w-lg px-8 ">
        <span className=" max-w-sm font-barlowCondense text-2xl tracking-[0.1em]  text-blue-200 font-light">SO, YOU WANT TO TRAVEL TO</span>
        <h1 className="text-[150px] font-bella">SPACE</h1>
        <p className=" font-barlow text-lg text-justify  text-blue-200">Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
        </article>
        <article className="w-full lg:w-2/4 max-w-lg flex justify-center ">
        <h2 className="text-3xl bg-slate-50 text-slate-900 w-64 h-64  rounded-full flex justify-center items-center font-bella">EXPLORE</h2>
        </article>
      </section>
    </main>
  )
}

export default Home
