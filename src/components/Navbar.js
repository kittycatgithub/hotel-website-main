"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { ChevronDown, ChevronUp, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import LocationMenu from "./LocationMenu";

export default function Navbar() {
// This code is for mobile view locations only
 const locations = [
  { name: 'Hotel Parashar Max', slug: 'hotel-max' },
  { name: 'Hotel Parashar Check Inn', slug: 'hotel-check-inn' },
  { name: 'Hotel Parashar Palm', slug: 'hotel-palm' },
];
  const toggleDropdown = () => setIsOpen(prev => !prev);
    const [isOpen2, setIsOpen2] = useState(false);


// This code is for normal menus

  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="p-3 bg-white shadow-md">
      <nav className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center ">
          {/* Logo */}
          <div>
            <Link href="/" className={`text-2xl font-bold ${pathname === "/" ? "text-primary" : ""}`}>
              <img src="./images/hotel-logo.jpg" className="h-16"/>
            </Link>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex gap-4 px-4 items-center">
            <Link href="/" className={`px-3 py-2 ${pathname === "/" ? "text-secondary/80 font-bold" : ""}`}>Home</Link>
            <Link href="/about" className={`px-3 py-2 ${pathname === "/about" ? "text-secondary/80 font-bold" : ""}`}>About</Link>
            {/* <Link href="/locations" className={`px-3 py-2 ${pathname === "/locations" ? "text-secondary/80 font-bold" : ""}`}>Locations</Link> */}
             <>
      {/* Desktop View (visible from lg and up) */}
      <div className="relative group hidden lg:inline-block text-left">
        {/* Trigger */}
        <Link href="/locations" className="inline-flex items-center font-medium text-black">
          Locations <ChevronDown className="ml-1 h-4 w-4" />
        </Link>

        {/* Dropdown */}
        <div className="absolute z-50 hidden group-hover:block w-[200px] md:-ml-2">
          <div className="grid grid-cols-1 gap-4 bg-white mt-2 shadow-md">
            <ul className="space-y-1">
              {locations.map((location, index) => (
                <li key={index} className="hover:bg-green-200 p-2">
                  <Link href={`/${location.slug}`} className="block text-gray-700">
                    {location.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Mobile & Tablet View (hidden on lg and up) */}
      <div className="lg:hidden flex flex-col">
        {/* Toggle Button */}
        <button
          onClick={toggleDropdown}
          className="flex items-center justify-between px-3 py-2 text-left w-full"
        >
          <span className="font-medium text-black">Locations</span>
          {isOpen2 ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
        </button>

        {/* Dropdown Items */}
        {isOpen2 && (
          <ul className="pl-3 space-y-1">
            {locations.map((location, index) => (
              <li key={index}>
                <Link
                  href={`/${location.slug}`}
                  className="block px-0 py-2 text-gray-900 hover:bg-green-100"
                >
                  {location.name}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
            <Link href="/contact" className={`px-3 py-2 ${pathname === "/contact" ? "text-secondary/80 font-bold" : ""}`}>Contact</Link>
            <Link href="/contact" className="bg-primary text-white px-3 py-2 rounded-md hover:bg-secondary transition duration-300">
              Book Now
            </Link>
            {/* <Link href="/booking" className="bg-primary text-white px-3 py-2 rounded-md hover:bg-secondary transition duration-300">
              Book Now
            </Link> */}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={toggleMenu}>
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu with Animation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="overflow-hidden flex flex-col gap-4 mt-4 md:hidden"
            >
              <Link href="/" onClick={toggleMenu} className={`px-3 py-2 ${pathname === "/" ? "text-primary font-semibold" : ""}`}>Home</Link>
              <Link href="/about" onClick={toggleMenu} className={`px-3 py-2 ${pathname === "/about" ? "text-primary font-semibold" : ""}`}>About</Link>
              {/* <Link href="/services" onClick={toggleMenu} className={`px-3 py-2 ${pathname === "/services" ? "text-primary font-semibold" : ""}`}>Services</Link> */}
               <>
      {/* Desktop View (visible from lg and up) */}
      <div className="relative group hidden lg:inline-block text-left">
        {/* Trigger */}
        <Link href="/locations" className={`inline-flex items-center font-medium text-black ${pathname === "/" ? "text-primary font-semibold" : ""}`}>
          Locations <ChevronDown className="ml-1 h-4 w-4" />
        </Link>

        {/* Dropdown */}
        <div className="absolute z-50 hidden group-hover:block w-[200px] md:-ml-2">
          <div className="grid grid-cols-1 gap-4 bg-white mt-2 shadow-md">
            <ul className="space-y-1">
              {locations.map((location, index) => (
                <li key={index} className="hover:bg-green-200 p-2">
                  <Link href={`/${location.slug}`} className="block text-gray-700">
                    {location.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Mobile & Tablet View (hidden on lg and up) */}
      <div className="lg:hidden flex flex-col">
        {/* Toggle Button */}
        <button
          onClick={toggleDropdown}
          className="flex items-center justify-between px-3 py-2 text-left w-full"
        >
          <span className="font-medium text-black">Locations</span>
          {isOpen ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
        </button>

        {/* Dropdown Items */}
        {isOpen && (
          <ul className="pl-3 space-y-1">
            {locations.map((location, index) => (
              <li key={index}>
                <Link
                  href={`/${location.slug}`}
                  className="block px-0 py-2 text-gray-900 hover:bg-green-100"
                  onClick={toggleMenu}
                >
                  {location.name}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
              <Link href="/contact" onClick={toggleMenu} className={`px-3 py-2 ${pathname === "/contact" ? "text-primary font-semibold" : ""}`}>Contact</Link>
              <Link href="/booking" onClick={toggleMenu} className="bg-primary text-white px-3 py-2 rounded-md hover:bg-primary/90 transition">
                Book Now
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </div>
  );
}
