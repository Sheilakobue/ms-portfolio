import { urlFor } from "@/sanity/lib/client";
import Image from "next/image";
import { useState } from "react";
import { LiaExternalLinkAltSolid } from "react-icons/lia";

/**
 * ProjectCard displays a card with a project image and an optional overlay with a link.
 *
 * @component
 * @param {Object} props - The props that the component receives.
 * @param {string} props.name - The name of the project.
 * @param {string} props.image - The image URL of the project.
 * @param {string} props.url - The URL to the project.
 * @returns {JSX.Element} The rendered ProjectCard component.
 */
const ProjectCard: React.FC<{ 
  name: string; 
  image: string; 
  url: string 
}> = ({ name, image, url }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="shadow-lg cursor-pointer relative"
      onMouseLeave={() => setIsHovered(false)}
      onMouseEnter={() => setIsHovered(true)}
    >
      <Image
        src={urlFor(image).url()} 
        alt={`${name} Image`}
        height={800}
        width={800}
        className="w-full h-auto object-cover" // Ensures image fits the container
      />
      {isHovered && (
        <a href={url} target="_blank" rel="noopener noreferrer">
          <div className="bg-blue-900/50 py-1 
          px-3 absolute w-full h-full top-0 flex 
          justify-center items-center 
          transition-opacity duration-500 
          opacity-100 group-hover:opacity-0">
            <h3 className="text-center text-yellow-400 text-2xl flex gap-1 items-center font-thin">
              Checkout Project
              <LiaExternalLinkAltSolid />
            </h3>
          </div>
        </a>
      )}
    </div>
  );
};

export default ProjectCard;
