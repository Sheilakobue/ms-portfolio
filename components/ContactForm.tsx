"use client";

import { useRef } from "react";
import { useFormStatus } from "react-dom";
import emailjs from "@emailjs/browser";


export default function ContactForm() {
  const form = useRef <HTMLFormElement |null>
  (null);
  const {pending} = useFormStatus();
  
  const sendEmail = (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_vaf7c8l",
        "template_msjzz42",
        form.current!,
        "oLNIqXqXc8fSzFp2w"
      )
      .then((result) => {
        console.log(result.text);
        form.current?.reset();
      })
      .catch((error) => {
        console.log(error.text);
      });
  };
  return (
    <form 
    ref={form}
    onSubmit={sendEmail}
    >
    <div className="grid md:grid-cols-2 max-w-[1400px] gap-10 mb-4">
      <label htmlFor="name"
      className="sr-only">
        Name
      </label>
      <input type="text"
      required
      name="name"
      id="name"
      placeholder="Name"
      className="block  h-[45px] p-[5px]
      text-l border-blue-500 md-6
      border-b focus:outline-yellow-300 text-blue-700
      bg-blue-100 "/>
      <label htmlFor="name"
      className="sr-only">
        Email
      </label>
      <input type="text"
      required
      name="email"
      id="email"
      placeholder="Email"
      className="block w-full h-[45px] p-[5px]
      text-l border-blue-500 md-6
      border-b focus:outline-yellow-300 text-blue-700
      bg-blue-100 "/>
    </div>
    <div className="mb-4">
      <label htmlFor="message" className="sr-only">
        Your Message
      </label>
    <textarea name="message"
    id="message" rows={6}
    placeholder="Message"
    className="block w-full h-auto p-[5px]
      text-l border-blue-500 md-6
      border-b focus:outline-yellow-300 text-blue-700
      bg-blue-100 "
    >

    </textarea>
    </div>
    </form>
  )
}
