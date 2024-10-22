"use client";
import Image from "next/image";
import React from "react";
import { WobbleCard } from "@/components/ui/wobble-card";
import { Orbit } from "@/components/ui/techorbit/orbit";
import Languages from "@/components/ui/languages";

export function About() {
  return (
    <div id="about" className="pt-10 mb-[100px]">
      <div>
        <h1 className="text-blue-200 text-3xl font-bold pb-2 text-center">
          Some Things About Me. 
        </h1>
        <p className="text-slate-400 text-md font-semibold pb-10 text-center">
          if you want to know
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-5xl mx-auto w-full">
        <WobbleCard
          containerClassName="col-span-1 lg:col-span-2 h-full bg-slate-950 min-h-[500px] lg:min-h-[300px]"
          className=""
        >
          <div className="max-w-xs">
            <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-slate-300">
              About me
            </h2>
            <p className="mt-4 text-left text-base/6 text-slate-400">
              Hey, I’m Altahier Saleh, a computer science student at TUD College who loves building things on the web. I’m all about exploring new programming languages, tackling challenges, and turning ideas into real projects.  
            </p>
          </div>
          <Image
            src="/images/nvimBackground.png"
            width={500}
            height={500}
            alt="linear demo image"
            className="absolute -right-4 lg:-right-[40%] filter -bottom-10 object-contain rounded-md"
          />
        </WobbleCard>
        <WobbleCard cottainerClassName="col-span-1 min-h-[300px] bg-slate-950">
          <h2 className="max-w-80 text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-slate-300">
            Hobbies
          </h2>
          <p className="mt-4 max-w-[26rem] text-left text-base/6 text-slate-400">
            In my free time, I love diving into hobbies that keep me inspired. Whether it&apos;s exploring new tech trends, playing video games, or working on personal coding projects, I enjoy staying connected to the world of technology.
          </p>
        </WobbleCard>
        <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-slate-950 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="max-w-sm basis-1/2 lg:mr-4">
              <h2 className="max-w-sm md:max-w-lg text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-slate-300">
                Languages & Technologies
              </h2>
              <p className="mt-4 max-w-[26rem] text-left text-base/6 text-slate-400">
                I mainly work with JavaScript and<a className="text-blue-200"> React.js </a>to build dynamic web applications, but I also have experience with<a className="text-blue-200"> C </a>and some<a className="text-blue-200"> Python</a>. For styling and design, I use Tailwind CSS, Framer Motion for animations, and Figma for UI design. I’m always learning and exploring new tools to stay up-to-date with the latest in web development!
              </p>
              <Languages />
            </div>
            <div className="flex w-full h-full basis-1/2 visible justify-end">
              <Orbit />
            </div>
          </div>
        </WobbleCard>
      </div>
    </div>
  );
}
