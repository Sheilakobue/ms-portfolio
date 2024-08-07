import { useEffect } from "react";

// Define the Project interface for type-checking
interface Project {
  name: string;
  image: string;
  url: string;
  category?: string;
}

// Define the props for the ProjectFilter component
interface ProjectFilterProps {
  setFiltered: React.Dispatch<
    React.SetStateAction<Project[]>
  >;
  activeCategory: string;
  setActiveCategory: React.Dispatch<
    React.SetStateAction<string>
  >;
  projects: Project[];
}

const ProjectFilter: React.FC<ProjectFilterProps> = ({
  setFiltered,
  activeCategory,
  setActiveCategory,
  projects,
}) => {
  // Effect to filter projects based on the active category
  useEffect(() => {
    if (activeCategory === "all") {
      setFiltered(projects);
      return;
    }
    const filtered = projects.filter((project) =>
      project.category?.includes(activeCategory)
    );
    setFiltered(filtered);
  }, [activeCategory]);

  // List of categories for filtering projects
  const categories = [
    { key: "all", label: "All" },
    { key: "next.js", label: "Next.js" },
    { key: "react", label: "React" },
    { key: "typescript", label: "TypeScript" },
    { key: "mongodb", label: "MongoDB" },
    { key: "tailwind", label: "Tailwind" },
  ];

  return (
    <div className="flex gap-8 my-10 items-center flex-wrap justify-center">
       {categories.map((category) => (
        <button
          key={category.key}
          className={`text-blue-900 ${
            activeCategory === category.key
            ? "border-yellow-500 border-b-2"
            : ""
        }
        `}
        onClick={() => setActiveCategory(category.key)}
        >
          {category.label}
        </button>
      ))}
    </div>
  );
};

export default ProjectFilter;
