// Importing necessary hooks from React
import { useEffect, useState } from "react";

// Custom hook to detect if the user is scrolling
export const useScrollEffect = () => {
  // State variable to keep track of scrolling status
  const [isScrolling, setIsScrolling] = useState(false);

  // Effect hook to add event listener for scroll event
  useEffect(() => {
    // Function to handle scroll event
    const handleScroll = () => {
      // Update the state based on the scroll position
      setIsScrolling(window.scrollY > 200);
    };

    // Add event listener for scroll event
    window.addEventListener("scroll", handleScroll);

    // Clean up function to remove event listener when component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Empty dependency array ensures that the effect runs only once

  // Return the current scrolling status
  return isScrolling;
};
