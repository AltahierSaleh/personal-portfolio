"use client";
import React, { useState } from "react";
import { IconAlt } from "@tabler/icons-react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";
 
interface NavItem {
  name: string;
  link: string;
  icon?: JSX.Element;
}

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: NavItem[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(true); // Default to true to keep it visible at the top

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    // Check if current is not undefined and is a number
    if (typeof current === "number") {
      const direction = current! - scrollYProgress.getPrevious()!;
 
      // Always show the navbar when at the very top
      if (scrollYProgress.get() === 0) {
        setVisible(true);
      } else {
        // Show when scrolling up, hide when scrolling down
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    }
  });
 
  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          "flex max-w-fit fixed top-10 inset-x-0 mx-auto border border-slate-700 rounded-md bg-slate-950 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] pr-2 pl-8 py-2 items-center justify-center space-x-7",
          className
        )}
      >
        <a href="#home" className="text-sky-200 hover:text-slate-400" >
          <IconAlt size={30} />
        </a>
        {navItems.map(navItem: 1, idx: number) => (
          <Link
            key={`link=${idx}`}
            href={navItem.link}
            className={cn(
              "relative font-semibold items-center flex space-x-1 text-slate-400 hover:text-blue-200 hover:-translate-y-1 duration-300"
            )}
          >
            <span className="block sm:hidden">{navItem.icon}</span>
            <span className="hidden sm:block text-sm">{navItem.name}</span>
          </Link>
        ))}
        <div className="relative p-[1px] bg-slate-700 rounded-md w-max">
          <a href="/Resume.pdf" target="_blank" rel="noopener noreferrer" className="relative text-slate-400 text-justify border border-slate-700 bg-slate-950 px-4 pb-2 pt-[5px] rounded-md inline-block transition-transform duration-300 ease-in-out transform hover:translate-x-1 hover:translate-y-1">
            Resume
          </a>
        </div>

     </motion.div>
    </AnimatePresence>
  );
};
