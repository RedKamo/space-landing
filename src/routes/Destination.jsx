import { useState } from 'react'
import {destinations} from '../data.json'

const Destination = () => {
  const [planets] = useState(destinations)
  const [planet, setPlanet] = useState(0)

  const { name, images, description, distance, travel } = planets[planet]

  return (
    <main className="bg-destination-background bg-cover bg-center h-screen font-bella text-slate-50 pt-44  ">
     <h1 className='max-w-7xl mx-auto  pl-24 font-barlow tracking-[0.1em] uppercase text-2xl py-10'> <span className=' text-slate-500 font-bold font-barlow'>01</span> Pick your Destination</h1>
    <section className='flex justify-center gap-20 max-w-7xl mx-auto'>
      <article className='w-full lg:w-2/4 flex justify-center'>
        <img  className='mt-10' src={images.png} alt="" />
      </article>
      <section className=' w-full lg:w-2/4 max-w-lg'>
      {planets.map((pla, index)=>(
          <button
            key={index}
            onClick={()=> setPlanet(index)}
            className={`uppercase font-barlow  mx-2 tracking-wider text-blue-200 pb-2   ${
                      index === planet && "border-b-2 border-white text-slate-200 "
                    }`}>{pla.name}</button>
        ))}
        <article className=' pt-5 font-barlow'>
          <h2 className='text-8xl font-bella uppercase py-2'>{name}</h2>
          <p className=' font-barlow text-lg text-blue-200 pt-4'>{description}</p>
          <div className="flex-grow border-t border-gray-300 mt-14 "></div>
          <section className='flex gap-20  pt-8 '>
            <article>
              <h3 className=' font-barlow uppercase text-sm tracking-[.2em]'>avg. Distance</h3>
              <p className=' text-3xl uppercase pt-4'>{distance}</p>
            </article>
            <article>
              <h3 className='font-barlow uppercase text-sm tracking-[.2em]'>est. travel time</h3>
              <p className='text-3xl uppercase pt-4'>{travel}</p>
            </article>
          </section>
        </article>
      </section>
    </section>
  </main>
  )
}

export default Destination