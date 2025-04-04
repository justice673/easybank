import React, { useState } from "react";
import logo from "../assets/images/logo.svg";
import { useTheme } from "../context/ThemeContext";

const Navbar = () => {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
    const { darkMode, toggleDarkMode } = useTheme();

    return (
        <header className="bg-white dark:bg-gray-900 shadow-md fixed top-0 left-0 w-full z-50 py-5 px-10">
            <div className="container mx-auto flex items-center justify-between">
                <a href="/" className="flex items-center">
                    <img src={logo} alt="Easybank logo" className="h-6" />
                </a>

                <nav className="hidden md:block">
                    <ul className="flex space-x-8">
                        <li><a href="/" className="text-gray-500 dark:text-gray-300 hover:text-green-500">Home</a></li>
                        <li><a href="/about" className="text-gray-500 dark:text-gray-300 hover:text-green-500">About</a></li>
                        <li><a href="/contact" className="text-gray-500 dark:text-gray-300 hover:text-green-500">Contact</a></li>
                        <li><a href="/blog" className="text-gray-500 dark:text-gray-300 hover:text-green-500">Blog</a></li>
                        <li><a href="/careers" className="text-gray-500 dark:text-gray-300 hover:text-green-500">Careers</a></li>
                    </ul>
                </nav>

                {/* Dark Mode Toggle Button */}
                <div
                    className={`w-16 aspect-video ${darkMode ? "bg-[#3a3347]" : "bg-[#ebe6ef]"
                        } border-4 border-[#121331]`}
                >
                    <div className="flex h-full w-full px-1 items-center gap-x-1 relative">
                        <div className="absolute bottom-1 left-1 w-4 h-4 flex-shrink-0 rounded-full border-2 border-[#121331]"></div>
                        <div className="absolute bottom-2.5 right-1 w-4 h-1 flex-shrink-0 bg-[#121331] rounded-full"></div>
                        <label
                            htmlFor="switch"
                            className="w-full h-8 cursor-pointer"
                        >
                            <input
                                type="checkbox"
                                id="switch"
                                className="hidden peer"
                                checked={darkMode}
                                onChange={toggleDarkMode}
                            />
                            <div className={`w-8 h-8 bg-gradient-to-r from-green-400 to-cyan-500 relative transition-all duration-300 ${darkMode ? "translate-x-[100%]" : "translate-x-0"
                                }`}>
                                <div className="w-0 h-0 z-20 border-l-[16px] border-l-transparent border-r-[16px] border-r-transparent border-t-[14px] border-t-[#121331] relative">
                                    <div className="w-0 h-0 absolute border-l-[12px] border-l-transparent border-r-[12px] border-r-transparent border-t-[10px] border-t-green-500 -top-3 -left-[12px]"></div>
                                </div>
                                <div className="w-[16px] h-6 z-10 absolute top-[6px] left-0 bg-gradient-to-r from-green-400 to-cyan-500 border-r-2 border-b-2 border-[#121331] transform skew-y-[39deg]"></div>
                                <div className="w-[17px] h-6 z-10 absolute top-[6px] left-[16px] bg-gradient-to-r from-green-400 to-cyan-500 border-r-2 border-l-1 border-b-2 border-[#121331] transform skew-y-[-39deg]"></div>
                            </div>
                        </label>
                    </div>
                </div>

                <button className="hidden md:block rounded-full bg-gradient-to-r from-green-400 to-cyan-500 px-7 py-3 text-sm font-medium text-white hover:from-green-500 hover:to-cyan-600">
                    Request Invite
                </button>

                <button onClick={() => setMobileMenuOpen(!isMobileMenuOpen)} className="block md:hidden z-20">
                    {isMobileMenuOpen ? (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 dark:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 dark:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    )}
                </button>
            </div>

            {isMobileMenuOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 z-40" onClick={() => setMobileMenuOpen(false)}></div>
            )}

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="absolute left-5 right-5 w-50% bg-white dark:bg-gray-800 shadow-lg flex flex-col items-center py-10 rounded-lg space-y-6 z-50 mt-10">
                    <nav className="text-black dark:text-white text-center text-lg space-y-8">
                        <ul>
                            <li><a href="/" onClick={() => setMobileMenuOpen(false)} className="hover:text-green-500">Home</a></li>
                            <li><a href="/about" onClick={() => setMobileMenuOpen(false)} className="hover:text-green-500">About</a></li>
                            <li><a href="/contact" onClick={() => setMobileMenuOpen(false)} className="hover:text-green-500">Contact</a></li>
                            <li><a href="/blog" onClick={() => setMobileMenuOpen(false)} className="hover:text-green-500">Blog</a></li>
                            <li><a href="/careers" onClick={() => setMobileMenuOpen(false)} className="hover:text-green-500">Careers</a></li>
                        </ul>
                    </nav>
                </div>
            )}
        </header>
    );
};

export default Navbar;
