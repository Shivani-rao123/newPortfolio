import Image from "next/image";
import { Cover } from "@/components/ui/cover";
import { Skills } from "@/components/Skills"
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";


const HeroSection = () => {
 
    return (
        <div className="w-full overflow-x-hidden min-h-screen grid lg:grid-cols-[1fr_0.6fr_0.4fr] gap-[20px]">
          <div className="max-w-[600px] w-[90%] mx-auto py-[30px]">
            <a href="/">
              <Image src="/images/logo.png" width={120} height={80} className="max-h-[80px] h-full object-contain object-center " alt="logo"/>
            </a>
            <div className="flex flex-col justify-center h-[80%]">
              <span className="text-[#4e69e0] font-[600px]">Its Me</span>
              <h2 className="bg-clip-text text-transparent text-start bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-2xl md:text-4xl lg:text-7xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight">
            Shivani BS, <br /> Full Stack <Cover> Developer</Cover>
          </h2>
          <a href="#" className="text-white border-b border-1 border-[#525252] hover:p-[10px] hover:bg-[#5070ff2f] transition-all ease-out mr-auto py-[10px] font-[600]">
            Hire me &rarr;
          </a>
          <div className="flex flex-row mt-[60px]"></div>
            
            </div>
          </div>
          <div className="w-full h-full flex items-end bg-[#0d0d0e]">
            <Image 
              src="/images/model3rm.png"
              width={800}
              height={1200}
              className="w-full max-h-[90vh] object-contain object-bottom"
              alt="model"
              priority={true}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              quality={100}
              loading="eager"
            />
          </div>
          <div className="w-[90%] mx-auto py-[30px] flex flex-col items-center z-2">
            <a href="#" className="max-w-[130px] w-full h-[40px] flex justify-center items-center border border-1 border-[#333333] text-white font-[600] rounded-[30px] mx-auto pb-[2px]">
              Hire Me
            </a>
            <h2 className="bg-clip-text mt-[100px] text-transparent text-start mr-auto bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-2xl md:text-2xl lg:text-3xl font-sans   relative z-20 font-bold tracking-tight">
            About Me 
          </h2>
          <p className="max-w-xl mx-auto text-sm md:text-lg text-neutral-700 dark:text-neutral-400 text-start mt-[20px]" >
         
     Hey there! I am passionate about creating user-friendly and visually appealing websites. combining front-end design with back-end functionality to bring ideas to life.
          </p>
          <p className="max-w-xl mx-auto text-sm md:text-lg text-neutral-700 dark:text-neutral-400 text-start mt-[20px]" >
          I’m always eager to explore new tools and frameworks that enhance my skills. With every project, 
          I strive to grow as a developer and craft seamless, impactful digital experiences.
          </p>
          <Skills/>
          <ShootingStars className="z-[-1]"/>
          <StarsBackground className="z-[-1]"/>
          
       
          </div>
        </div>
      );
  
}

export default HeroSection
