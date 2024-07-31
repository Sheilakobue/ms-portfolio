import Hero from '@/components/Hero'; // Import the Hero component from the specified path
import Portfolio from '@/components/Portfolio'; // Import the Portfolio component from the specified path
import { client } from '@/sanity/lib/client'; // Import the Sanity client from the specified path
import Skills from '@/components/Skills'; // Import the Skills component from the specified path
import Background from '@/components/Background'; // Import the Background component from the specified path
import Contact from '@/components/Contact'; // Import the Contact component from the specified path

/**
 * The Home function is a React functional component that renders the main sections of the homepage.
 *
 * @function Home
 * @returns {JSX.Element} The rendered homepage components.
 */

// Force Next.js to use dynamic rendering for this page
export const dynamic = "force-dynamic";

/**
 * Fetches project data from the Sanity CMS.
 *
 * @async
 * @function getData
 * @returns {Promise<Array>} The project data fetched from Sanity.
 */
async function getData() {
  const query = `*[_type == "project"] {
    name,
    image,
    url,
    category,
  }`; // Define the query to fetch project data

  const data = await client.fetch(query); // Fetch the data using the Sanity client
  
  return data; // Return the fetched data
}

/**
 * The Home function is an async React functional component that fetches project data and renders the main sections of the homepage.
 *
 * @function Home
 * @returns {JSX.Element} The rendered homepage components.
 */
export default async function Home() {
  const projects = await getData(); // Fetch the project data

  // Return the main components of the homepage wrapped in a fragment
  return (
    <>
      <Hero /> {/* Render the Hero component */}
      <Portfolio projects={projects} /> {/* Render the Portfolio component with the fetched project data */}
      <Skills /> {/* Render the Skills component */}
      <Background /> {/* Render the Background component */}
      <Contact /> {/* Render the Contact component */}
    </>
  );
}
