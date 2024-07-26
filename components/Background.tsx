"use client"; // Indicates that this code should be run on the client side
import React from 'react'
import TabButton from "./TabButton";
import { useState, useEffect, useTransition } from "react";
import Link from "next/link";

export default function Background() {

  const [tab, setTab] = useState<string>("skills"); // State to manage the active tab
  const [isPending, startTransition] = useTransition(); // Manage state transitions

  // Function to handle tab changes
  const handleTabChange = (id: string) => {
    startTransition(() => {
      setTab(id);
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    });
  };

  return (
    <section 
    id="background"
    className="w-full h-fit px-[40px] py-20 relative bg-blue-100"
  >
  
    <div className="flex justify-items-end items-left my-10  flex-wrap flex-row mt-8">
      
        <TabButton
          selectTab={() => handleTabChange("education")}
          active={tab === "education"}
        >
          Education
        </TabButton>
        <TabButton
          selectTab={() => handleTabChange("certifications")}
          active={tab === "certifications"}
        >
          Certifications
        </TabButton>
        <TabButton
          selectTab={() => handleTabChange("experience")}
          active={tab === "experience"}
        >
          Experience
        </TabButton>        
      </div>
  </section>

  )
}
