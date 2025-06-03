import React, { useState } from "react";

// Replace with your real image URLs
const images = [
  "https://img.freepik.com/free-photo/luxury-hotel-reception-hall-lounge-restaurant-with-high-ceiling_105762-1771.jpg?uid=R159003840&ga=GA1.1.367398006.1746862920&semt=ais_hybrid&w=740",
  "https://img.freepik.com/free-photo/african-american-couple-reception-arriving-hotel-preparing-check-process-happy-man-woman-asking-front-desk-staff-about-room-reservation-fill-registration-forms_482257-64936.jpg?uid=R159003840&ga=GA1.1.367398006.1746862920&semt=ais_hybrid&w=740",
  "https://img.freepik.com/free-photo/luxury-hotel-reception-hall-lounge-restaurant-with-high-ceiling_105762-1771.jpg?uid=R159003840&ga=GA1.1.367398006.1746862920&semt=ais_hybrid&w=740",
  "https://img.freepik.com/free-photo/luxury-hotel-reception-hall-lounge-restaurant-with-high-ceiling_105762-1771.jpg?uid=R159003840&ga=GA1.1.367398006.1746862920&semt=ais_hybrid&w=740",
  "https://img.freepik.com/free-photo/luxury-hotel-reception-hall-lounge-restaurant-with-high-ceiling_105762-1771.jpg?uid=R159003840&ga=GA1.1.367398006.1746862920&semt=ais_hybrid&w=740",
  "https://img.freepik.com/free-photo/luxury-hotel-reception-hall-lounge-restaurant-with-high-ceiling_105762-1771.jpg?uid=R159003840&ga=GA1.1.367398006.1746862920&semt=ais_hybrid&w=740",
];

const GalleryPreview = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="w-full max-w-5xl mx-auto p-4">
      {/* Main Image */}
      <div className="mb-4">
        <img
          src={images[activeIndex]}
          alt={`Preview ${activeIndex + 1}`}
          className="w-full h-auto rounded shadow-lg object-cover"
        />
      </div>

      {/* Thumbnails */}
      <div className="flex flex-wrap gap-3 justify-start">
        {images.map((img, idx) => (
          <div
            key={idx}
            onClick={() => setActiveIndex(idx)}
            className={`cursor-pointer border-2 rounded overflow-hidden ${
              activeIndex === idx
                ? "border-gold shadow-md"
                : "border-transparent hover:border-gray-300"
            }`}
          >
            <img
              src={img}
              alt={`Thumbnail ${idx + 1}`}
              className="w-24 h-16 object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default GalleryPreview;
