import createImageUrlBuilder from '@sanity/image-url';
import type { Image } from 'sanity';

import { dataset, projectId } from '../env';

/**
 * Creates an instance of the image URL builder from Sanity.
 * Uses the provided project ID and dataset to configure the builder.
 */
const imageBuilder = createImageUrlBuilder({
  projectId: projectId || '', // Project ID for the Sanity client
  dataset: dataset || '',     // Dataset name for the Sanity client
});

/**
 * Generates a URL for a given image source using Sanity's image URL builder.
 *
 * @param {Image} source - The image source object from Sanity.
 * @returns {string} - The URL for the image with specified transformations applied.
 */
export const urlForImage = (source: Image) => {
  return imageBuilder?.image(source) // Create an image URL from the provided source
    .auto('format')  // Automatically adjust image format (e.g., WebP for modern browsers)
    .fit('max')      // Ensure the image fits within its container without distortion
    .url();          // Generate and return the URL for the image
};
