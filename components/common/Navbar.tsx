import React from "react";

const Navbar = () => {
  return (
    <div className="max-h-10 bg-black w-full flex justify-between items-center px-5">
      <div>Nexsoll</div>
      <div>
        <ul className="flex gap-4 cursor-pointer p-2">
          <li>Home</li>
          <li>About Us</li>
          <li>Services</li>
          <li>Portfolio</li>
          <li>Blog</li>
          <li>Contact Us</li>
        </ul>
      </div>
      <div>
        <button>Get A Quote</button>
      </div>
    </div>
  );
};

export default Navbar;
