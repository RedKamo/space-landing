import { useState } from 'react'
import {destinations} from '../data.json'

const Destination = () => {
  const [planets] = useState(destinations)
  const [planet, setPlanet] = useState(0)
  //console.log('the planets are',planets)

  const { name, images, description, distance, travel } = planets[planet]

  return (
    <main className="bg-destination-background bg-cover bg-center h-screen font-bella text-slate-50 pt-44  ">
     <h1 className='max-w-7xl mx-auto  pl-24 font-barlowCondense tracking-[0.1em] uppercase text-2xl py-10'> <span className=' text-slate-500 font-bold font-barlowCondense'>01</span> Pick your Destination</h1>
    <section className='flex justify-center gap-20 max-w-7xl mx-auto'>
      <article className='w-full lg:w-2/4 flex justify-center'>
        <img  className='mt-10' src={images.png} alt="" />
      </article>
      <section className=' w-full lg:w-2/4 max-w-lg'>
      {planets.map((planet, index)=>(
          <button className=' font-barlowCondense text-base tracking-[.1em] pr-3 uppercase pb-7' key={index} onClick={()=> setPlanet(index)}>{planet.name}</button>
        ))}
        <article className=' pt-5'>
          <h2 className='text-8xl font-bella uppercase py-2'>{name}</h2>
          <p className=' font-barlow text-lg text-blue-200'>{description}</p>
          <div className="flex-grow border-t border-gray-300 mt-14 "></div>
          <section className='flex gap-20  pt-8 '>
            <article>
              <h3 className=' font-barlowCondense uppercase text-sm tracking-[.2em]'>avg. Distance</h3>
              <p className=' text-3xl uppercase pt-4'>{distance}</p>
            </article>
            <article>
              <h3 className='font-barlowCondense uppercase text-sm tracking-[.2em]'>est. travel time</h3>
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