
import { createClient } from 'next-sanity'; // Import the createClient function from the next-sanity library
import { apiVersion, dataset, projectId, useCdn } from '../env'; // Import configuration values from the environment file
import imageUrlBuilder from "@sanity/image-url"; // Import the imageUrlBuilder function from the @sanity/image-url library

// Create a client instance for interacting with the Sanity API
export const client = createClient({
  projectId,    // Project ID from the environment configuration
  dataset,      // Dataset name from the environment configuration
  apiVersion,   // API version from the environment configuration
  useCdn,       // Use Content Delivery Network (CDN) from the environment configuration
})

// Create an image URL builder instance using the client
const builder = imageUrlBuilder(client)

/**
 * Generate a URL for a given image source.
 *
 * @param {string} source - The source of the image.
 * @return {string} - The URL for the image.
 */

export function urlFor(source:string) {
  return builder.image(source)
}
