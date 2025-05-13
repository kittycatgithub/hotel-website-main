"use client"

import { FaMapMarkerAlt, FaPhoneAlt, FaInstagram, FaFacebookF, FaTwitter } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="relative text-white">
  {/* Background Image */}
  <div
    className="absolute inset-0 bg-cover bg-center opacity-100"
    style={{ backgroundImage: "url('https://img.freepik.com/free-photo/luxurious-dinner-hall-with-large-crystal-chandelier_8353-565.jpg?t=st=1746688829~exp=1746692429~hmac=336f80c45a0f96794b1e00776bde7bf1648fcd9acb2301732700fe16d1a88be3&w=1380')" }}
  ></div>

  {/* Overlay for darker tint if needed */}
  <div className="absolute inset-0 bg-black opacity-50"></div>

  {/* Actual Footer Content */}
  <div className="relative z-10 bg-secondary/60">
    <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">

      {/* Content Section */}
      <div>
        <Link href="/">
              <img src="./images/hotel-logo.jpg" className="h-24 mb-5"/>
            </Link>
        <h2 className="text-2xl font-bold mb-4 text-muted">Ready to Experience Luxury?</h2>
        <p className="mb-6">
          Book your stay at Holi Stay today and discover the perfect blend of comfort, luxury, and natural beauty.
        </p>
        <a href="/contact">
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="group bg-primary text-white px-6 py-3 rounded-full font-semibold flex items-center gap-2 transition-all duration-300"
          >
            Book your stay
            <motion.span className="inline-block transition-transform duration-300 group-hover:translate-x-2">
              →
            </motion.span>
          </motion.button>
        </a>
      </div>

      {/* Quick Links */}
      <div>
        <h3 className="text-xl font-semibold mb-4 text-muted">Quick Links</h3>
        <ul className="space-y-2">
          {[{ name: "Home", href: "/" }, { name: "About Us", href: "/about" }, { name: "Services", href: "/services" },
          { name: "Contact", href: "/contact" }, { name: "Terms & Conditions", href: "/terms-conditions" },{ name: "Privacy Policy", href: "/privacy-policy" },
          { name: "Hotel Rules & Regulations", href: "/hotel-rules-regulations" }].map((link, index) => (
            <li key={index}>
              <Link href={link.href} className="hover:text-primary transition-colors duration-300">
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      {/* Quick Links */}
      <div>
        <h3 className="text-xl font-semibold mb-4 text-muted">Locations</h3>
        <ul className="space-y-2">
          {[{ name: "Hotel Parashar max", href: "/locations/hotel-parashar-max" }, { name: "Hotel Parashar Check Inn", href: "/locations/hotel-parashar-check-inn" }, { name: "Hotel Parashar Palm", href: "/locations/hotel-parashar-palm" }
          ].map((link, index) => (
            <li key={index}>
              <Link href={link.href} className="hover:text-primary transition-colors duration-300">
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Contact Info */}
      <div>
        <h3 className="text-xl font-semibold mb-4 text-muted">Contact Us</h3>
        <ul className="space-y-3">
          <li className="flex items-center gap-3">
            <FaMapMarkerAlt className="text-white" />
            Nagpur, Maharashtra
          </li>
          <li className="flex items-center gap-3">
            <FaPhoneAlt className="text-white" />
            +91 8421600787
          </li>
          <li className="flex items-center gap-3">
            <MdEmail className="text-white" />
            hotelparasharmax@gmail.com
          </li>
        </ul>
        {/* Social Media */}
      <div>
        <h3 className="text-xl font-semibold mt-4 mb-2 text-muted">Follow Us</h3>
        <p className="mb-4">Stay connected with us on social media for special offers and updates.</p>
        <div className="flex gap-4">
          <a href="#" className="text-gray-200 hover:text-primary/40 text-2xl transition-colors duration-300">
            <FaInstagram />
          </a>
          <a href="#" className="text-gray-200 hover:text-primary/40 text-2xl transition-colors duration-300">
            <FaFacebookF />
          </a>
          <a href="#" className="text-gray-200 hover:text-primary/40 text-2xl transition-colors duration-300">
            <FaTwitter />
          </a>
        </div>
      </div>
      </div>

      
    </div>

    {/* Bottom Text */}
    <div className="flex md:flex-row flex-col justify-between  bg-secondary/80 md:px-10">
    <div className="text-center p-4 text-sm">
      © {new Date().getFullYear()} Hotel Parashar Max. All rights reserved.
    </div>
    <div className="text-center p-4 text-sm">
      Designed & Developed By KStar Technology
    </div>
    </div>
   
  </div>
</footer>

  );
}
