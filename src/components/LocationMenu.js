'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ChevronDown, ChevronUp } from 'lucide-react';



export default function LocationMenu() {
  const locations = [
  { name: 'Hotel Parashar Max', slug: 'hotel-max' },
  { name: 'Hotel Parashar Check Inn', slug: 'hotel-check-inn' },
  { name: 'Hotel Parashar Palm', slug: 'hotel-palm' },
];
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(prev => !prev);

  return (
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
                >
                  {location.name}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
}
