import { useEffect, useState } from "react";

/**
 * useScrollEffect is a custom React hook that tracks whether the user has scrolled
 * past a certain point (100px) on the page. It returns a boolean value indicating
 * whether the user is scrolling.
 *
 * @function useScrollEffect
 * @returns {boolean} A boolean value indicating whether the user has scrolled past 100px.
 */
export default function useScrollEffect() {
  const [isScrolling, setIsScrolling] = useState(false); // State to manage the scrolling status

  useEffect(() => {
    // Function to handle scroll events
    const handleScroll = () => {
      setIsScrolling(window.scrollY > 100);
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup scroll event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Empty dependency array ensures this effect runs only once

  return isScrolling; // Return the scrolling status
}
