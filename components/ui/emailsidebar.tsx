import React from 'react'
import {motion} from 'framer-motion';

const email = "Altahiersaleh@gmail.com";

const Email = () => {
  return (
    <motion.div  
      initial={{ opacity: 0.0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.5,
        duration: 0.8,
        ease: "easeInOut",
      }} 
      className="fixed right-0 bottom-0 flex flex-col items-center"
    >
      <div className="text-slate-400 hover:text-blue-200 transition ease-in-out hover:-translate-y-1 duration-300 rotate-90 mb-10">
        <a href={`mailto:${email}`} aria-label="Email">
          {email}
        </a>
      </div>
      <div className="w-[1px] h-20 bg-slate-400 mt-20"></div>
    </motion.div>
  )
}

export default Email
