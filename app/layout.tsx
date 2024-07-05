import type { Metadata } from "next"; // Import the Metadata type from Next.js
import { Poppins } from "next/font/google"; // Import the Poppins font from Google Fonts using Next.js
import "./globals.css"; // Import global CSS styles
import Navbar from "@/components/Navbar"; // Import the Navbar component from the specified path

// Initialize the Poppins font with specified subsets and weights
const poppins = Poppins({ 
  subsets: ["latin"],
  weight: [
    "100",
    "200",
    "300",
    "400",
    "500",
    "600",
    "700",
    "800",
  ]
});

// Define the metadata for the application
export const metadata: Metadata = {
  title: "Sheila's Portfolio", // The title of the webpage
  description: "Full Stack Developer Portfolio", // The description of the webpage
};

/**
 * RootLayout is a React functional component that sets up the base layout for the application.
 * It includes global styles, a navbar, and renders the children components.
 *
 * @function RootLayout
 * @param {Object} props - The properties passed to the component.
 * @param {React.ReactNode} props.children - The child components to be rendered within the layout.
 * @returns {JSX.Element} The rendered layout component.
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en"> {/* Set the language of the document to English */}
      <body className={poppins.className}> {/* Apply the Poppins font to the body */}
        <Navbar/> {/* Render the Navbar component */}
        {children} {/* Render the child components */}
      </body>
    </html>
  );
}
