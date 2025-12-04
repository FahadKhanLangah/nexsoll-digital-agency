import Link from "next/link";
import Button from "../ui/Button";

const Navbar = () => {
  return (
    <div className="h-16 bg-black w-full flex mx-auto justify-between items-center px-5">
      <div className="text-3xl font-bold cursor-pointer">
        Nex<span className="text-blue-500">Soll</span>
      </div>

      <ul className="flex gap-6 text-white">
        <li>
          <Link href="/" className="hover:text-blue-500">
            Home
          </Link>
        </li>
        <li>
          <Link href="/about" className="hover:text-blue-500">
            About Us
          </Link>
        </li>
        <li>
          <Link href="/services" className="hover:text-blue-500">
            Services
          </Link>
        </li>
        <li>
          <Link href="/portfolio" className="hover:text-blue-500">
            Portfolio
          </Link>
        </li>
        <li>
          <Link href="/blog" className="hover:text-blue-500">
            Blog
          </Link>
        </li>
        <li>
          <Link href="/contact" className="hover:text-blue-500">
            Contact Us
          </Link>
        </li>
      </ul>

      <div>
        <Button className="hover:bg-blue-600 bg-blue-500">Get A Quote</Button>
      </div>
    </div>
  );
};

export default Navbar;
