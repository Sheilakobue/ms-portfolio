"use client";
import { useEffect } from "react";

// Interface for the Project type
interface Project {
  name: string;
  image: string;
  url: string;
  category?: string;
}

interface ProjectFilterProps {
  setFiltered: React.Dispatch<React.SetStateAction<Project[]>>;
  activeCategory: string;
  setActiveCategory: React.Dispatch<React.SetStateAction<string>>;
  projects: Project[];
}

const ProjectFilter: React.FC<ProjectFilterProps> = ({
  setFiltered,
  activeCategory,
  setActiveCategory,
  projects,
}) => {
  useEffect(() => {
    if (activeCategory === "all") {
      setFiltered(projects);
      return;
    }

    const filtered = projects.filter((project) =>
      project.category?.includes(activeCategory)
    );
    setFiltered(filtered);
  }, [activeCategory, projects, setFiltered]);

  // List of categories for filtering projects
  const categories = [
    { key: "all", label: "All" },
    { key: "next", label: "Next.js" },
    { key: "react", label: "React" },
    { key: "typeScript", label: "TypeScript" },
    { key: "mongo", label: "MongoDB" },
    { key: "tailwind", label: "Tailwind" },
  ];

  return (
    <div className="flex gap-8 my-10 items-center flex-wrap justify-center">
      {categories.map((category) => (
        <button
          key={category.key}
          aria-pressed={activeCategory === category.key}
          className={`text-blue-900 ${
            activeCategory === category.key
              ? "border-yellow-500 border-b-2"
              : ""
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
