import React from "react";
import { FloatingDock } from "@/components/ui/floating-dock";       
import { 
  IconBrandGithub, 
  IconBrandX, 
  IconExchange, 
  IconHome, 
  IconBrandMailgun, 
  IconBrandLinkedin, 
  IconBrandInstagram, 
  IconNewSection,
  IconMail,  // Replace MailIcon with IconMail from @tabler/icons-react
} from "@tabler/icons-react";
import { Code2Icon } from "lucide-react";  // Correct the import here
import Image from "next/image";

export function NavBar() {
  const links = [
    {
      title: "Home",
      icon: (
        <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/",
    },
    {
      title: "Skills",
      icon: (
        <Code2Icon className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#services",
    },
    {
      title: "Projects",
      icon: (
        <IconNewSection className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#projects",
    },
    {
      title: "Contact",
      icon: (
        <IconMail className="h-full w-full text-neutral-500 dark:text-neutral-300" />  // Changed from MailIcon to IconMail
      ),
      href: "#contact",
    },
    {
      title: "Twitter",
      icon: (
        <IconBrandX className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://x.com/ShivaniBS162165?s=08",
    },
    {
      title: "Mail",
      icon: (
        <IconBrandMailgun className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "mailto:22c19.shivanib@sjec.ac.in",  // Fixed mailto link
    },
    {
      title: "GitHub",
      icon: (
        <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://github.com/Shivani-rao123",
    },
    {
      title: "Instagram",
      icon: (
        <IconBrandInstagram className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://www.instagram.com/shivani.santhosh/?next=%2F&hl=en",
    },
    {
      title: "LinkedIn",
      icon: (
        <IconBrandLinkedin className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://www.linkedin.com/in/shivani-b-s-sb-993821226?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
  ];

  return (
    <div className="fixed left-[90%] translate-x-[-90%] md:left-[50%] md:translate-x-[-50%] bottom-[40px] z-[101]">
      <FloatingDock
        // only for demo, remove for production
       
        items={links}
      />
    </div>
  );
}
