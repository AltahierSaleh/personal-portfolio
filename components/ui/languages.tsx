import React from 'react'
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger, } from "@/components/ui/alert"
import Particles from "@/components/ui/particles";
import { IconArrowNarrowRightDashed } from '@tabler/icons-react';

const Languages = () => {
  return (
    <div>
      <AlertDialog>
        <AlertDialogTrigger className="relative mt-5 p-[1px] bg-slate-700 rounded-md w-max">
          <h1 className="relative text-slate-400 border border-slate-700 bg-slate-950 px-6 py-3 rounded-md inline-block transition-transform duration-300 ease-in-out transform hover:translate-x-1 hover:translate-y-1">
            Learn More 
          </h1>
        </AlertDialogTrigger>
        <AlertDialogContent className="bg-slate-950">
            <div className="flex flex-row justify-start gap-20">
              <div>
                <h1 className="text-blue-200 font-semibold text-4xl pb-5">
                  Languages
                </h1>
                <ul className="text-slate-400">
                  <li>
                    <p>> Javascript</p>
                  </li>
                  <li>
                    <p>> Python</p>
                  </li>
                  <li>
                    <p>> React js</p>
                  </li>
                  <li>
                    <p>> C</p>
                  </li>
                </ul>
              </div>
              <div>
                <h1 className="text-blue-200 font-semibold text-4xl pb-5">
                  Technologies
                </h1>
                <ul className="text-slate-400">
                  <li>
                    <p>> Framer Motion</p>
                  </li>
                  <li>
                    <p>> Figma</p>
                  </li>
                  <li>
                    <p>> Tailwind CSS</p>
                  </li>
                  <li>
                    <p>> Git</p>
                  </li>
                </ul>
              </div> 
            </div>
          <AlertDialogCancel className="relative w-max h-max mt-5 p-[1px] bg-slate-700 rounded-md w-max">
            <h1 className="relative text-slate-400 border border-slate-700 bg-slate-950 px-6 py-3 rounded-md inline-block transition-transform duration-300 ease-in-out transform hover:translate-x-1 hover:translate-y-1 hover:text-blue-200">
              Exit 
            </h1> 
          </AlertDialogCancel>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  )
}

export default Languages
