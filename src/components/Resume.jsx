import Image from "next/image";
import React from "react";
import { Timeline } from "@/components/ui/timeline";
import { Cover } from "./ui/cover";

export function Resume() {
  const data = [
    {
      title: "Experience",
      content: (
        <div className="flex flex-col gap-[30px]">
          <div>
            <h4 className="text-[#f4f4f4] text-[1.8rem] font[600]">
               <Cover>Full Stack Development Experience</Cover>
            </h4>
            
            <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Experienced in developing and managing websites for college clubs and organizations. 
            </p>
          </div>
          <div>
            <h4 className="text-[#f4f4f4] text-[1.8rem] font[600]">
            <Cover>Open Source Contributions</Cover>
            </h4>
           
            <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Contributed to open-source projects on GitHub, collaborating on code and improving community-driven initiatives.
            </p>
          </div>
        </div>
      ),
    },
    {
      title: "Education",
      content: (
        <div className="flex flex-col gap-[30px]">
          <div>
            <h4 className="text-[#f4f4f4] text-[1.8rem] font[600]">
              <Cover>Excellent PU college kundapura</Cover>
            </h4>
            <span className="text-blue-400 my-10px">2016-2022</span>
            <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
              Secondary Education 
            </p>
          </div>
          <div>
            <h4 className="text-[#f4f4f4] text-[1.8rem] font[600]">
             <Cover> St.Joseph Engineering College Manglore </Cover>
            </h4>
            <span className="text-blue-400 my-10px">2022-2026</span>
            <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
                Software Engineering
            </p>
          </div>
        </div>
      ),
    },
    
  ];
  return (
    <div className="w-full">
      <Timeline data={data} />
    </div>
  );
}
