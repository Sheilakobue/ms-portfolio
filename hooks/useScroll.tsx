import { useEffect, useState } from "react";

/**
 * Custom React hook to detect if the user has scrolled past a specified threshold.
 *
 * @param {number} [threshold=200] - The scroll position (in pixels) that triggers the scroll effect. Default is 200.
 * @returns {boolean} - Returns `true` if the user has scrolled past the threshold, `false` otherwise.
 */
export const useScrollEffect = (threshold: number = 200) => {
  // State to keep track of whether the user has scrolled past the threshold
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    // Variable to hold a reference to the timeout
    let timeout: NodeJS.Timeout | undefined;

    /**
     * Handler function to be called on scroll event.
     * Sets the scrolling state based on the current scroll position.
     */
    const handleScroll = () => {
      // Clear the existing timeout to debounce the scroll event
      if (timeout) {
        clearTimeout(timeout);
      }
      // Set a new timeout to update the state after scrolling stops
      timeout = setTimeout(() => {
        // Update the state based on the current scroll position
        setIsScrolling(window.scrollY > threshold);
      }, 100); // 100ms debounce delay
    };

    // Add the scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up function to remove event listener and clear timeout
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (timeout) {
        clearTimeout(timeout);
      }
    };
  }, [threshold]); // Dependency array to re-run the effect if the threshold changes

  return isScrolling;
};
