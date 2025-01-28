import { cn } from "@/lib/utils";
import {
    Icon12Hours,
  IconAdjustmentsBolt,
  IconCloud,
  IconCurrencyDollar,
  IconEaseInOut,
  IconHeart,
  IconHelp,
  IconRouteAltLeft,
  IconTerminal2,
} from "@tabler/icons-react";
import { Cover } from "./ui/cover";

export function Services() {
  const features = [
    {
      title: "Front-End",
      description:
        "Experienced in building responsive interfaces using React, Next.js, TailwindCSS, and JavaScript with a focus on modern design and user experience",

      icon: <IconTerminal2 />,
    },
    {
      title: "Back-end",
      description:
        "Skilled in sql and also express js",
      icon: <IconAdjustmentsBolt />,
    },
    {
      title: "Graphic Design",
      description:
        "designed lot of user friendly websites using figma as well as react",
      icon: <IconEaseInOut />,
    },
    {
      title: "Dev ops",
      description: "enthusiast in learning dev ops",
      icon: <IconCloud />,
    },
    {
      title: "Multi-talented",
      description: "other than technical skills I am talented in singing and also have a creativity mindset",
      icon: <IconRouteAltLeft />,
    },
    {
      title: "24/7 hardworking",
      description:
        "I believe in giving 100% to whatever the work I am doing",
      icon: <Icon12Hours/>,
    },
    {
      title: "Block chain",
      description:
        "I have also developed interest in blockchain technology",
      icon: <IconCurrencyDollar />,
    },
    {
      title: "And everything else",
      description: "I thrive on exploring new technologies where every discovery fuels my passion for innovation and growth ",
      icon: <IconHeart />,
    },
  ];
  return (
    <div className="mt-[150px flex flex-col] " id="services">
    <div className="px-8 flex flex-col justify-center items-center">
    <h2 className="bg-clip-text  text-white  text-transparent text-start bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-2xl md:text-4xl lg:text-5xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight">
           <Cover> Skills </Cover>
          </h2>
    </div>
    (<div
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  relative z-10 py-10 max-w-7xl mx-auto">
      {features.map((feature, index) => (
        <Feature key={feature.title} {...feature} index={index} />
      ))}
    </div>)
    </div>
  );
}

const Feature = ({
  title,
  description,
  icon,
  index
}) => {
  return (
    (<div
      className={cn(
        "flex flex-col lg:border-r  py-10 relative group/feature dark:border-neutral-800",
        (index === 0 || index === 4) && "lg:border-l dark:border-neutral-800",
        index < 4 && "lg:border-b dark:border-neutral-800"
      )}>
      {index < 4 && (
        <div
          className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div
          className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      <div
        className="mb-4 relative z-10 px-10 text-neutral-600 dark:text-neutral-400">
        {icon}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div
          className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-blue-500 transition-all duration-200 origin-center" />
        <span
          className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100">
          {title}
        </span>
      </div>
      <p
        className="text-sm text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-10">
        {description}
      </p>
    </div>)
  );
};
