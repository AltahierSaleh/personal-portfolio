import { IconHome, IconMessage, IconUser, IconAlt, IconBriefcase } from "@tabler/icons-react";

export const navItems = [
    {
      name: "ABOUT",
      link: "#about",
      icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "PROJECTS",
      link: "#projects",
      icon: <IconBriefcase className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "CONTACTS",
      link: "#contact",
      icon: <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />
    },
  ];

export const projects = [
  {
    title: "Portfolio webpage",
    description:
      "This portfolio is a reflection of my work and creativity, built to showcase my projects and skills. It’s designed with a clean and intuitive layout, making it easy to explore my journey as a web/software developer.",
    link: "https://altahiersaleh.com",
  },
  {
    title: "Music Visuals",
    description:
      "A collection of captivating and immersive environment that beautifully showcases the integration of 3D elements, color palettes, animations, and audio for a unique Music Visualizer. Made by a group of amazing students.",
    link: "https://github.com/altahier136/MusicVisuals",
  },
  {
    title: "Lazyvim IDE Config",
    description:
      "Custom LazyVim configuration built on Neovim, featuring optimized key mappings, curated plugins, and a clean, efficient UI. Designed to enhance coding productivity and streamline the development workflow for a smoother experience.",
    link: "https://https://github.com/AltahierSaleh/personal-Lazyvim-IDE",
  },
  
];

