"use client";
import React, { useState, useEffect } from "react";

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className="flex justify-center w-full sticky top-0 z-50 px-4 py-2 mt-8">
            <div
            className={`flex justify-between items-center text-white transition-all duration-200 ${
                isScrolled
                ? "w-[90vw] p-2 bg-black/50 backdrop-blur-md shadow-lg rounded-lg"
                : "w-[90vw] p-2" // Slightly narrower than full width when not scrolled
            }`}
            >
            {/* Left section: Mobile menu button - consistent positioning */}
            <div className="md:hidden px-6 flex items-center">
                <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2"
                aria-label="Toggle menu"
                >
                <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d={
                        isMobileMenuOpen
                        ? "M6 18L18 6M6 6l12 12"
                        : "M4 6h16M4 12h16M4 18h16"
                    }
                    />
                </svg>
                </button>
            </div>

            {/* Center: Desktop menu - consistent positioning */}
            <div className="hidden md:flex px-6">
                <ul className="flex gap-6 lg:gap-10 font-semibold text-[14px] my-6">
                {["HOME", "ABOUT US", "WORKS", "ARTICLE"].map((item) => (
                    <li
                    key={item}
                    className="cursor-pointer hover:underline hover:translate-y-[-5px] transition-all duration-300"
                    >
                    {item}
                    </li>
                ))}
                </ul>
            </div>

            {/* Right: Book call button - consistent positioning */}
            <div className="hidden md:block px-6"></div>
                <button className="font-bold border-2 p-2 w-30 rounded-full hover:bg-white hover:text-black cursor-pointer transition-all duration-300 hover:scale-105 text-[14px] mr-2">
                BOOK CALL
                </button>
            </div>

            {/* Mobile dropdown menu */}
            {isMobileMenuOpen && (
            <div className="md:hidden absolute top-16 left-0 right-0 mx-4 bg-black/90 backdrop-blur-md mt-2 py-4 px-6 rounded-lg">
                <ul className="flex flex-col gap-4 font-semibold text-[14px] text-white">
                {["HOME", "ABOUT US", "WORKS", "ARTICLE"].map((item) => (
                    <li
                    key={item}
                    className="cursor-pointer hover:underline transition-all duration-300"
                    >
                    {item}
                    </li>
                ))}
               
                </ul>
            </div>
            )}
        </div>
    );
};

export default Navbar;
