import React from 'react';
import { IconBrandGithubFilled, IconBrandLinkedin, IconBrandTwitter } from '@tabler/icons-react';

const Footer = () => {
  return (
    <div>
      <footer className="relative rounded-md shadow mb-4 mx-[38%] border border-slate-700 bg-slate-950">
        <div className="w-full mx-auto p-4 md:flex md:items-center md:justify-between">
          <span className="text-sm sm:text-center text-slate-400">
            Designed & Built by Altahier Saleh
          </span>
          <ul className="flex flex-wrap gap-3 items-center mt-3 text-sm font-medium sm:mt-0 text-slate-400">
            <li>
                <a href="https://github.com/AltahierSaleh" aria-label="GitHub Profile" target="_blank" rel="noopener noreferrer" className="text-slate-400">
                  <IconBrandGithubFilled size="20" />
                </a>
            </li>
            <li>
                <a href="https://www.linkedin.com/in/your-profile" aria-label="LinkedIn Profile" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:translate-y-1">
                  <IconBrandLinkedin size="20" />
                </a>
            </li>
            <li>
                <a href="https://twitter.com/your-profile" aria-label="Twitter Profile" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:translate-y-1">
                  <IconBrandTwitter size="20" />
                </a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
}

export default Footer;

