import React from 'react'

const Contact = () => {
  return (
    <div id="contact" className="mb-60 text-center">
      <h1 className="text-blue-200 text-3xl font-bold pb-2">
        Want To Get In Touch. 
      </h1>
      <p className="text-slate-400 text-md font-semibold pb-5 text-balance px-[30%]">
        Im currently looking for any opportunity you can give me so if you're interested in my work and skills, or even if you just want to ask me anything, don't hesitate to shoot me an email, my inbox is always open.
      </p>
      <div className="flex justify-center">
        <div className="relative mt-2 p-[1px] bg-slate-700 rounded-md w-max">
          <a href={`mailto:Altahiersaleh@gmail.com`} aria-label="Email" className="relative text-slate-400 border border-slate-700 bg-slate-950 px-6 py-3 rounded-md inline-block transition-transform duration-300 ease-in-out transform hover:translate-x-1 hover:translate-y-1">
            Say Hi
          </a>
        </div>
      </div>
    </div>
  )
}

export default Contact

