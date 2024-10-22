import React from 'react'

const Hero = () => {
  return (
    <div id="home" className="relative flex sm:justify-center mt-[200px] mb-[100px] sm:mb-[0px] sm:mt-[0px] sm:items-center sm:h-screen">
      <div className="text-white text-left">
        <p className="text-slate-400 sm:text-xl">
          Hi, my name is
        </p>
        <h1 className="font-semibold text-blue-200 sm:text-8xl text-5xl">
          Altahier Saleh.
        </h1>
        <h1 className="font-bold text-slate-400 text-1xl sm:text-5xl">
          I build things on the web
        </h1> 
        <p className="pr-10 pt-4 text-slate-400 w-[600px] text-sm sm:text-lg">
          I love using the latest programming languages and technologies to bring ideas to life and create innovative digital experiences. Let&apos;s build something awesome!
        </p> 
        <div className="relative mt-5 p-[1px] bg-slate-700 rounded-md w-max">
          <a href={`mailto:Altahiersaleh@gmail.com`} aria-label="Email" className="relative text-slate-400 border border-slate-700 bg-slate-950 px-6 py-3 rounded-md inline-block transition-transform duration-300 ease-in-out transform hover:translate-x-1 hover:translate-y-1">
            Let&apos;s get in touch
          </a>
        </div>
      </div>
    </div>
  )
}

export default Hero
