'use client'; // Use the client-side rendering mode

import { NextStudio } from 'next-sanity/studio'; // Import the NextStudio component from the next-sanity package
import config from '../../../sanity.config'; // Import the Sanity configuration from the specified path

/**
 * StudioPage is a React functional component that renders the Sanity Studio.
 *
 * @function StudioPage
 * @returns {JSX.Element} The rendered NextStudio component with the provided configuration.
 */
export default function StudioPage() {
  return <NextStudio config={config} />; // Render the NextStudio component with the imported configuration
}
