"use client"; // Indicates that this code should be run on the client side

import { useState, useEffect } from "react";
import ProjectFilter from "./ProjectFilter";
import ProjectCard from "./ProjectCard";

// Interface for the Project type
interface Project {
  name: string;
  image: string;
  url: string;
  category?: string;
}

/**
 * Portfolio is a React functional component that displays a portfolio of projects.
 * It includes a filter for projects and a "Show More" button to load more projects.
 *
 * @component
 * @param {Object} props - The props that the component receives.
 * @param {Project[]} props.projects - The list of projects to display.
 * @returns {JSX.Element} The rendered Portfolio component.
 */
const Portfolio: React.FC<{ projects: Project[] }> 
= ({ projects}) => {
  const [activeCategory, setActiveCategory] = useState<string>("all"); // State to manage the active category for filtering projects
  const [filtered, setFiltered] = useState<Project[]>([]); // State to manage the filtered list of projects
  const [visibleProjects, setVisibleProjects] = useState<number>(3); // State to manage the number of visible projects

  // Load more projects by increasing the visibleProjects state by 4
  const loadMoreProjects = () => {
    setVisibleProjects((prevProjects) => prevProjects + 3);
  };

  // Effect to update the filtered list of projects whenever the active category changes
  useEffect(() => {
    if (activeCategory === "all") {
      setFiltered(projects); // Show all projects if the active category is "all"
      return;
    }
    const filteredProjects = projects.filter((project) =>
      project.category?.includes(activeCategory)
    );
    setFiltered(filteredProjects); // Update the filtered list based on the active category
  }, [activeCategory, projects]);

  return (
    <div
      id="projects"
      className="w-full h-fit py-10 relative bg-blue-100"
    >
      <div className="max-w-[1400px] mx-auto w-[91%]">
        <div className="flex justify-center">
          <span className="bg-yellow-300 px-2 text-xl text-blue-950 font-extrabold border uppercase rounded-md mb-5">
            Projects
          </span>
        </div>
       </div>
    </div>
  );
};

export default Portfolio;
