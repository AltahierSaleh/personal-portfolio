import { OrbitingCircles } from "@/components/ui/techorbit/orbitcircles";
import { IconBrandGithubFilled, IconBrandJavascript, IconBrandReact, IconBrandPython } from '@tabler/icons-react';

export function Orbit() {
  return (
    <div className="relative flex h-[350px] w-[350px] flex-col items-center justify-center overflow rounded-lg ">
      <span className="pointer-events-none whitespace-pre-wrap text-slate-300 text-center text-6xl font-semibold ">
        Tech Orbit
      </span>

      {/* Inner Circles */}
      <OrbitingCircles
        className="size-[30px] border-none bg-transparent"
        duration={20}
        delay={20} 
        radius={70}
      >
        <IconBrandGithubFilled size={25} color="#020617" />
      </OrbitingCircles>
      <OrbitingCircles
        className="size-[30px] border-none bg-transparent"
        duration={20}
        delay={10}
        radius={70}
      >
        <IconBrandJavascript size={25} color="#020617" />
      </OrbitingCircles>

      {/* Outer Circles (reverse) */}
      <OrbitingCircles
        className="z-1 size-[50px] border-none bg-transparent"
        radius={170}
        duration={20}
        reverse
      >
        <IconBrandReact size={50} color="#020617" />
      </OrbitingCircles>
      <OrbitingCircles
        className=" size-[50px] border-none bg-transparent"
        radius={170}
        duration={20}
        delay={20}
        reverse
      >
        <IconBrandPython size={50} color="#020617" />
      </OrbitingCircles>
    </div>
  );
}


