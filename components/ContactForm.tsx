"use client"; // Indicates that this code should be run on the client side

import { useRef } from "react"; // Import useRef hook from React
import { useFormStatus } from "react-dom"; // Import useFormStatus hook from React DOM
import emailjs from "@emailjs/browser"; // Import emailjs for sending emails

/**
 * ContactForm is a React functional component that renders a contact form and handles email submission.
 *
 * @function ContactForm
 * @returns {JSX.Element} The rendered contact form.
 */
export default function ContactForm() {
  const form = useRef<HTMLFormElement | null>(null); // Create a ref to access the form DOM element
  const { pending } = useFormStatus(); // Get the pending status from the form status hook

  /**
   * sendEmail handles the form submission and sends the email using emailjs.
   *
   * @param {React.FormEvent<HTMLFormElement>} e - The form submission event.
   */
  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent the default form submission behavior

    emailjs
      .sendForm(
        "service_vaf7c8l", // Service ID
        "template_msjzz42", // Template ID
        form.current!, // Form element
        "oLNIqXqXc8fSzFp2w" // Public key
      )
      .then((result) => {
        console.log(result.text); // Log the result on success
        form.current?.reset(); // Reset the form
      })
      .catch((error) => {
        console.log(error.text); // Log the error on failure
      });
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <div className="grid md:grid-cols-2 max-w-[1400px] gap-10 mb-4">
        <label htmlFor="name" className="sr-only">
          Name
        </label>
        <input
          type="text"
          required
          name="name"
          id="name"
          placeholder="Name"
          className="block h-[45px] p-[5px] text-l border-blue-500 md-6 border-b focus:outline-yellow-300 text-blue-700 bg-blue-100"
        />
        <label htmlFor="email" className="sr-only">
          Email
        </label>
        <input
          type="email"
          required
          name="email"
          id="email"
          placeholder="Email"
          className="block w-full h-[45px] p-[5px] text-l border-blue-500 md-6 border-b focus:outline-yellow-300 text-blue-700 bg-blue-100"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="message" className="sr-only">
          Your Message
        </label>
        <textarea
          name="message"
          id="message"
          rows={6}
          placeholder="Message"
          className="block w-full h-auto p-[5px] text-l border-blue-500 md-6 border-b focus:outline-yellow-300 text-blue-700 bg-blue-100"
        ></textarea>
      </div>
      <button
        className="px-4 py-2 text-sm font-bold rounded-md bg-transparent hover:bg-transparent hover:bg-slate-300 text-blue-500 border border-blue-500"
        aria-label="Submit"
        disabled={pending}
      >
        Submit
      </button>
    </form>
  );
}
