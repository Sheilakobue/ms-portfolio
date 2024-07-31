// Define the API version to use for Sanity. Defaults to '2024-07-05' if not specified.
export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-07-05';

/**
 * Retrieves the dataset name for the Sanity client from environment variables.
 * Throws an error if the environment variable is not set.
 */
export const dataset = assertValue(
  process.env.NEXT_PUBLIC_SANITY_DATASET,
  'Missing environment variable: NEXT_PUBLIC_SANITY_DATASET'
);

/**
 * Retrieves the project ID for the Sanity client from environment variables.
 * Throws an error if the environment variable is not set.
 */
export const projectId = assertValue(
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  'Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID'
);

// Specifies whether to use the Content Delivery Network (CDN). Set to false by default.
export const useCdn = false;

/**
 * Ensures that a value is defined and not undefined.
 * Throws an error with the specified message if the value is undefined.
 *
 * @param {T | undefined} v - The value to check.
 * @param {string} errorMessage - The error message to throw if the value is undefined.
 * @returns {T} - The value if it is defined.
 * @throws {Error} - Throws an error if the value is undefined.
 */
function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage);
  }

  return v;
}
