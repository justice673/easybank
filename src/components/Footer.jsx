import React from 'react';
import logo from '../assets/images/logo.svg';
import facebook from '../assets/images/icon-facebook.svg';
import twitter from '../assets/images/icon-twitter.svg';
import pinterest from '../assets/images/icon-pinterest.svg';
import instagram from '../assets/images/icon-instagram.svg';
import youtube from '../assets/images/icon-youtube.svg';

const Footer = () => {
  return (
    <footer className="bg-slate-800 dark:bg-gray-900 mt-8 py-12 text-white">
      <div className="container mx-auto flex flex-col items-center space-y-8 px-6 text-center md:grid md:grid-cols-3 md:text-left">
        
        <div className="flex flex-col items-center space-y-6 md:items-start">
          <img 
            src={logo} 
            alt="Easybank logo" 
            className="h-6 brightness-0 invert contrast-200 dark:brightness-200 dark:invert-0 dark:contrast-0" 
          />
          <div className="flex space-x-4">
            {[
              { icon: facebook, label: "Facebook" },
              { icon: youtube, label: "YouTube" },
              { icon: twitter, label: "Twitter" },
              { icon: pinterest, label: "Pinterest" },
              { icon: instagram, label: "Instagram" },
            ].map((social) => (
              <a 
                key={social.label}
                href="#" 
                aria-label={social.label}
                className="transition-all duration-200 hover:opacity-80 hover:scale-110"
              >
                <img 
                  src={social.icon} 
                  alt={social.label} 
                  className="h-6 dark:filter dark:brightness-0 dark:invert" 
                />
              </a>
            ))}
          </div>
        </div>

        <div className="flex flex-col space-y-4 md:flex-row md:space-x-16 md:space-y-0">
          <div className="flex flex-col space-y-4">
            {['About Us', 'Contact', 'Blog'].map((item) => (
              <a 
                key={item}
                href="#" 
                className="transition-colors duration-200 hover:text-green-400 dark:text-gray-300 dark:hover:text-green-300"
              >
                {item}
              </a>
            ))}
          </div>

          <div className="flex flex-col space-y-4">
            {['Careers', 'Support', 'Privacy Policy'].map((item) => (
              <a 
                key={item}
                href="#" 
                className="transition-colors duration-200 hover:text-green-400 dark:text-gray-300 dark:hover:text-green-300"
              >
                {item}
              </a>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-center space-y-6 md:items-end">
          <button className="rounded-full bg-gradient-to-r from-green-400 to-cyan-500 px-7 py-3 text-sm font-medium text-white transition-all duration-300 hover:from-green-500 hover:to-cyan-600 hover:shadow-lg dark:from-green-500 dark:to-cyan-600 dark:hover:from-green-600 dark:hover:to-cyan-700">
            Request Invite
          </button>
          <p className="text-gray-400 dark:text-gray-500">
            © Easybank. All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
