"use client"; // Indicates that this code should be run on the client side

import { useEffect } from "react";

// Interface for the Project type
interface Project {
  name: string;
  image: string;
  url: string;
  category?: string;
}

// Interface for the props that ProjectFilter component accepts
interface ProjectFilterProps {
  setFiltered: React.Dispatch<React.SetStateAction<Project[]>>;
  activeCategory: string;
  setActiveCategory: React.Dispatch<React.SetStateAction<string>>;
  projects: Project[];
}

/**
 * ProjectFilter is a React functional component that filters projects
 * based on the selected category and updates the filtered list.
 *
 * @component
 * @param {ProjectFilterProps} props - The props that the component receives.
 * @returns {JSX.Element} The rendered ProjectFilter component.
 */
const ProjectFilter: React.FC<ProjectFilterProps> = ({
  setFiltered,
  activeCategory,
  setActiveCategory,
  projects,
}) => {
  // useEffect hook to update the filtered projects list whenever the active category changes
  useEffect(() => {
    if (activeCategory === "all") {
      setFiltered(projects); // Show all projects if the active category is "all"
      return;
    }
    const filtered = projects.filter((project) =>
      project.category?.includes(activeCategory)
    );
    setFiltered(filtered); // Update the filtered list based on the active category
  }, [activeCategory, projects, setFiltered]);

  // List of categories for filtering projects
  const categories = [
    { key: "all", label: "All" },
    { key: "next", label: "Next.js" },
    { key: "react", label: "React" },
    { key: "vanilla", label: "Vanilla" },
    { key: "mongo", label: "MongoDB" },
    { key: "tailwind", label: "Tailwind" },
    { key: "prisma", label: "Prisma" },
    { key: "sql", label: "SQL" },
  ];

  return (
    <div className="flex gap-8 my-10 items-center flex-wrap justify-center">
      {categories.map((category) => (
        <button
          key={category.key}
          className={`text-gray-500 ${
            activeCategory === category.key ? "border-yellow-500 border-b-2" : ""
          }`}
          onClick={() => setActiveCategory(category.key)}
        >
          {category.label}
        </button>
      ))}
    </div>
  );
};

export default ProjectFilter;
