"use client"; // Indicates that this code should be run on the client side
import React, { useState, useTransition } from 'react';
import TabButton from "./TabButton";
import Link from "next/link";

const TAB_DATA = [
  {
    title: "Soft Skills",
    id: "softSkills",
    content: (
      <ul className="list-disc list-inside pl-4">
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
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc list-inside pl-4">
        <h1 className='font-bold'>Sterkrevier Combined School - 2005</h1>
        <h4>Grade:12</h4>
        <p>Subjects: English, Sepedi, Afrikaans, Mathematics, Physical Science, Biology, History.</p>
        <hr className="w-50 h-1 mx-auto m-2 bg-sky-300 border-0 rounded" />

        <h1 className='font-bold'>Central Johannesburg College (CJC) - 2009</h1>
        <h4>Civil Engineering</h4>
        <p>N1-N6</p>
        <hr className="w-50 h-1 mx-auto m-2 bg-sky-300 border-0 rounded" />

        <h1>Programming Fundamentals <a className='underline font-bold hover:text-yellow-300' target='_blank' href="https://www.codespace.co.za/">Codespace</a></h1>
        <p>December 2022</p>     
        <hr className="w-50 h-1 mx-auto m-2 bg-sky-300 border-0 rounded" />
        <h1>Intro to Web <a className='underline font-bold hover:text-yellow-300' target='_blank' href="https://www.codespace.co.za/">Codespace</a></h1>
        <li>March 2023</li>
        
      </ul>
    ),
  },
  {
    title: "Certificates",
    id: "certificates",
    content: (
      <ul className="list-disc list-inside pl-4 ">
        <li><Link className='hover:underline hover:text-yellow-300 transition duration-500' href="/Certificates/Software Engineering cert.pdf" download="Software Engineering cert.pdf">Software Engineering</Link></li>
        <li><Link className='hover:underline hover:text-yellow-300 transition duration-500' href="/public/Certificates/Next.js & React Certificate.pdf" download="Next.js & React Certificate.pdf">Next.js & React</Link></li>
        <li><Link className='hover:underline hover:text-yellow-300 transition duration-500' href="/public/Certificates/Computer Literacy & Basic.pdf" download="Computer Literacy & Basic.pdf">Computer Literacy & Basic Computer</Link></li>
        <li><Link className='hover:underline hover:text-yellow-300 transition duration-500' href="/public/Certificates/MICROSOFT CERTIFICATE.pdf" download="MICROSOFT CERTIFICATE.pdf">Microsoft Certificate</Link></li>
        <li><Link className='hover:underline hover:text-yellow-300 transition duration-500' href="/public/Certificates/PROG FUNDAMENTAL CERT.pdf" download="PROG FUNDAMENTAL CERT.pdf">Programming Fundamentals</Link></li>
        <li><Link className='hover:underline hover:text-yellow-300 transition duration-500' href="/public/Certificates/Growthmindset cert.pdf" download="Growthmindset cert.pdf">Growth Mindset</Link></li>
      </ul>
    )
  },
  {
    title: "Experience",
    id: "experience",
    content: (
      <ul className="list-disc list-inside pl-4">
        <h1 className='font-bold'>Edcon Call Centre</h1>
        <p>01/04/2009 - 30/02/2011</p>
        <h4>Call Centre Agent</h4>
        <p>Customer services, collection, inbound and outbound new accounts, capturing customer's information on Devox</p>
        <hr className="w-50 h-1 mx-auto m-2 bg-sky-300 border-0 rounded" />

        <h1>Maipi Electrical & Civil Construction</h1>
        <p>01/07/2012 - 12/04/2021</p>
        <h4>Office Administrator</h4>
        <p>Office work: paperwork, phone calls, filing, attend meetings, attend workshops, research, welcome visitors, data capture, safety file updates, tender applications, finance: invoicing, quotations, payroll admin.</p>
        <hr className="w-50 h-1 mx-auto m-2 bg-sky-300 border-0 rounded" />
        <h1>Field Operation Officer (FOO) <a className='underline font-bold hover:text-yellow-300' target='_blank' href="https://www.statssa.gov.za/">Statistic South Africa</a></h1>
        <p>27/12/2021 - 30/07/2022</p>
        <p>Coordinate and supervise the work assigned to fieldworkers and field supervisors, control visit and refusals from fieldwork supervisors</p>
      </ul>
    )
  },
];

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
    <section 
    
      className="w-full h-fit px-[40px] py-2 relative bg-blue-100"
    >
    <div className="container mx-auto p-2 text-blue-950">
      <div className="flex justify-items-end items-left my-5 flex-wrap flex-row mt-8">
        {TAB_DATA.map((tabData) => (
          <TabButton
            key={tabData.id}
            selectTab={() => handleTabChange(tabData.id)}
            active={tab === tabData.id}
          >
            {tabData.title}
          </TabButton>
        ))}
      </div>
      <div className="mt-8">
        {TAB_DATA.find((t) => t.id === tab).content}
      </div>
    </div>
    </section>
  );
}
