"use client"; // Indicates that this code should be run on the client side

import { useState, useEffect } from "react";
import ProjectFilter from "./ProjectFilter";
import ProjectCard from "./ProjectCard";

// Interface for the Project type
interface Project {
  name: string;
  image: string;
  url: string;
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

const Portfolio: React.FC<{ projects: Project[] }> = ({ projects }) => {
  const [activeCategory, setActiveCategory] = useState<string>("all"); // State to manage the active category for filtering projects
  const [filtered, setFiltered] = useState<Project[]>([]); // State to manage the filtered list of projects
  const [visibleProjects, setVisibleProjects] = useState<number>(2); // State to manage the number of visible projects

  // Load more projects by increasing the visibleProjects state by 4
  const loadMoreProjects = () => {
    setVisibleProjects((prevProjects) => prevProjects + 2);
  };

  // // Effect to update the filtered list of projects whenever the active category changes
  // useEffect(() => {
  //   if (activeCategory === "all") {
  //     setFiltered(projects); // Show all projects if the active category is "all"
  //     return;
  //   }
  //   const filteredProjects = projects.filter((project) =>
  //     project.category?.includes(activeCategory)
  //   );
  //   setFiltered(filteredProjects); // Update the filtered list based on the active category
  // }, [activeCategory, projects]);

  return (
    <div id="projects" className="w-full h-fit py-10 relative bg-blue-100">
      <div className="max-w-[1400px] mx-auto w-[91%]">
      <div className="flex justify-center">
          <span className="text-center text-xl font-bold text-blue-900 px-2 uppercase  mb-4">
            Projects
          </span>
        </div>
        <hr className="w-10 h-1 mx-auto m-2 bg-sky-300 border-0 rounded" />
        <ProjectFilter
          setFiltered={setFiltered}
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
          projects={projects}
        />

        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-10">
          {filtered.slice(0, visibleProjects).map((project, index) => (
            <ProjectCard
              key={index}
              name={project.name}
              image={project.image}
              url={project.url}
            />
          ))}
        </div>

        {visibleProjects < filtered.length && (
          <div className="text-center mt-4">
            <button
              className="bg-yellow-300 py-2 px-4 rounded-md font-bold mt-10 text-blue-950 "
              onClick={loadMoreProjects}
              aria-label="Show More Projects"
            >
              Show More
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Portfolio;
