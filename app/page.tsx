import Hero from '@/components/Hero'; // Import the Hero component from the specified path
import Portfolio from '@/components/Portfolio';
/**
 * The Home function is a React functional component that renders the Hero component.
 *
 * @function Home
 * @returns {JSX.Element} The rendered Hero component.
 */
export default function Home() {
  // Return the Hero component wrapped in a fragment
  return (
    <>
    <Hero/>
    <Portfolio/>
    </>
  );
}
