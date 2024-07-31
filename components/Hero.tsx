'use client'; // Indicates this code should be run on the client side

import Image from "next/image"; // Importing the Image component from Next.js for optimized images
import ParticlesBackground from "./ParticlesBackground"; // Importing a custom background component
import { FaGithub, FaDev, FaFacebook, FaLinkedin } from "react-icons/fa"; // Importing icons from react-icons
import Link from "next/link"; // Importing the Link component from Next.js for client-side navigation
import { TypeAnimation } from "react-type-animation"; // Importing the TypeAnimation component for text animation

/**
 * Hero component for the homepage, displaying a welcome message, animated text, social media icons, and an image.
 *
 * @component
 * @returns {JSX.Element} The rendered Hero component.
 */
export default function Hero() {
  return (
    <header id="home" className="relative h-fit py-10">
      {/* Render the custom background particles */}
      <ParticlesBackground />
      
      <div className="relative flex justify-between max-w-[1400px] mx-auto items-center h-full w-[91%] max-md:flex-col">
        
        {/* Text section */}
        <div className="flex flex-col justify-center text-blue-300 flex-1 max-md:order-2 max-md:text-center">
          <h2 className="font-bold md:text-1xl text-2xl mb-2">
            Hi, I am Sheila Kobue, a Full Stack
          </h2>
          <h1 className="xl:text-5xl lg:text-4xl md:text-3xl text-2xl text-yellow-300 mb-5">
            Developer
          </h1>
          
          {/* Animated text */}
          <span className="md:w-3/4 mb-3">
            <TypeAnimation 
              sequence={[
                "Passionate about creating visually appealing and user-friendly websites. As the founder and CEO of MMS Dynamic Services (Pty) Ltd, I am dedicated to leveraging technology to empower businesses and communities. Explore my work, projects, and vision for a more connected and inclusive future. Find out what I can do for you...",
                2000,
              ]}
              wrapper="span"
              speed={20}
              className="text-blue-300 text-sm sm:text-sm mb-5"
              repeat={Infinity}
            />
            <div className="mb-3">
              <Link href={"#contact"}>
                <span className="text-yellow-300 underline text-sm">
                  Contact Me &#8594;
                </span>
              </Link>
            </div>
          </span>
          
          {/* Social media icons */}
          <div className="flex gap-5 text-blue-700 text-2xl max-md:justify-center mb-5">
            <a target="_blank" href="https://www.linkedin.com/in/sheila-kobue-82161973/"><FaLinkedin /></a>
            <a target="_blank" href="https://web.facebook.com/maserole.mojela/"><FaFacebook /></a>
            <a target="_blank" href="https://github.com/Sheilakobue/interactive-web-apps.git/"><FaGithub /></a>
            <FaDev />
          </div>  
          
          {/* Download CV button */}
          <div>
            <a href="/_Sheila_Kobue_Resume.pdf" download="_Sheila_Kobue_Resume.pdf">
              <button className="px-2 py-2 text-sm rounded-full bg-transparent hover:bg-transparent hover:bg-slate-500 text-yellow-300 border border-blue-500">       
                Download CV
              </button>
            </a>
          </div>
        </div>
        
        {/* Image section */}
        <div className="flex flex-1 justify-end max-md:order-1 max-md:mb-3">
          <Image
            src={"/header-image.jpg"}
            width={450}
            height={450}
            role="img"
            aria-label="Sheila's Image"
            alt="Sheila's Image"
            className="md:justify-self-end max-md:w-96"
          />
        </div>
      </div>
    </header>
  );
}
