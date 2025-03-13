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
        <h1 className="text-white text-center text-6xl mb-[100px]">Our Services</h1>
        <Services></Services>
      </section>
      <section className="py-30" id="systems">
        <h1 className="text-white text-center text-6xl mb-[100px]">Educational Systems</h1>
        <Systems></Systems>
      </section>
      <section className="py-30" id="courses">
        <h1 className="text-white text-center text-6xl mb-[100px]">Courses</h1>
        <Courses></Courses>
      </section>
      <section className="py-50 px-30 mb-50 relative" id="pathways">
        <Image src={Robot} alt="a robot explain things" className="absolute top-0 left-0 object-cover w-full -z-10"></Image>
        <Pathways></Pathways>
      </section>
      <section className="py-50 mt-60" id="contact">
        <h1 className="text-white text-center text-6xl mb-[100px]">Contact Us</h1>
        <ContactUs></ContactUs>
      </section>
    </>
  );
}
