'use client'; // This directive indicates that the code is client-side

import Link from "next/link"; // Import the Link component from Next.js for navigation
import { useState } from "react"; // Import the useState hook from React
import { FiMenu } from "react-icons/fi"; // Import the FiMenu icon from react-icons
import { MdClose } from "react-icons/md"; // Import the MdClose icon from react-icons
import { useScrollEffect } from "@/hooks/useScroll"; // Import a custom hook to detect scrolling

// Define the navigation links with unique IDs, names, and routes
const navLinks = [
  { id: 1, name: "Home", route: "#home" },
  { id: 2, name: "Projects", route: "#projects" },
  { id: 5, name: "Contact", route: "#contact" },
];

/**
 * Navbar is a React functional component that renders a navigation bar.
 * It includes links for different sections of the website and a mobile menu toggle.
 *
 * @function Navbar
 * @returns {JSX.Element} The rendered navigation bar component.
 */
export default function Navbar() {
  const [openMobileMenu, setOpenMobileMenu] = useState(false); // State to manage the mobile menu visibility
  const isScrolling = useScrollEffect(); // Hook to detect scrolling

  // Function to toggle the mobile menu
  const handleOpenMobileMenu = () => {
    setOpenMobileMenu(!openMobileMenu);
  };

  return (
    <nav 
      className={`w-full top-0 z-[99999] py-5 ${
      isScrolling 
      ? "fixed top-0 bg-blue-300 shadow-lg transition duration-500 bg-opacity-80"
      : "relative"
      }`}
    >
      <div className="max-w-[1400px] mx-auto flex justify-between items-center w-[91%]">
        
        {/* Logo linking to the home section */}
        <Link href={"#home"}>
          <h1 className={`text-3xl ${isScrolling ? 
            "text-blue-900 font-bold underline " : 
            "text-blue-300 font-bold underline"}`}>
            MS Kobue
          </h1>
        </Link>

        {/* Desktop navigation links */}
        <ul 
          className={`flex gap-10 max-md:hidden ${
            isScrolling ? "text-blue-900" : "text-blue-300"}`} >
          {navLinks.map((link) => ( 
            <Link
              href={link.route}
              key={link.id}
              className="hover:underline hover:text-yellow-300 transition duration-500"
            >
              <li>{link.name}</li>
            </Link>
          ))}
        </ul>
        
        {/* Mobile menu toggle button */}
        <div
          className={`md:hidden txt-3xl cursor-pointer ${isScrolling ? "text-blue-900 " : "text-blue-300"}`}
          onClick={handleOpenMobileMenu}
        >
          {openMobileMenu ? <MdClose /> : <FiMenu />}
        </div>
        
        {/* Mobile navigation links */}
        {openMobileMenu && (
          <ul className="md:hidden bg-blue-300 absolute top-14 right-5 px-4 py-6 text-center rounded-md flex flex-col gap-3 shadow-md">
            {navLinks.map((link) => (
              <Link
                href={link.route}
                key={link.id}
                className="text-white"
              >
                <li>{link.name}</li>
              </Link>
            ))}
          </ul>
        )}
      </div>
    </nav>
  );
}
