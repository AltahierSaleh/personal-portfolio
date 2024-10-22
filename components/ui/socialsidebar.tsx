import { motion } from "framer-motion";
import React from 'react';
import { IconBrandGithub, IconBrandInstagram, IconBrandLinkedin, IconBrandCodepen } from '@tabler/icons-react';

const size = "20"

const socialLinks = [
  { icon: <IconBrandGithub size={size} />, label: "github", link: "https://github.com/AltahierSaleh" },
  { icon: <IconBrandCodepen size={size} />, label: "codepen", link: "https://codepen.com" },
  { icon: <IconBrandLinkedin size={size} />, label: "linkedin", link: "https://linkedin.com" },
  { icon: <IconBrandInstagram size={size} />, label: "instagram", link: "https://instagram.com" },
];

const Social = () => {
  return (
    <motion.div  
      initial={{ opacity: 0.0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.5,
        duration: 0.8,
        ease: "easeInOut",
      }} 
      className="fixed left-20 bottom-0 flex flex-col items-center space-y-8"
    >
      {socialLinks.map((link, index) => (
        <a
          key={index}
          href={link.link}
          target="_blank" 
          rel="noopener noreferrer"
          className="text-slate-400 hover:text-blue-200 transition ease-in-out hover:-translate-y-1 duration-300"
          aria-label={link.label}
        >
          {link.icon}
        </a>
      ))}
      <div className="w-[0.5px] h-20 bg-slate-400 mt-8"></div>
    </motion.div>
  );
};

export default Social;

