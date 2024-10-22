import { HoverEffect } from "@/components/ui/card-hover-effect";
import { projects } from "@/data/index";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

const Projects = () => {
  return (
    <div id="projects" className="pt-28 max-w-5xl mx-auto px-8 mb-[300px]">
      <div>
        <h1 className="text-blue-200 text-3xl font-bold pb-2 text-center">
          Things I Have Built. 
        </h1>
        <p className="text-slate-400 text-md font-semibold pb-10 text-center">
          if your interested
        </p>
      </div>
      <HoverEffect items={projects} />
      <TooltipProvider>
        <Tooltip delayDuration={1}>
          <TooltipTrigger asChild>
            <div className="flex justify-center mt-5">
              <div className="relative p-[1px] bg-slate-700 rounded-md w-max">
                <a className="relative text-slate-400 border border-slate-700 bg-slate-950 hover:bg-slate-700 px-6 py-3 rounded-md inline-block ">
                  Show More
                </a>
              </div>
            </div>
          </TooltipTrigger>
          <TooltipContent className="bg-slate-700 text-slate-300">
            <p>Oops, more projects coming soon!</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>    
    </div>
  );
};

export default Projects
