"use client";
import Image from "next/image";

import { Carousel, Card } from "@/components/ui/apple-cards-carousel";

export function Projects() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="w-full h-full py-20" id="projects">
      <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
        Recent projects
      </h2>
      <Carousel items={cards} />
    </div>
  );
}

const DummyContent = () => {
  return (
    <>
      {[...new Array(1).fill(1)].map((_, index) => {
        return (
          <div
            key={"dummy-content" + index}
            className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <span className="font-bold text-neutral-700 dark:text-neutral-200">
                Placement Website
              </span>
              &nbsp;I have developed a comprehensive placement website designed to streamline the recruitment process by providing
              recruiters with easy access to detailed student profiles in advance. This platform serves as a centralized hub where all
              relevant student information, including academic records, skills, and achievements, is readily available to hiring
              professionals, ensuring a more efficient and informed hiring process. Additionally, the website features a dedicated
              mentor page that allows mentors to track students&apos; progress, provide guidance, and assess their readiness for placements.
              By integrating both recruiter and mentor functionalities, the platform enhances transparency, simplifies candidate evaluation,
              and fosters better career support for students.
            </p>
            <Image
              src="/images/Screenshot (410).png"
              alt="Macbook mockup from Aceternity UI"
              height={500}
              width={500}
              className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain" />
          </div>
        );
      })}
    </>
  );
};

const DummyContent1 = () => {
  return (
    <>
      {[...new Array(1).fill(1)].map((_, index) => {
        return (
          <div
            key={"dummy-content" + index}
            className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <span className="font-bold text-neutral-700 dark:text-neutral-200">
                Flappy bird game
              </span>
              &nbsp;I have developed a simple yet engaging Flappy Bird game using Java and JavaScript, combining the power of both languages to
              create a smooth and interactive gaming experience. The game features a classic side-scrolling mechanism where players
              navigate a bird through a series of obstacles by tapping or clicking to control its flight. With an intuitive user interface
              and seamless gameplay mechanics, the project showcases my skills in game development, logic implementation, and UI design.
              This project not only enhances my understanding of JavaScript for frontend interactions but also demonstrates my proficiency
              in Java for handling game logic and performance optimization.
            </p>
            <Image
              src="/images/Screenshot (491).png"
              alt="Macbook mockup from Aceternity UI"
              height={500}
              width={500}
              className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain" />
          </div>
        );
      })}
    </>
  );
};

const DummyContent2 = () => {
  return (
    <>
      {[...new Array(1).fill(1)].map((_, index) => {
        return (
          <div
            key={"dummy-content" + index}
            className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <span className="font-bold text-neutral-700 dark:text-neutral-200">
                Weather app
              </span>
              &nbsp;I have developed a weather application that leverages a powerful Weather API to fetch real-time weather data.
              By simply entering a location, users can instantly retrieve essential weather details such as temperature, humidity,
              and atmospheric conditions. The API integration ensures accurate and up-to-date information, making the app a reliable tool
              for weather monitoring. This project showcases my ability to work with APIs, process dynamic data, and build an intuitive
              user experience for seamless weather tracking.
            </p>
            <Image
              src="/images/Screenshot (42).png"
              alt="Macbook mockup from Aceternity UI"
              height={500}
              width={500}
              className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain" />
          </div>
        );
      })}
    </>
  );
};

const DummyContent3 = () => {
  return (
    <>
      {[...new Array(1).fill(1)].map((_, index) => {
        return (
          <div
            key={"dummy-content" + index}
            className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <span className="font-bold text-neutral-700 dark:text-neutral-200">
                Docusphere
              </span>
              &nbsp;I have developed a project named DocuSphere, a file management system built using React and Firebase. This platform
              allows users to log in and efficiently manage their files and folders, offering functionalities such as adding, deleting,
              and moving them. Additionally, users can edit the contents of a file, save changes, and download files for offline access.
              With Firebase providing secure authentication and real-time database capabilities, DocuSphere ensures seamless and efficient
              file organization.
            </p>
            <Image
              src="/images/ContentDoc.png"
              alt="Macbook mockup from Aceternity UI"
              height={500}
              width={500}
              className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain" />
          </div>
        );
      })}
    </>
  );
};

const DummyContent4 = () => {
  return (
    <>
      {[...new Array(1).fill(1)].map((_, index) => {
        return (
          <div
            key={"dummy-content" + index}
            className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <span className="font-bold text-neutral-700 dark:text-neutral-200">
                Festival Calendar and Exploration Hub
              </span>
              &nbsp;I have developed a website called Festival Calendar and Exploration Hub, designed to provide a comprehensive
              cultural festival calendar featuring traditional celebrations from around the world. Users can explore festivals by
              region, culture, or month, learning about their significance through integrated multimedia such as images and videos.
              The website also includes a reminder feature for favorite festivals, utilizing the Google Calendar API for seamless
              notifications. Built with Flask for backend processing and data management, along with a structured database to store
              festival information, this platform serves as an engaging and informative cultural exploration tool.
            </p>
            <Image
              src="/images/festival.png"
              alt="Macbook mockup from Aceternity UI"
              height={500}
              width={500}
              className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain" />
          </div>
        );
      })}
    </>
  );
};

const data = [
  {
    category: "Project 1",
    title: "Placement website",
    src: "/images/Screenshot (410).png",
    src1: "/images/ContentDoc.png",
    src2: "/images/FileContent.png",
    content: <DummyContent />,
  },
  {
    category: "Project 2",
    title: "Flappy bird game",
    src: "/images/Screenshot (424).png",
    content: <DummyContent1 />,
  },
  {
    category: "Project 3",
    title: "Weather app",
    src: "/images/Screenshot (36).png",
    content: <DummyContent2 />,
  },
  {
    category: "Project 4",
    title: "Docusphere",
    src: "/images/Docusphere.png",
    content: <DummyContent3 />,
  },
  {
    category: "Project 5",
    title: "Festival Calendar",
    src: "/images/festival1.jpg",
    content: <DummyContent4 />,
  },
];
