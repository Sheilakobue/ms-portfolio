import Hero from '@/components/Hero'; // Import the Hero component from the specified path
import Portfolio from '@/components/Portfolio';
import { client } from '@/sanity/lib/client';
/**
 * The Home function is a React functional component that renders the Hero component.
 *
 * @function Home
 * @returns {JSX.Element} The rendered Hero component.
 */

async function getData(){
  const query = `*[_type == "project"] {
  name,
  image,
  url,
  category,
  }`

  const data = await client.fetch(query)
  
return data

}
export default async function Home() {
  const projects= await getData()
  // Return the Hero component wrapped in a fragment
  return (
    <>
    <Hero/>
    <Portfolio projects={projects} />
    </>
  );
}
