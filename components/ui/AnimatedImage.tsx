"use client";
import { motion } from "framer-motion";
import Typed from "typed.js";
import { useEffect, useRef } from "react";
import Image, { StaticImageData } from "next/image";

type propImage = {
  img: StaticImageData;
  alt: string;
  strings: string[];
};

export default function AnimatedImage({ img, alt, strings }: propImage) {
  const typedElement = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedElement.current, {
      strings,
      typeSpeed: 100,
      backSpeed: 50,
      loop: true,
    });

    return () => typed.destroy();
  }, [strings]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="relative w-full max-w-xs sm:max-w-sm"
    >
      <Image src={img} alt={alt} className="rounded-3xl w-full h-auto" />

      {/* centered typed text overlay */}
      <div className="absolute inset-0 flex items-center justify-center">
        <span
          ref={typedElement}
          className="
            px-4 py-2 text-white text-lg
            bg-black/30 backdrop-blur-xl 
            border border-white/20 rounded-xl
          "
        ></span>
      </div>
    </motion.div>
  );
}
