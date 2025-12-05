"use client";
import { motion } from "framer-motion";
import {
  FaWhatsapp,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhone,
} from "react-icons/fa";
import { links } from "./Navbar";
import Link from "next/link";

const Footer = () => {
  const openWhatsapp = () => {
    const wtsNo = "+923187357005";
    window.open(`https://wa.me/${wtsNo}`, "_blank");
  };

  const openEmail = () => {
    window.location.href = "mailto:info@nexsoll.com";
  };

  return (
    <footer className="bg-linear-to-b w-full from-gray-950 to-black text-white pt-4 sm:pt-6 pb-8">
      <div className=" mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          {/* Brand Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-3xl font-bold mb-4">
              <span className="bg-linear-to-r from-white to-orange-600 text-transparent bg-clip-text">
                NexSoll
              </span>
            </h1>
            <p className="mb-6 opacity-80">
              Top Rated Agency, with a proven track record. Lets achieve growth!
            </p>

            <div className="flex space-x-4">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={openWhatsapp}
                className="bg-green-600 hover:bg-green-700 p-3 rounded-full"
                aria-label="WhatsApp"
              >
                <FaWhatsapp className="text-xl" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={openEmail}
                className="bg-orange-600 hover:bg-orange-700 p-3 rounded-full"
                aria-label="Email"
              >
                <FaEnvelope className="text-xl" />
              </motion.button>
            </div>
          </motion.div>

          {/* Navigation Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-xl font-semibold mb-4 border-l-4 border-orange-500 pl-3">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {links.map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.href}
                    className="opacity-80 hover:opacity-100 hover:text-orange-400 transition-all duration-300"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-xl font-semibold mb-6 border-l-4 border-orange-500 pl-3">
              Services
            </h3>
            <ul className="space-y-3">
              {[
                "Full Stack Development",
                "Mobile App Development",
                "UI/UX Design",
                "Backend Development",
                "Frontend Development",
              ].map((service, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-orange-500 mr-2">▹</span>
                  <span className="opacity-80 hover:opacity-100">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="text-xl font-semibold mb-4 border-l-4 border-orange-500 pl-3">
              Contact us
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <FaMapMarkerAlt className="text-orange-500 mt-1 mr-3" />
                <span className="opacity-80">Bahawalpur, Punjab, Pakistan</span>
              </li>
              <li className="flex items-start">
                <FaPhone className="text-orange-500 mt-1 mr-3" />
                <span className="opacity-80">+92 303 6626927</span>
              </li>
              <li className="flex items-start">
                <FaPhone className="text-orange-500 mt-1 mr-3" />
                <span className="opacity-80">+92 302 7766217</span>
              </li>
              <li className="flex items-start">
                <FaEnvelope className="text-orange-500 mt-1 mr-3" />
                <span className="opacity-80">info@nexsoll.com</span>
              </li>
            </ul>
          </motion.div>
        </div>

        <div className="border-t border-gray-700 pt-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0 text-center md:text-left">
              <p className="opacity-80">
                &copy; {new Date().getFullYear()} Fahad Khan. All rights
                reserved.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-6">
              {["Terms of Service", "Privacy Policy", "Connect with me"].map(
                (item, index) => (
                  <motion.button
                    key={index}
                    className="opacity-80 hover:opacity-100 hover:text-orange-400 transition-all"
                    whileHover={{ y: -2 }}
                    onClick={
                      item === "Connect with me" ? openWhatsapp : undefined
                    }
                  >
                    {item}
                  </motion.button>
                )
              )}
            </div>
          </div>

          <div className="mt-4 w-full text-center opacity-60 text-sm">
            <p>Designed and built with ❤️ by Fahad Khan</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
