"use client";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import thumbnail from "../../public/images/thumbnail.png";
import skyline1 from "../../public/images/Skyline-Suite1.jpg";
import skyline2 from "../../public/images/skyline-suite2.jpg";
import skyline3 from "../../public/images/skyline-suite3.jpg";
import cozyCabin1 from "../../public/images/Cozy-cabin1.png";
import cozyCabin2 from "../../public/images/cozy-cabin2.jpg";
import cozyCabin3 from "../../public/images/cozy-cabin3.jpeg";
import cozyCabin4 from "../../public/images/cozy-cabin4.jpg";
import gardenView1 from "../../public/images/garden-view1.jpg";
import gardenView2 from "../../public/images/garden-view2.jpg";
import gardenView3 from "../../public/images/garden-view3.png";
import sunset1 from "../../public/images/sunset-suit1.jpg";
import sunset2 from "../../public/images/sunset-suit2.jpg";

import { FiWifi, FiX } from "react-icons/fi";
import { MdPool, MdFreeBreakfast, MdDinnerDining, MdNaturePeople, MdEco, MdLocationOn, MdWash } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaParking, FaConciergeBell, FaHandsHelping, FaTag, FaBed } from "react-icons/fa"
import { useState } from "react";
import HeroSlider from "@/components/sliders/HeroSlider";
import Link from "next/link";


export default function Home() {

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
      name: "Laundry",
      icon: <MdWash size={30} className="text-primary mb-2" />,
    },
    {
      name: "Breakfast",
      icon: <MdFreeBreakfast size={30} className="text-primary mb-2" />,
    },
    {
      name: "Dinner",
      icon: <MdDinnerDining size={30} className="text-primary mb-2" />,
    },
    {
      name: "Room service",
      icon: <FaBed size={30} className="text-primary mb-2" />,
    },
    {
      name: "Car Parking",
      icon: <FaParking size={30} className="text-primary mb-2" />,
    },
    {
      name: "Nature View",
      icon: <MdNaturePeople size={30} className="text-primary mb-2" />,
    },
  ];
  

  const roomType = [
    {
      name: "Deluxe Cabin",
      img: cozyCabin1,
      type: "deluxe",
      bed: "Comfortable Bed with Balcony View",
      availability: 13,
      price: "₹1500",
      description: "A luxurious escape nestled in the forest, featuring a balcony with breathtaking views."
    },
    {
      name: "Premium Cabin",
      img: cozyCabin2,
      type: "premium",
      bed: "Comfortable Bed with Balcony View",
      availability: 13,
      price: "₹1800",
      description: "Enjoy peaceful moments by the fire in this cozy cabin ideal for romantic getaways."
    },
    // {
    //   name: "Panoromic Cozy Cabin",
    //   img: cozyCabin3,
    //   type: "cozy",
    //   bed: "King Bed with Skylight Roof",
    //   availability: 3,
    //   price: "30,000 LKR",
    //   description: "Fall asleep under the stars with skylight views from the comfort of your king bed."
    // },
    // {
    //   name: "Elegant Cozy Cabin",
    //   img: cozyCabin4,
    //   type: "cozy",
    //   bed: "Luxury Queen Bed with Garden Patio",
    //   availability: 5,
    //   price: "29,000 LKR",
    //   description: "Step into elegance with a private garden patio perfect for relaxation and morning coffee."
    // },
    // {
    //   name: "Luxury Cozy Cabin",
    //   img: cozyCabin1,
    //   type: "cozy",
    //   bed: "Compact King Bed with Forest View Balcony",
    //   availability: 2,
    //   price: "50,500 LKR",
    //   description: "A luxurious escape nestled in the forest, featuring a balcony with breathtaking views."
    // },
    // {
    //   name: "Serene Cozy Cabin",
    //   img: cozyCabin2,
    //   type: "cozy",
    //   bed: "Queen Bed with Indoor Fireplace",
    //   availability: 2,
    //   price: "48,900 LKR",
    //   description: "Enjoy peaceful moments by the fire in this cozy cabin ideal for romantic getaways."
    // },
    // {
    //   name: "Panoromic Cozy Cabin",
    //   img: cozyCabin3,
    //   type: "cozy",
    //   bed: "King Bed with Skylight Roof",
    //   availability: 3,
    //   price: "30,000 LKR",
    //   description: "Fall asleep under the stars with skylight views from the comfort of your king bed."
    // },
    // {
    //   name: "Elegant Cozy Cabin",
    //   img: cozyCabin4,
    //   type: "cozy",
    //   bed: "Luxury Queen Bed with Garden Patio",
    //   availability: 5,
    //   price: "29,000 LKR",
    //   description: "Step into elegance with a private garden patio perfect for relaxation and morning coffee."
    // },
    // {
    //   name: "Luxury Garden View",
    //   img: gardenView1,
    //   type: "garden",
    //   bed: "Spacious King Bed with Private Garden Access",
    //   availability: 3,
    //   price: "35,000 LKR",
    //   description: "Wake up to lush green scenery and unwind in your own private garden area."
    // },
    // {
    //   name: "Serene Garden View",
    //   img: gardenView2,
    //   type: "garden",
    //   bed: "Deluxe Double Bed with Nature View",
    //   availability: 4,
    //   price: "31,000 LKR",
    //   description: "Surround yourself with nature in this serene garden-view room built for comfort."
    // },
    // {
    //   name: "Panoromic Garden View",
    //   img: gardenView3,
    //   type: "garden",
    //   bed: "Panoramic Queen Bed Facing Greenery",
    //   availability: 3,
    //   price: "33,500 LKR",
    //   description: "Immerse in panoramic garden views with modern decor and a peaceful atmosphere."
    // },
    // {
    //   name: "Luxury Skyline Suite",
    //   img: skyline1,
    //   type: "skyline",
    //   bed: "King Bed with Rooftop City View",
    //   availability: 2,
    //   price: "45,000 LKR",
    //   description: "An upscale suite with dazzling rooftop views of the city skyline by day and night."
    // },
    // {
    //   name: "Serene Skyline Suite",
    //   img: skyline2,
    //   type: "skyline",
    //   bed: "Queen Bed with Private Terrace",
    //   availability: 2,
    //   price: "42,000 LKR",
    //   description: "Unwind on your private terrace while taking in the serene skyline ambiance."
    // },
    // {
    //   name: "Panoromic Skyline Suite",
    //   img: skyline3,
    //   type: "skyline",
    //   bed: "Skyview Double Bed with Modern Decor",
    //   availability: 3,
    //   price: "36,500 LKR",
    //   description: "Stylish and spacious, offering wide skyline views and contemporary elegance."
    // },
    // {
    //   name: "Serene Sunset",
    //   img: sunset1,
    //   type: "sunset",
    //   bed: "Double Bed with Sunset-Facing Balcony",
    //   availability: 2,
    //   price: "48,000 LKR",
    //   description: "Perfect for sunset lovers, this room features an open balcony with golden hour views."
    // },
    // {
    //   name: "Panoromic Sunset",
    //   img: sunset2,
    //   type: "sunset",
    //   bed: "Premium King Bed with Sea View",
    //   availability: 2,
    //   price: "59,500 LKR",
    //   description: "Indulge in panoramic sea views and soothing sunsets from your luxurious suite."
    // }
  ];
  
  

  const filteredRooms = activeTab === "all" ? roomType : roomType.filter(room => room.type === activeTab);

  const tabs = [
    { label: "All", value: "all" },
    { label: "Deluxe", value: "deluxe" },
    { label: "Premium", value: "premium" },
    // { label: "Skyline Suite", value: "skyline" },
    // { label: "Sunset Villa", value: "sunset" },
    // { label: "Garden View", value: "garden" },
    // { label: "Cozy Cabin", value: "cozy" },
  ];
  
  const features = [
    { title: "Eco-friendly stay", bg: "bg-primary/20", icon: <MdEco size={28} className="text-secondary/40" /> },
    { title: "Personalized services", bg: "bg-primary/30", icon: <FaHandsHelping size={28} className="text-secondary/50" /> },
    { title: "Best price guarantee", bg: "bg-primary/40", icon: <FaTag size={28} className="text-secondary/65" /> },
    { title: "Prime location", bg: "bg-primary/50", icon: <MdLocationOn size={28} className="text-secondary/80" /> },
  ];
  return (
    <div className="overflow-x-hidden">

      {/* Hero Section */}
      <HeroSlider/>
      {/* <div className="relative w-full h-[60vh] md:h-[80vh] sm:h-[70vh] min-h-[400px]">
        <Image
          src={thumbnail}
          alt="Hero"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/20 flex items-center justify-center flex-col gap-5">

          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white text-xl sm:text-2xl md:text-4xl font-semibold text-center px-4"
          >
            Discover comfort and relaxation at Hotel Parashar Max
          </motion.h1>

          {/* <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }}
            className="flex items-center gap-2 mt-12 w-full max-w-xl p-3" >
            <input type="text" placeholder="Search for a room"
              className="w-full p-2 rounded-full bg-white/50 text-black outline-none hover:bg-white/70 focus:bg-white 
              focus:ring-2 focus:ring-primary focus:ring-offset-2 transition-all duration-300 text-sm md:text-base" />

            <button className="bg-primary text-white px-5 py-2 rounded-full cursor-pointer hover:bg-primary/70 hover:scale-107 hover:shadow-xl transition-all duration-300">
              Explore
            </button>

          <motion.h2 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.6 }}
            className="text-white text-sm sm:text-base mt-8 text-center px-2" >
            Book your stay with us and enjoy a comfortable and relaxing experience.
          </motion.h2>
        </div>
      </div> */}

      {/* Facilities Section */}
      {/* <motion.div
        className="p-6 bg-secondary"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={{
          hidden: { opacity: 0, x: -20 },
          visible: {
            opacity: 1,
            x:0,
            y: 0,
            transition: {
              duration: 0.9,
              ease: "easeInOut",
              staggerChildren: 0.4,
            },
          },
        }}
      >
        {/* mapped facilities */}
        {/* <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4">

          {facilities.map((facility, index) => (
            <motion.div
              key={index} whileHover={{ scale: 1.05, y: -5 }} transition={{ type: "spring", stiffness: 300 }}
              className="bg-white rounded-xl shadow-lg p-4 flex flex-col items-center justify-center 
              text-center cursor-pointer" >
              <motion.div whileHover={{ rotateY: 180 }} transition={{ duration: 0.6 }} className="mb-2" >
                {facility.icon}
              </motion.div>
              <p className="text-sm font-medium text-gray-800">{facility.name}</p>
            </motion.div>
          ))}
        </div>
      </motion.div> */} 

  {/* Our Locations */}
<div className="bg-gray-100 pt-16 pb-20">
<div className="text-center pb-10">
    <h1 className="font-bold text-4xl">Our Hotel Locations</h1>
</div>

<section id="Projects"
    className="w-fit  mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-5 md:gap-y-20 md:gap-x-14">

    {/* <!--   ✅ Product card 1 - Starts Here 👇 --> */}
    <div className="w-80 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
        <Link href="/hotel-max">
            <img src="https://img.freepik.com/free-photo/modern-apartment-architecture_1268-14696.jpg?ga=GA1.1.367398006.1746862920&semt=ais_hybrid&w=740"
                    alt="Product" className="h-64 w-80 object-cover rounded-t-xl" />
            <div className="px-2.5 py-3 w-80">
                <p className="text-lg font-bold text-black truncate block capitalize">Hotel Parashar max</p>
                <div className="flex items-center mt-2">
                    <div className="flex items-center text-primary border border-primary p-1 gap-2 rounded inline-flex items-center">
    <span className="text-sm">
        View More
    </span>
    <svg className=" w-3 h-3" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
        viewBox="0 0 24 24">
        <path d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
    </svg>
</div>
                </div>
            </div>
        </Link>
    </div>
    {/* <!--   ✅ Product card 1 - Starts Here 👇 --> */}
    <div className="w-80 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
        <Link href="/hotel-check-inn">
            <img src="https://img.freepik.com/free-photo/modern-apartment-architecture_1268-14696.jpg?ga=GA1.1.367398006.1746862920&semt=ais_hybrid&w=740"
                    alt="Product" className="h-64 w-80 object-cover rounded-t-xl" />
            <div className="px-2.5 py-3 w-80">
                <p className="text-lg font-bold text-black truncate block capitalize">Hotel Parashar Check Inn</p>
                <div className="flex items-center mt-2">
                    <div className="flex items-center text-primary border border-primary p-1 gap-2 rounded inline-flex items-center">
    <span className="text-sm">
        View More
    </span>
    <svg className=" w-3 h-3" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
        viewBox="0 0 24 24">
        <path d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
    </svg>
</div>
                </div>
            </div>
        </Link>
    </div>
    {/* <!--   ✅ Product card 1 - Starts Here 👇 --> */}
    <div className="w-80 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
        <Link href="/hotel-palm">
            <img src="https://img.freepik.com/free-photo/modern-apartment-architecture_1268-14696.jpg?ga=GA1.1.367398006.1746862920&semt=ais_hybrid&w=740"
                    alt="Product" className="h-64 w-80 object-cover rounded-t-xl" />
            <div className="px-2.5 py-3 w-80">
                <p className="text-lg font-bold text-black truncate block capitalize">Hotel Parashar Palm</p>
                <div className="flex items-center mt-2">
                    <div className="flex items-center text-primary border border-primary p-1 gap-2 rounded inline-flex items-center">
    <span className="text-sm">
        View More
    </span>
    <svg className=" w-3 h-3" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
        viewBox="0 0 24 24">
        <path d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
    </svg>
</div>
                </div>
            </div>
        </Link>
    </div>
</section>
</div>

 {/* About Us */}
  <div className="relative overflow-hidden bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400">
    <div className="absolute inset-0  bg-opacity-5">
      <div className="absolute inset-0 bg-funky-pattern"></div>
    </div>

    <div className="absolute top-[10%] left-[5%] transform rotate-12 animate-pulse-slow">
      <svg className="w-6 h-6 text-yellow-300" fill="currentColor" viewBox="0 0 24 24">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path>
      </svg>
    </div>
    <div className="absolute top-[80%] left-[15%] transform -rotate-12 animate-pulse-slow">
      <svg className="w-6 h-6 text-purple-300" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
      </svg>
    </div>
    <div className="absolute top-[20%] left-[90%] transform rotate-45 animate-pulse-slow">
      <svg className="w-6 h-6 text-yellow-300" fill="currentColor" viewBox="0 0 24 24">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path>
      </svg>
    </div>
    <div className="absolute top-[70%] left-[80%] transform -rotate-45 animate-pulse-slow">
      <svg className="w-6 h-6 text-purple-300" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
      </svg>
    </div>

    <div className="relative min-h-screen bg-primary flex items-center justify-center px-4 py-16 md:py-24">
      <div className="max-w-6xl w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        
        <div className="text-center md:text-left space-y-6 z-10 ">          
          <h1 className="text-2xl md:text-4xl font-bold text-white leading-tight">
            
            <span className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 to-white animate-pulse">
              About Hotel Parashar
            </span>
          </h1>
          
          <p className="text-lg text-white text-justify text-opacity-90">
Hotel Parashar is a growing name in India’s hospitality landscape, known for offering refined experiences across multiple vibrant cities. Our properties are a reflection of our commitment to comfort, elegance, and exceptional service, whether you're traveling for business or leisure.
From bustling urban hubs to peaceful retreats, each Hotel Parashar location is carefully curated to provide guests with a sense of warmth and sophistication. We believe in more than just a place to stay. We create spaces where every visit feels like a return home.          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-4">
            <a href="/contact" className="group px-8 py-3 bg-white rounded-full font-medium text-purple-700 hover:bg-opacity-90 transform transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
              <span className="relative z-10">Get Started Now</span>
            </a>
          </div>
        </div>
        
        <div className="relative h-64 md:h-full flex items-center justify-center">
          <img src="https://img.freepik.com/free-photo/modern-studio-apartment-design-with-bedroom-living-space_1262-12375.jpg?ga=GA1.1.636005127.1746874507&semt=ais_hybrid&w=740"/>
          </div>
      </div>
    </div>

    <div className="absolute bottom-0 left-0 w-full overflow-hidden">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-16 md:h-24">
        <path fill="rgba(255, 255, 255, 0.1)" d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V92.83C0,92.83,260.94,84.31,321.39,56.44Z"></path>
      </svg>
    </div>
  </div>
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
            <h1 className="text-4xl font-bold"><strong className="text-primary">Discover</strong> Hotel Parashar</h1>
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
                    <p className="text-sm mb-2">{room.bed}</p>
                    <p className="text-sm mb-2">Available : {room.availability} rooms</p>
                    <p className="text-lg font-bold">{room.price} / Night</p>
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
                    <p className="text-primary text-xl font-semibold mb-4">{selectedRoom.price} / Night</p>
                    
                    <div className="flex items-center gap-2 mb-4">
                      <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                        {selectedRoom.bed}
                      </span>
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
                      <a href="/booking"><button className="flex-1 bg-primary text-white py-3 px-6 rounded-lg hover:bg-primary/90 transition-colors font-medium">
                        Book Now
                      </button></a>
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
     
    


      <section className="py-16  lg:px-0 xl:px-0 px-5 bg-gray-800 mb-0.25">
          <motion.h2 variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 }
          }}
          className="text-4xl font-bold text-center text-white " >
          Room Facilities Details
      </motion.h2>
      <div className="mx-auto content-center justify-center flex py-5">
      <p className="text-white ">Check-In : 12 Noon | Check-Out : 11 AM </p>

      </div>
 
  <ul className="grid grid-cols-1 lg:gap-10 gap-5 max-w-7xl mx-auto sm:grid-cols-2 lg:grid-cols-4">
    <li><a href="https://eliteai.tools/category/productivity" data-clickable="Category:20:category-card"
        className="block h-full transition-all duration-200 bg-white border border-gray-200 rounded group hover:shadow-lg hover:border-green-500 hover:ring-1 hover:ring-green-500/20">
        <div className="flex items-center p-6">
          <div
            className="flex items-center justify-center flex-shrink-0 w-16 h-16 transition-colors duration-200 rounded bg-green-50 group-hover:bg-green-100">
            <span className="text-4xl" role="img" aria-label="Productivity category">
              <img src="https://cdn-icons-gif.flaticon.com/12525/12525059.gif"/>
            </span>
          </div>

          <div className="flex-grow ml-6">
            <h3
              className="text-lg font-semibold text-gray-900 transition-colors duration-200 line-clamp-1 group-hover:text-green-600">
              Air Conditioner
            </h3>
          </div>

          
        </div>
      </a>
    </li>
    <li><a href="https://eliteai.tools/category/business" data-clickable="Category:5:category-card"
        className="block h-full transition-all duration-200 bg-white border border-gray-200 rounded group hover:shadow-lg hover:border-green-500 hover:ring-1 hover:ring-green-500/20">
        <div className="flex items-center p-6">
          <div
            className="flex items-center justify-center flex-shrink-0 w-16 h-16 transition-colors duration-200 rounded bg-green-50 group-hover:bg-green-100">
            <span className="text-4xl" role="img" aria-label="Business category">
            <img src="https://cdn-icons-gif.flaticon.com/12320/12320331.gif"/>
            </span>
          </div>

          <div className="flex-grow ml-6">
            <h3
              className="text-lg font-semibold text-gray-900 transition-colors duration-200 line-clamp-1 group-hover:text-green-600">
              Free Wi-Fi
            </h3>
          </div>

          
        </div>
      </a>
    </li>
    <li><a href="https://eliteai.tools/category/content-generation" data-clickable="Category:86:category-card"
        className="block h-full transition-all duration-200 bg-white border border-gray-200 rounded group hover:shadow-lg hover:border-green-500 hover:ring-1 hover:ring-green-500/20">
        <div className="flex items-center p-6">
          <div
            className="flex items-center justify-center flex-shrink-0 w-16 h-16 transition-colors duration-200 rounded bg-green-50 group-hover:bg-green-100">
            <span className="text-4xl" role="img" aria-label="Content Generation category">
            <img src="https://cdn-icons-gif.flaticon.com/18681/18681764.gif"/>
            </span>
          </div>

          <div className="flex-grow ml-6">
            <h3
              className="text-lg font-semibold text-gray-900 transition-colors duration-200 line-clamp-1 group-hover:text-green-600">
              Television
            </h3>
          </div>

          
        </div>
      </a>
    </li>
    <li><a href="https://eliteai.tools/category/developer-tools" data-clickable="Category:44:category-card"
        className="block h-full transition-all duration-200 bg-white border border-gray-200 rounded group hover:shadow-lg hover:border-green-500 hover:ring-1 hover:ring-green-500/20">
        <div className="flex items-center p-6">
          <div
            className="flex items-center justify-center flex-shrink-0 w-16 h-16 transition-colors duration-200 rounded bg-green-50 group-hover:bg-green-100">
            <span className="text-4xl" role="img" aria-label="Developer Tools category">
            <img src="https://cdn-icons-gif.flaticon.com/17695/17695854.gif"/>
            </span>
          </div>

          <div className="flex-grow ml-6">
            <h3
              className="text-lg font-semibold text-gray-900 transition-colors duration-200 group-hover:text-green-600">
              Attached Bathroom
            </h3>
          </div>

          
        </div>
      </a>
    </li>
    
  </ul>
  <ul className="grid grid-cols-1  lg:gap-10 gap-5 lg:pt-10 pt-5 max-w-7xl mx-auto sm:grid-cols-2 lg:grid-cols-4">
    <li><a href="https://eliteai.tools/category/productivity" data-clickable="Category:20:category-card"
        className="block h-full transition-all duration-200 bg-white border border-gray-200 rounded group hover:shadow-lg hover:border-green-500 hover:ring-1 hover:ring-green-500/20">
        <div className="flex items-center p-6">
          <div
            className="flex items-center justify-center flex-shrink-0 w-16 h-16 transition-colors duration-200 rounded bg-green-50 group-hover:bg-green-100">
            <span className="text-4xl" role="img" aria-label="Productivity category">
              <img src="https://cdn-icons-gif.flaticon.com/13275/13275366.gif"/>
            </span>
          </div>

          <div className="flex-grow ml-6">
            <h3
              className="text-lg font-semibold text-gray-900 transition-colors duration-200 line-clamp-1 group-hover:text-green-600">
              Laundry 
            </h3>
          </div>

          
        </div>
      </a>
    </li>
    <li><a href="https://eliteai.tools/category/business" data-clickable="Category:5:category-card"
        className="block h-full transition-all duration-200 bg-white border border-gray-200 rounded group hover:shadow-lg hover:border-green-500 hover:ring-1 hover:ring-green-500/20">
        <div className="flex items-center p-6">
          <div
            className="flex items-center justify-center flex-shrink-0 w-16 h-16 transition-colors duration-200 rounded bg-green-50 group-hover:bg-green-100">
            <span className="text-4xl" role="img" aria-label="Business category">
            <img src="https://cdn-icons-gif.flaticon.com/15578/15578604.gif"/>
            </span>
          </div>

          <div className="flex-grow ml-6">
            <h3
              className="text-lg font-semibold text-gray-900 transition-colors duration-200 group-hover:text-green-600">
              Breakfast / Dinner
            </h3>
          </div>

          
        </div>
      </a>
    </li>
    <li><a href="https://eliteai.tools/category/content-generation" data-clickable="Category:86:category-card"
        className="block h-full transition-all duration-200 bg-white border border-gray-200 rounded group hover:shadow-lg hover:border-green-500 hover:ring-1 hover:ring-green-500/20">
        <div className="flex items-center p-6">
          <div
            className="flex items-center justify-center flex-shrink-0 w-16 h-16 transition-colors duration-200 rounded bg-green-50 group-hover:bg-green-100">
            <span className="text-4xl" role="img" aria-label="Content Generation category">
            <img src="https://cdn-icons-gif.flaticon.com/19004/19004706.gif"/>
            </span>
          </div>

          <div className="flex-grow ml-6">
            <h3
              className="text-lg font-semibold text-gray-900 transition-colors duration-200 line-clamp-1 group-hover:text-green-600">
              Room service
            </h3>
          </div>

          
        </div>
      </a>
    </li>
    <li><a href="https://eliteai.tools/category/developer-tools" data-clickable="Category:44:category-card"
        className="block h-full transition-all duration-200 bg-white border border-gray-200 rounded group hover:shadow-lg hover:border-green-500 hover:ring-1 hover:ring-green-500/20">
        <div className="flex items-center p-6">
          <div
            className="flex items-center justify-center flex-shrink-0 w-16 h-16 transition-colors duration-200 rounded bg-green-50 group-hover:bg-green-100">
            <span className="text-4xl" role="img" aria-label="Developer Tools category">
            <img src="https://cdn-icons-gif.flaticon.com/18818/18818414.gif"/>
            </span>
          </div>

          <div className="flex-grow ml-6">
            <h3
              className="text-lg font-semibold text-gray-900 transition-colors duration-200 group-hover:text-green-600">
              Car Parking
            </h3>
          </div>

          
        </div>
      </a>
    </li>
    
  </ul>
</section>
      
      {/* <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.2,
              delayChildren: 0.2
            }
          }
        }}
        className="max-w-4xl mx-auto py-12 "
      >

        
      <motion.h2 variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 }
          }}
          className="text-4xl font-bold mb-8 text-center text-primary" >
          Why Choose HoliStay?
      </motion.h2>

          <div className="flex flex-col gap-3">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 }
              }}
              className="m-4 lg:w-full"
              whileHover={{ scaleX: 0.95 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <div className={`${feature.bg} p-6 rounded-full shadow-md flex items-center gap-4`}>
                {feature.icon}
                <h3 className="text-xl font-semibold">{feature.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
        
      </motion.section> */}

    </div>    
  );
}
