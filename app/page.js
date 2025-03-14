import Image from "next/image";
import Hero from "@/components/hero";
import About from "@/components/about";
import Services from "@/components/services";
import Systems from "@/components/systems";
import Courses from "@/components/courses";
import ContactUs from "@/components/contact";
import Pathways from "@/components/pathways";
import Robot from '../public/6767a9e706432a9005839e48_Scholarly.jpeg';

export default function Home() {
  return (
    <>
      <section className="py-30">
        <Hero></Hero>
      </section>
      
      <section className="py-30" id="about">
        <About></About>
      </section>
      
      <section className="py-30" id="services">
        <h1 className="text-white text-center text-3xl md:text-4xl lg:text-6xl mb-6 md:mb-12 lg:mb-16 drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]">Our Services</h1>
        <Services></Services>
      </section>
      
      <section className="py-30" id="systems">
        <h1 className="text-white text-center text-3xl md:text-4xl lg:text-6xl mb-6 md:mb-12 lg:mb-16 drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]">Educational Systems</h1>
        <Systems></Systems>
      </section>
      
      <section className="py-30" id="courses">
        <h1 className="text-white text-center text-3xl md:text-4xl lg:text-6xl mb-6 md:mb-12 lg:mb-16 drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]">Courses</h1>
        <Courses></Courses>
      </section>
      
      <div className="h-12 md:h-20 lg:h-32"></div>
      
      <section className="py-30 md:py-16 lg:py-24 px-4 md:px-8 relative min-h-[400px] md:min-h-[500px] lg:min-h-[600px]" id="pathways">
        <div className="absolute top-0 left-0 right-0 bottom-0 -z-10 overflow-hidden">
          <Image 
            src={Robot} 
            alt="a robot explain things" 
            className="object-cover w-full h-full"
            priority
            fill
          />
        </div>
        <Pathways></Pathways>
      </section>

      <div className="h-12 md:h-20 lg:h-32"></div>
      
      <section className="py-30" id="contact">
        <h1 className="text-white text-center text-3xl md:text-4xl lg:text-6xl mb-6 md:mb-12 lg:mb-16 drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]">Contact Us</h1>
        <ContactUs></ContactUs>
      </section>
    </>
  );
}