"use client"; // This directive indicates that the code is client-side

import  {useEffect, useMemo, useState } from "react"; // Importing useEffect and useState hooks from React
import Particles, {initParticlesEngine,} from "@tsparticles/react"; // Importing Particles and initParticlesEngine from @tsparticles/react
import particlesConfig from "@/lib/particles-config"; // Importing custom particles configuration
import { loadFull } from "tsparticles"; // Importing loadFull from tsparticles
import {
  type Container,
  type ISourceOptions,
  MoveDirection,
  OutMode,
} from "@tsparticles/engine";

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
      await loadFull(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  // Function to handle particles loaded event
  const particlesLoaded = async (
    container?: Container
  ): Promise<void> => {
    console.log(container);
  };

if (init) {
    return (
      <Particles
        id="tsparticles"
        particlesLoaded={particlesLoaded}
        options={particlesConfig as ISourceOptions}
      />
    );
  }

  return <></>; // Render nothing if not initialized yet
};


export default ParticlesBackground;
