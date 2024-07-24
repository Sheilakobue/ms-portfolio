import ProgressBar from "./ProgressBar";

const skills = [
  {iconPath:"/html5-icon.png", tittle:"HTML",
    percentage:90},
  {iconPath:"/css-icon.png", tittle:"CSS",
    percentage:80},
  {iconPath:"/public/tailwindcss-icon.png", tittle:"tailwind.CSS",
    percentage:90},
  {iconPath:"/JS-icon.gif", tittle:"JavaScript",
    percentage:50},
  {iconPath:"/next.js icon.png", tittle:"Next.js",
    percentage:90},
  {iconPath:"/react-icon.gif", tittle:"React",
    percentage:90},
  {iconPath:"/git-icon.png", tittle:"Git",
    percentage:90},
  {iconPath:"/github-icon.gif", tittle:"GitHub",
    percentage:70},
  {iconPath:"/node-js-icon.png", tittle:"Node.js",
    percentage:90},
  {iconPath:"/mongodb-icon.png", tittle:"MongoDB",
    percentage:70},
  {iconPath:"/supabase-icon.png", tittle:"Superbase",
    percentage:90},
  {iconPath:"/firebase-icon.png", tittle:"Firebase",
    percentage:60},
  {iconPath:"/public/netlify-icon.png", tittle:"Netlify",
    percentage:60},
];

export default function Skills() {
  return (
   <section 
   id="skills"
   className="w-full h-fit px-[40px] py-20 relative bg-blue-100">
       <div className="flex justify-center">
          <span className="text-center text-xl font-bold text-blue-900 px-2 uppercase  mb-4">
            Skills
          </span>
        </div>
        <hr className="w-6 h-1 mx-auto m-4 bg-sky-300 border-0 rounded" />
   </section>
  )
}
