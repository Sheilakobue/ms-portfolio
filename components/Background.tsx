"use client"; // Indicates that this code should be run on the client side
import React from 'react'
import TabButton from "./TabButton";
import { useState, useEffect, useTransition } from "react";
import Link from "next/link";


const TAB_DATA = [
  {
    title:"SoftSkills",
    id:"softSkills",
    content:(
      <ul>
        <li>Attention to detail</li>
        <li>Problem solving</li>
        <li>Creativity</li>
        <li>Communication Skills</li>
        <li>Team Player</li>
        <li>Well Organized</li>
      </ul>
    )
  },
  {
    title:"Education",
    id:"education",
    content:(
      <ul>
        <li>Sterkrevier Combined School</li>
        <li>2005</li>
        <li>Grade 12</li>
        <li>English, Sepedi, Afrikaans, Mathematics, Physical Science, Biology, History.</li>
      
        <li>Central Johannesburg College (CJC)</li>
        <li>2009</li>
        <li>N1-N6</li>
        <li>Civil Engineering</li>
        <li>December 2022</li>
        <li>Programming Fundamentals <a href="https://www.codespace.co.za/">Codespace</a></li>
                    
        <li>March 2023</li>
        <li>Intro to Web <a href="https://www.codespace.co.za/">Codespace</a></li>
      </ul>
    ),
  },
  {
    title:"Certificates",
    id:"certificates",
    content:(
      <ul>
        <li>Software Engineering</li>
        <li>Next.js & React</li>
        <li>Computer Literacy & Basic Computer</li>
        <li>MicroSoft Certificate</li>
        <li>Program Fundamental</li>
        <li>Growthmindset</li>
      </ul>
    )
  },
  {
    title:"Experience",
    id:"experience",
    content:(
      <ul>
       <li>Edcon Call Centre</li>
       <li>01/04/2009 - 30/02/2011</li>
       <li>Call Centre Agent</li>
      <li>Customer services, collection, inbound and outbound new accounts, capturing customer's information on Devox</li>
      <li>Maipi Electrical & Civil Construction</li>
      <li>01/07/2012 - 12/04/2021</li>
      <li>Office Administrator</li>
      <li>Office work: paper works, phone calls, filing, attend meetings, attend workshops, research, welcome visitors, data capture, safety file updates, tender applications, finance: Invoicing, quotations, payroll admin.</li>
      <li>Statistic South Africa</li>
      <li>27/12/2021 - 30/07/2022</li>
      <li>Field Operation Officer (FOO)</li>
      <li>Coordinate and supervise the work assigned to Fieldworkers and Field supervisors, Control visit and refusals from field work supervisors</li>
      </ul>
    )
  },
]
export default function Background() {

  const [tab, setTab] = useState<string>("softSkills"); // State to manage the active tab
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
    <div
  >
  
    <div className="flex justify-items-end items-left my-10  flex-wrap flex-row mt-8">
      
        <TabButton
          selectTab={() => handleTabChange("softSkills")}
          active={tab === "softSkills"}
        >
          Soft SKills
        </TabButton>

        <TabButton
          selectTab={() => handleTabChange("education")}
          active={tab === "education"}
        >
          Education
        </TabButton>
        <TabButton
          selectTab={() => handleTabChange("certificates")}
          active={tab === "certificates"}
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
      <div className='mt-8'>
        {TAB_DATA.find((t) => t.id === tab).content}

      </div>
  </div>

  )
}
