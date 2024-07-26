import Hero from '@/components/Hero'; // Import the Hero component from the specified path
import Portfolio from '@/components/Portfolio';
import { client } from '@/sanity/lib/client';
import Skills from '@/components/Skills';
import Background from '@/components/Background';
import ContactForm from '@/components/ContactForm';

/**
 * The Home function is a React functional component that renders the Hero component.
 *
 * @function Home
 * @returns {JSX.Element} The rendered Hero component.
 */

export const dynamic ="force-dynamic";

async function getData(){
  const query = `*[_type == "project"] {
  name,
  image,
  url,
  category,
  }`;

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
    <Skills/>
    <Background/>
    <ContactForm/>
    </>
  );
}
