"use client";

import { motion } from "framer-motion";
import { FaCheckCircle, FaHeart, FaLeaf, FaStar, FaLightbulb } from "react-icons/fa";
import vision from "../../../public/images/vision.gif";
import mission from "../../../public/images/mission.gif";
import img27 from "../../../public/palm/img27.jpeg"
import Image from "next/image";
import { useState } from "react";

export default function About() {
  const [hoveredVision, setHoveredVision] = useState(false);
  const [hoveredMission, setHoveredMission] = useState(false);

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const values = [
    {
      icon: <FaStar className="text-3xl text-yellow-400" />,
      title: "Excellence",
      description: "We pursue perfection in every interaction, setting new standards in hospitality.",
      color: "bg-yellow-50"
    },
    {
      icon: <FaHeart className="text-3xl text-red-400" />,
      title: "Authenticity",
      description: "Genuine care, never scripted hospitality. Your experience comes from the heart.",
      color: "bg-red-50"
    },
    {
      icon: <FaLeaf className="text-3xl text-green-500" />,
      title: "Sustainability",
      description: "Luxury that honors people and planet. We're committed to eco-conscious practices.",
      color: "bg-green-50"
    },
    {
      icon: <FaLightbulb className="text-3xl text-blue-400" />,
      title: "Innovation",
      description: "Anticipating needs before they arise with creative solutions.",
      color: "bg-blue-50"
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

  return (<>
 <div className="relative w-full h-[10vh] min-h-[250px]">
     <img src="/images/panoramic.jpg" alt="Background Image" className="object-cover object-center w-full h-full" />

  <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center px-4 text-center">
    <motion.h1 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-white text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6"
    >
      About Us
    </motion.h1>

  </div>
</div>

    <div className="mb-10">
      {/* Story Section */}
      <motion.div
        className="py-10 bg-white backdrop-blur-sm"
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
      >
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
            <div>
               <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-5xl line-height: 1.2" >
      Welcome to   <span className="relative whitespace-nowrap text-primary dark:text-primary">
        <svg aria-hidden="true" viewBox="0 0 418 42" className="absolute top-2/3 left-0 h-[0.58em] w-full fill-purple-300 dark:fill-purple-300/60" preserveAspectRatio="none">
          <path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.780 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.540-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.810 23.239-7.825 27.934-10.149 28.304-14.005 .417-4.348-3.529-6-16.878-7.066Z"></path>
        </svg>
        <span className="relative">Hotel Parashar</span>
      </span> 
    </h1>
              <p className="text-lg mb-6">
                We believe that hospitality is not just about providing a place to stay — it’s about creating a memorable experience. Located in a prime area, our hotel offers a perfect blend of comfort, convenience, and modern luxury for travelers of all kinds — whether you're here for business, leisure, or a special occasion.
              </p>
            </div>
            <Image
              src={img27}
              alt="Hotel lobby"
              width={600}
              height={400}
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </motion.div>

      {/* Vision & Mission Section */}
    <motion.div  className="py-16 bg-emerald-200" variants={fadeIn} initial="hidden"
        whileInView="visible" viewport={{ once: true }} >

        <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl  font-bold text-center mb-16">Our Guiding Principles</h2>
            
            <div className="grid md:grid-cols-2 gap-12">
            {/* Vision Card */}
            <motion.div 
                className="relative overflow-hidden rounded-2xl shadow-xl bg-white"
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
            >
                <div className="absolute inset-0  opacity-10"></div>
                <div className="relative p-8 h-full flex flex-col">
                <div className="flex items-center mb-6">
                    <div className="bg-primary p-1 rounded-full mr-4">
                    <Image 
                        src={vision} 
                        alt="Vision" 
                        width={60} 
                        height={60}
                        className="object-contain rounded-full"
                    />
                    </div>
                    <h3 className="text-3xl font-bold text-primary">Vision</h3>
                </div>
                <div className="pl-4 border-l-4 border-primary">
                    <p className="text-lg text-gray-700 leading-relaxed">
                    To redefine luxury hospitality by becoming the most cherished destination for discerning travelers — 
                    where authenticity meets innovation, and every guest leaves feeling uniquely valued.
                    </p>
                </div>
                
                </div>
            </motion.div>

            {/* Mission Card */}
            <motion.div 
                className="relative overflow-hidden rounded-2xl shadow-xl bg-white"
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
            >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 opacity-10"></div>
                <div className="relative p-8 h-full flex flex-col">
                <div className="flex items-center mb-6">
                     <div className="bg-primary p-1 rounded-full mr-4">
                    <Image 
                        src={mission} 
                        alt="Mission" 
                        width={60} 
                        height={60}
                        className="object-contain rounded-full"
                    />
                    </div>
                    <h3 className="text-3xl font-bold text-primary">Mission</h3>
                </div>
                <div className="pl-4 border-l-4 border-primary">
                    <p className="text-lg text-gray-700 leading-relaxed">
                    To craft unforgettable experiences by blending impeccable service with bespoke luxury, 
                    where every detail is thoughtfully designed to exceed expectations.
                    </p>
                </div>
                
                </div>
            </motion.div>
            </div>
        </div>
    </motion.div>

      {/* Core Values Section */}
      <motion.div
        className="py-16 px-4 mt-16"
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-6">Our Core Values</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-12"></div>

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
                className={`${value.color} p-6 border border-gray-600 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 flex flex-col items-center text-center`}
              >
                <div className="mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </div>
    </>
  );
}