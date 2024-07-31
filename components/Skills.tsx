import ProgressBar from "./ProgressBar";

/**
 * An array of skill objects, each containing the icon path, title, and percentage.
 */
const skills = [
  { iconPath: "/html5-icon.png", title: "HTML", percentage: 80 },
  { iconPath: "/css-icon.png", title: "CSS", percentage: 80 },
  { iconPath: "/tailwindcss-icon.png", title: "Tailwind CSS", percentage: 60 },
  { iconPath: "/JS-icon.gif", title: "JavaScript", percentage: 60 },
  { iconPath: "/next.js icon.png", title: "Next.js", percentage: 70 },
  { iconPath: "/react-icon.gif", title: "React", percentage: 80 },
  { iconPath: "/git-icon.png", title: "Git", percentage: 70 },
  { iconPath: "/github-icon.gif", title: "GitHub", percentage: 70 },
  { iconPath: "/node-js-icon.png", title: "Node.js", percentage: 70 },
  { iconPath: "/mongodb-icon.png", title: "MongoDB", percentage: 70 },
  { iconPath: "/supabase-icon.png", title: "Supabase", percentage: 60 },
  { iconPath: "/firebase-icon.png", title: "Firebase", percentage: 60 },
  { iconPath: "/netlify-icon.png", title: "Netlify", percentage: 80 },
];

/**
 * Skills component displays a section containing a list of skill progress bars.
 *
 * @component
 * @returns {JSX.Element} The rendered Skills section.
 */
export default function Skills() {
  return (
    <section id="skills" className="w-full h-fit px-[40px] py-2 relative bg-blue-100">
      <div className="flex justify-center">
        <span className="text-center text-xl font-bold text-blue-900 px-2 uppercase mb-2 mt-2">
          Skills
        </span>
      </div>
      <hr className="w-10 h-1 mx-auto m-4 bg-sky-300 border-0 rounded" />
      <div className="max-w-[1400px] mx-auto grid md:grid-cols-3 md:gap-10">
        {skills.map((skill, index) => (
          <div key={index}>
            <ProgressBar {...skill} />
          </div>
        ))}
      </div>
    </section>
  );
}
