"use client";

import Link from "next/link";
import Button from "../ui/Button";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Blog", href: "/blog" },
    { name: "Contact Us", href: "/contact" },
  ];
  return (
    <nav
      className={`w-full justify-between bg-black/40 backdrop-blur-xl border-b border-white/10
    fixed top-0 left-0 right-0 z-50 h-16 flex items-center px-5 transition-all duration-300
    ${scrolled ? "bg-black/90 shadow-lg backdrop-blur-md" : "bg-transparent"}
  `}
    >
      <Link href={"/"} className="text-3xl font-bold cursor-pointer">
        Nex<span className="text-blue-500">Soll</span>
      </Link>

      <ul className="hidden md:flex gap-6 text-white">
        {links.map((link) => (
          <li key={link.href} className="relative group">
            <Link
              href={link.href}
              className="hover:text-blue-500 transition-all"
            >
              {link.name}
            </Link>
            <span
              className="
    absolute left-0 -bottom-1 h-0.5 w-0 bg-blue-500 
    transition-all duration-300 group-hover:w-full
  "
            ></span>
          </li>
        ))}
      </ul>
      <button
        className="text-white text-3xl md:hidden"
        onClick={() => setOpen(!open)}
      >
        {open ? <HiX /> : <HiMenu />}
      </button>

      {open && (
        <div className="md:hidden absolute top-20 left-0 items-center py-5 gap-5 w-full z-50 bg-black flex flex-col">
          {links.map((v) => (
            <Link
              className="text-lg w-full text-start px-10 bg-gray-950 py-2 hover:text-blue-400"
              key={v.href}
              href={v.href}
            >
              {v.name}
            </Link>
          ))}
          <Button
            onClick={() => router.push("/get-a-quote")}
            className="hover:bg-blue-600 w-[90%] bg-blue-500"
          >
            Get A Quote
          </Button>
        </div>
      )}

      <div className="hidden md:block">
        <Button
          onClick={() => router.push("/get-a-quote")}
          className="hover:bg-blue-600 bg-blue-500"
        >
          Get A Quote
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
