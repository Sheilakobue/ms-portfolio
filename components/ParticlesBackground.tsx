"use client"; // This directive indicates that the code is client-side

import { useEffect, useState } from "react"; // Importing useEffect and useState hooks from React
import Particles, { initParticlesEngine } from "@tsparticles/react"; // Importing Particles and initParticlesEngine from @tsparticles/react
import particlesConfig from "@/lib/particles-config"; // Importing custom particles configuration
import { loadFull } from "tsparticles"; // Importing loadFull from tsparticles

/**
 * ParticlesBackground component initializes and renders a particles background using tsparticles.
 *
 * @component
 * @returns {JSX.Element} The rendered ParticlesBackground component.
 */
const ParticlesBackground = () => {
  const [init, setInit] = useState(false); // State to track if the particles engine has been initialized

  useEffect(() => {
    // Initialize the particles engine
    initParticlesEngine(async (engine) => {
      await loadFull(engine); // Load the full tsparticles engine
    }).then(() => {
      setInit(true); // Set the initialization state to true after loading
    });
  }, []);

  // Function to handle particles loaded event
  const particlesLoaded = async (container?: Container): Promise<void> => {
    console.log(container); // Log the container once particles are loaded
  };

  if (init) {
    return (
      <Particles
        id="tsparticles" // ID for the particles container
        particlesLoaded={particlesLoaded} // Event handler for particles loaded
        options={particlesConfig as ISourceOptions} // Custom particles configuration
      />
    );
  }

  return <></>; // Render nothing if not initialized yet
};

export default ParticlesBackground;
