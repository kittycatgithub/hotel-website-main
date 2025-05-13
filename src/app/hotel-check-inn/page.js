"use client";

import React, { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion';

import cozyCabin1 from "../../../public/images/Cozy-cabin1.png";
import cozyCabin2 from "../../../public/images/cozy-cabin2.jpg";
import cozyCabin3 from "../../../public/images/cozy-cabin3.jpeg";
import cozyCabin4 from "../../../public/images/cozy-cabin4.jpg";
import Image from 'next/image';
import { FiWifi, FiX } from "react-icons/fi";
import { MdPool, MdFreeBreakfast, MdDinnerDining, MdNaturePeople, MdEco, MdLocationOn, MdWash, MdLocalHospital } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaParking, FaConciergeBell, FaHandsHelping, FaTag, FaBed, FaStar, FaHeart, FaLeaf, FaLightbulb } from "react-icons/fa"


const HotelCheckInn = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [selectedRoom, setSelectedRoom] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
  
    const openModal = (room) => {
      setSelectedRoom(room);
      setIsModalOpen(true);
      document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
    };
  
    const closeModal = () => {
      setIsModalOpen(false);
      document.body.style.overflow = 'auto'; // Re-enable scrolling
    };
     const facilities = [
        {
          name: "Free Wi-Fi",
          icon: <FiWifi size={30} className="text-primary mb-2" />,
        },
        {
          name: "Hot Water 24/7",
          icon: <MdWash size={30} className="text-primary mb-2" />,
        },
        {
          name: "Food",
          icon: <MdDinnerDining size={30} className="text-primary mb-2" />,
        },
        {
          name: "Doctor On Call",
          icon: <MdLocalHospital size={30} className="text-primary mb-2" />,
        },
        {
          name: "24H Room service",
          icon: <FaBed size={30} className="text-primary mb-2" />,
        },
        {
          name: "Huge Parking Space",
          icon: <FaParking size={30} className="text-primary mb-2" />,
        },
        {
          name: "Flat Screen TV's",
          icon: <MdNaturePeople size={30} className="text-primary mb-2" />,
        },
      ];
    
    const roomType = [
       {
        name: "Premium AC",
        img: cozyCabin2,
        type: "premium",
        bed: "Comfortable Bed with Balcony View",
        availability: 9,
        price: "2200/ + 12% GST",
        description: "Enjoy peaceful moments by the fire in this cozy cabin ideal for romantic getaways."
      },
      {
        name: "Deluxe AC",
        img: cozyCabin1,
        type: "deluxe",
        bed: "Comfortable Bed with Balcony View",
        availability: 4,
        price: "2000/ + 12% GST",
        description: "A luxurious escape nestled in the forest, featuring a balcony with breathtaking views."
      },
      {
        name: "Non AC",
        img: cozyCabin3,
        type: "nonac",
        bed: "Comfortable Bed with Balcony View",
        availability: 2,
        price: "1200/ + 12% GST",
        description: "Enjoy peaceful moments by the fire in this cozy cabin ideal for romantic getaways."
      },
      {
        name: "Dormitory",
        img: cozyCabin4,
        type: "dormitory",
        bed: "Comfortable Bed with Balcony View",
        availability: 7,
        price: "500/ + 12% GST",
        description: "Enjoy peaceful moments by the fire in this cozy cabin ideal for romantic getaways."
      },
    ];
   
  const filteredRooms = activeTab === "all" ? roomType : roomType.filter(room => room.type === activeTab);

  const tabs = [
    { label: "All", value: "all" },
    { label: "Premium AC", value: "premium" },
    { label: "Deluxe Ac", value: "deluxe" },
    { label: "Non-AC", value: "nonac" },
    { label: "Dormitory", value: "dormitory" },  
  ];
    const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8, ease: "easeOut" } }
  };
    const values = [
      {
        icon: <FaStar className="text-3xl text-yellow-400" />,
        title: "Timings",
        description: "CheckIn - 12:00 Noon Checkout - 11:00 AM ",
      },
      {
        icon: <FaHeart className="text-3xl text-red-400" />,
        title: "Payment Accepted",
        description: "UPI , Cards , Cash",
      },
      {
        icon: <FaLeaf className="text-3xl text-green-500" />,
        title: "Cancellation Timings",
        description: "Cancellation made at least 24 to 48 hours before the scheduled check-in date are eligible for a full refund. Cancellation made within 24 hours of check-in may incur a one-night stay charge.",
      },
      {
        icon: <FaLightbulb className="text-3xl text-blue-400" />,
        title: "Booking",
        description: "A deposit of 25% to 50% of the total amount may required to confirm booking and no refunds or changes are allowed .",
      }
    ];
    const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const valueItem = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };


  return (
    <div>
    <div className="relative w-full h-[10vh] min-h-[250px]">
     <img src="https://img.freepik.com/free-psd/classic-ballroom-award-ceremony-generative-ai_587448-2237.jpg?t=st=1746687491~exp=1746691091~hmac=8e377c379785013806bd49dc224c3aca89c48e3832c15f296e9cae5c1f19dca9&w=1380" alt="Background Image" className="object-cover object-center w-full h-full" />

  <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center px-4 text-center">
    <motion.h1 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-white text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6"
    >
      Hotel Parashar Check Inn
    </motion.h1>

  </div>
</div>

       {/* Core Values Section */}
      <motion.div
        className="px-4 bg-green-50 pb-10"
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="max-w-6xl mx-auto">
            <div className="justify-center mx-auto h-full sm:p-10">
                <header className=" px-4 lg:flex items-center h-full pt-4 lg:pt-0">
          <div className="w-full">
            <h1 className="text-4xl lg:text-4xl font-bold">welcome to <span className="text-green-700">Hotel Parashar Check Inn</span></h1>
            <div className="w-20 h-2 bg-green-700 my-4"></div>
            <p className="text-xl mb-10"> where comfort meets elegance in the heart of nagpur . Our hotel offers a perfect blend of mordern amenities and warm hospitality for both business and leisure travelers . Guest can enjoy well-appointed rooms with luxurious bedding , complimentary Wi-Fi , flate-screen TVs, and 24- hour room service.</p>
          </div>
        </header>
      </div>
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {values.map((value, index) => (
              <motion.div
                key={index}
                variants={valueItem}
                whileHover={{ y: -10 }}
              >
                <div className="relative isolate lg:h-60 h-44 flex flex-col justify-start  bg-[#7775A4] overflow-hidden rounded-2xl px-4 max-w-sm mx-auto">
    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
    <h3 className="z-10 mt-3 text-3xl font-bold text-white">{value.title}</h3>
    <div className="z-10 gap-y-1 overflow-hidden text-sm leading-6 text-white">{value.description}</div>
</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>

        {/* Room Type Section */}
        <motion.section 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.6,
                ease: "easeOut"
              }
            }
          }}
          className="mx-5 py-12"
        >
  
  
          <div className="lg:mx-5 lg:p-3">
            <div className="mb-6">
              <h1 className="text-4xl font-bold"><strong className="text-primary">Discover</strong> Hotel Parashar Palm 🌴</h1>
            </div>
  
            {/* Tabs */}
            <div className="flex gap-3 mb-8 flex-wrap">
              {tabs.map(tab => (
                <button
                  key={tab.value}
                  onClick={() => setActiveTab(tab.value)}
                  className={`px-4 py-2 rounded-full font-medium transition-all ${
                    activeTab === tab.value
                      ? "bg-primary text-white scale-105 shadow-lg"
                      : "bg-gray-100 text-gray-800 hover:bg-primary/20"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
  
            {/* Rooms */}
            <motion.div
              layout
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filteredRooms.map((room, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.9, delay: index * 0.1 }}
                  className="relative group bg-primary rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 cursor-pointer"
                  onClick={() => openModal(room)}
                >
                  <div className="relative w-full h-64 overflow-hidden">
                    <Image
                      src={room.img}
                      alt={room.name}
                      fill
                      className="object-cover transition-all duration-500 group-hover:blur-sm"
                    />
                
                    {/* Overlay content */}
                    <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-center items-center text-white p-4 text-center">
                      {/* <p className="text-sm mb-2">{room.bed}</p> */}
                      <p className="text-sm mb-2">Available : {room.availability} rooms</p>
                      <p className="text-lg font-bold">{room.price}</p>
                    </div>
                  </div>
                
                  <div className="p-4">
                    <h2 className="text-lg font-semibold text-white">{room.name}</h2>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
  
          
  
          {/* Room Details Modal */}
          <AnimatePresence>
            {isModalOpen && selectedRoom && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
                onClick={closeModal}
              >
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.8, opacity: 0 }}
                  transition={{ type: "spring", damping: 25 }}
                  className="relative bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
                  onClick={(e) => e.stopPropagation()}
                >
                  <button
                    onClick={closeModal}
                    className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/80 hover:bg-gray-100 transition-colors"
                  >
                    <FiX size={24} />
                  </button>
  
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* Image Gallery */}
                    <div className="relative h-64 lg:h-full">
                      <Image
                        src={selectedRoom.img}
                        alt={selectedRoom.name}
                        fill
                        className="object-cover rounded-t-xl lg:rounded-l-xl lg:rounded-tr-none"
                      />
                    </div>
  
                    {/* Room Details */}
                    <div className="p-6">
                      <h2 className="text-2xl font-bold text-gray-800 mb-2">{selectedRoom.name}</h2>
                      <p className="text-primary text-xl font-semibold mb-4">{selectedRoom.price}</p>
                      
                      <div className="flex items-center gap-2 mb-4">
                        {/* <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                          {selectedRoom.bed}
                        </span> */}
                        <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                          {selectedRoom.availability} rooms available
                        </span>
                      </div>
                      <div className="flex items-center gap-2 mb-4">
                        <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                          Capacity: 2 guests / room
                        </span>
                        
                      </div>
  
                      {/* <p className="text-gray-600 mb-6">{selectedRoom.description}</p> */}
  
                      <div className="mb-6">
                        <h3 className="font-semibold text-lg mb-3">Facilities</h3>
                        <div className="grid grid-cols-2 gap-3">
                          {facilities.slice(0, 6).map((facility, index) => (
                            <div key={index} className="flex items-center gap-2">
                              <div className="text-primary">{facility.icon}</div>
                              <span className="text-gray-700">{facility.name}</span>
                            </div>
                          ))}
                        </div>
                      </div>
  
                      <div className="flex flex-col sm:flex-row gap-4 mt-8">
                        {/* <a href="/booking"><button className="flex-1 bg-primary text-white py-3 px-6 rounded-lg hover:bg-primary/90 transition-colors font-medium">
                          Book Now
                        </button></a> */}
                        <a href="/contact"><button className="flex-1 border border-primary text-primary py-3 px-6 rounded-lg hover:bg-primary/10 transition-colors font-medium">
                          Contact Us
                        </button></a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
  
        </motion.section>
   
         <div className="relative -ml-2 overflow-hidden">
    <div className="absolute inset-0">
      <img src="https://img.freepik.com/free-photo/luxury-bedroom-suite-resort-high-rise-hotel-with-working-table_105762-1783.jpg?uid=R159003840&ga=GA1.1.367398006.1746862920&semt=ais_hybrid&w=740" alt="Background Image" className="object-cover object-center w-full h-full" />
      <div className="absolute inset-0 bg-black opacity-60"></div>
    </div>
    
    <div className="relative z-10 flex flex-col justify-center items-center h-full text-center pt-12">
      <h1 className="text-4xl lg:text-5xl leading-tight my-4 text-white">Service and Facilities </h1>
    </div>


    <div className="  mx-auto p-6 lg:px-30 sm:px-8 bg-slate-200 dark:bg-slate-800">
    <div className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-4 sm:grid-cols-2 gap-12 my-16">
        <div className="group w-64 h-80 bg-white dark:bg-[#f9b800] shadow-md relative rounded-lg mx-4 my-7 hover:ring hover:ring-primary dark:hover:ring-white transform duration-500 hover:scale-105 hover:shadow-xl">
            <div
                className="bg-[#f9b800] flex justify-center items-center w-28 h-28 rounded-full absolute mx-auto right-0 left-0 -inset-y-14 border-4 border-slate-200 group-hover:border-primary dark:border-slate-800 group-hover:bg-white dark:group-hover:bg-[#f9b800] group-hover:shadow-md transform duration-300">
                <span className="text-3xl md:text-5xl text-white dark:text-slate-800 group-hover:text-[#f9b800] dark:group-hover:text-white transform duration-300">
                <img src="https://cdn-icons-png.flaticon.com/128/2515/2515183.png" className="h-14"/>
                </span>
            </div>
            <div className="flex flex-col items-center text-center justify-center absolute mx-auto inset-0 p-4">
                <div>
                    <h2 className="text-xl capitalize font-bold text-black dark:text-slate-800 mt-10">In-House Dinning Availablity</h2>
                </div>
                <div>
                    <p className="text-base dark:text-white">
Room service - Available from 7:00 AM to 11:00 PM  with a special late-night menu upon request.
Buffet & À la carte options - start your day with a hearty breakfast buffet , or choose from our à la carte lunch and dinner menus .
                    </p>
                </div>
                
            </div>
        </div>
        <div  className="group w-64 h-80 bg-white dark:bg-[#f9b800] shadow-md relative rounded-lg  mx-4 my-7 hover:ring hover:ring-primary dark:hover:ring-white transform duration-500 hover:scale-105 hover:shadow-xl">
            <div
                className="bg-[#f9b800] flex justify-center items-center w-28 h-28 rounded-full absolute mx-auto right-0 left-0 -inset-y-14 border-4 border-slate-200 group-hover:border-primary dark:border-slate-800 group-hover:bg-white dark:group-hover:bg-[#f9b800] group-hover:shadow-md transform duration-300">
                <span className="text-3xl md:text-5xl text-white dark:text-slate-800 group-hover:text-[#f9b800] dark:group-hover:text-white transform duration-300">
                <img src="https://cdn-icons-png.flaticon.com/128/3322/3322056.png" className="h-14"/>
                </span>
            </div>
            <div className="flex flex-col items-center justify-center absolute mx-auto inset-0 p-4">
                <div>
                    <h2 className="text-xl capitalize font-bold text-black dark:text-slate-800 my-4">Laundry</h2>
                </div>
                <div>
                    <p className="text-center text-base dark:text-white">
                      Service Hours - Available daily from 8:00 AM to 8:00 PM 
Same day - service - Available upon request for an additional charge 
                    </p>
                </div>
                
            </div>
        </div>
        <div className="group w-64 h-80 bg-white dark:bg-[#f9b800] shadow-md relative rounded-lg  mx-4 my-7 hover:ring hover:ring-primary dark:hover:ring-white transform duration-500 hover:scale-105 hover:shadow-xl">
            <div
                className="bg-[#f9b800] flex justify-center items-center w-28 h-28 rounded-full absolute mx-auto right-0 left-0 -inset-y-14 border-4 border-slate-200 group-hover:border-primary dark:border-slate-800 group-hover:bg-white dark:group-hover:bg-[#f9b800] group-hover:shadow-md transform duration-300">
                <span className="text-3xl md:text-5xl text-white dark:text-slate-800 group-hover:text-[#f9b800] dark:group-hover:text-white transform duration-300">
                <img src="https://cdn-icons-png.flaticon.com/128/3420/3420275.png" className="h-14"/>
                </span>
            </div>
            <div className="flex flex-col items-center justify-center absolute mx-auto inset-0 p-4">
                <div>
                    <h2 className="text-xl capitalize font-bold text-black dark:text-slate-800 my-4">parking availability </h2>
                </div>
                <div>
                    <p className="text-center text-base dark:text-white">
                     On-site parking available 24/7 for hotel guest , secured well-lit open air parking and complimentary for in-house guests 
                    </p>
                </div>
                
            </div>
        </div>
        <div  className="group w-64 h-80 bg-white dark:bg-[#f9b800] shadow-md relative rounded-lg  mx-4 my-7 hover:ring hover:ring-primary dark:hover:ring-white transform duration-500 hover:scale-105 hover:shadow-xl">
            <div
                className="bg-[#f9b800] flex justify-center items-center w-28 h-28 rounded-full absolute mx-auto right-0 left-0 -inset-y-14 border-4 border-slate-200 group-hover:border-primary dark:border-slate-800 group-hover:bg-white dark:group-hover:bg-[#f9b800] group-hover:shadow-md transform duration-300">
                <span className="text-3xl md:text-5xl text-white dark:text-slate-800 group-hover:text-[#f9b800] dark:group-hover:text-white transform duration-300">
                    <img src="https://cdn-icons-png.flaticon.com/128/2084/2084174.png" className="h-14"/>
                </span>
            </div>
            <div className="flex flex-col items-center justify-center absolute mx-auto inset-0 p-4">
                <div>
                    <h2 className="text-xl text-center capitalize font-bold text-black dark:text-slate-800 my-4">
                      Wider Doorways For Wheelchair Access
                    </h2>
                </div>
                <div>
                    <p className="text-center text-base dark:text-white">
Visual and audible emergency alarms .
Wheelchair - accessible restrooms in lobby and common areas .
                    </p>
                </div>
                
            </div>
        </div>
    </div>
</div>
  </div>
  <section className="bg-gray-50">
    <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-20 lg:px-8">
        <div className="max-w-2xl lg:max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-extrabold text-gray-900">Visit Our Location</h2>
            <p className="mt-4 text-lg text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <div className="mt-16 lg:mt-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="rounded-lg overflow-hidden">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11672.945750644447!2d-122.42107853750231!3d37.7730507907087!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858070cc2fbd55%3A0xa71491d736f62d5c!2sGolden%20Gate%20Bridge!5e0!3m2!1sen!2sus!4v1619524992238!5m2!1sen!2sus"
                        width="100%" height="480" allowFullScreen="" loading="lazy"></iframe>
                </div>
                <div>
                    <div className="max-w-full mx-auto rounded-lg overflow-hidden">
                        <div className="px-6 py-4">
                            <h3 className="text-lg font-medium text-gray-900">HOTEL PARASHAR PALM Address 🌴 </h3>
                            <p className="mt-1 text-gray-600"> Near Railway Station, P.K.Salve Road, Mohan Nagar, Nagpur-440001, MAHARASHTRA, INDIA</p>
                        </div>
                        <div className="border-t border-gray-200 px-6 py-4">
                            <h3 className="text-lg font-medium text-gray-900">Hours</h3>
                            <p className="mt-1 text-gray-600">24/7 Hours</p>
                        </div>
                        <div className="border-t border-gray-200 px-6 py-4">
                            <h3 className="text-lg font-medium text-gray-900">Contact</h3>
                            <p className="mt-1 text-gray-600">Email: hotelparash2008@yahoo.com</p>
                            <p className="mt-1 text-gray-600">Phone: +91 9326090784, +91 9326090787</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

    </div>
  )
}

export default HotelCheckInn