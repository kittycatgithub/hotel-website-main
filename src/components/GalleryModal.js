"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";

const GalleryModal = ({ images }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const thumbnailRefs = useRef([]);

  const goPrev = () => {
    setActiveIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goNext = () => {
    setActiveIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [images.length]);

  if (!images || images.length === 0) return null;

  return (
    <div className="w-full max-w-xs md:max-w-full   mx-auto py-8 md:px-6 bg-gray-50" >
       <div className="w-fit mx-auto  py-6">
                    <h1 className="text-4xl font-bold"><strong className="text-primary text-center">Gallery</strong></h1>
                  </div>
      {/* Image + Controls */}
      <div className="flex flex-col sm:flex-row items-center justify-center w-fit mx-auto gap-4 mb-4 ">
        <button
          onClick={goPrev}
          className="bg-white border border-gray-300 p-2 sm:p-3 rounded-full shadow hover:bg-gray-200"
        >
          <img
            src="https://www.svgrepo.com/show/533620/arrow-sm-left.svg"
            className="h-5 sm:h-6"
            alt="Prev"
          />
        </button>

        <div className="w-full max-w-full flex justify-center items-center ">
          <div className="relative w-full max-w-full max-h-[60vh] sm:max-h-[70vh]  flex justify-center items-center">
            <Image
              src={images[activeIndex]}
              alt={`Image ${activeIndex + 1}`}
              width={800}
              height={500}
              className="rounded-lg object-contain shadow-2xl bg-black h-auto max-h-[60vh]"
            />
          </div>
        </div>

        <button
          onClick={goNext}
          className="bg-white border border-gray-300 p-2 sm:p-3 rounded-full shadow hover:bg-gray-200"
        >
          <img
            src="https://www.svgrepo.com/show/533610/arrow-right.svg"
            className="h-5 sm:h-6"
            alt="Next"
          />
        </button>
      </div>

      {/* Index Counter */}
      <div className="text-center mb-3 text-sm text-gray-600">
        Image {activeIndex + 1} / {images.length}
      </div>

      {/* Thumbnails */}
      <div className="overflow-x-auto md:mx-auto md:justify-center md:w-fit max-w-xs md:max-w-full">
        <div className="flex gap-2 sm:gap-3 px-1 w-max">
          {images.map((img, idx) => (
            <div
              key={idx}
              ref={(el) => (thumbnailRefs.current[idx] = el)}
              onClick={() => setActiveIndex(idx)}
              className={`cursor-pointer flex-shrink-0 border-2 rounded overflow-hidden transition ${
                activeIndex === idx
                  ? "border-yellow-400"
                  : "border-transparent hover:border-gray-300"
              }`}
            >
              <Image
                src={img}
                alt={`Thumbnail ${idx + 1}`}
                width={80}
                height={60}
                className="w-16 h-12 sm:w-24 sm:h-16 object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GalleryModal;