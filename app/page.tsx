"use client";
import React from "react";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { IconHome, IconMessage, IconUser } from "@tabler/icons-react";
import { navItems } from "@/data/index"
import Hero from "@/components/hero";
import { About } from "@/components/about";
import Email from "@/components/ui/emailsidebar";
import Social from "@/components/ui/socialsidebar";
import Particles from "@/components/ui/particles";
import Projects from "@/components/projects";
import Contact from "@/components/contact";
import Footer from "@/components/footer";

export default function Home() {
  return (
      <div>
        <main>
          <Particles className="fixed h-screen w-screen" />
          <FloatingNav navItems={navItems} />
          <Hero />
          <About />
          <Projects />
          <Contact />
          <Footer />
          <Social />
          <Email />
        </main>
      </div>
   );
}
