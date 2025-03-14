import Image from "next/image";
import robot from "../public/robot-writing-with-pen-removebg-preview.png";
import TextContainer from "./UI/text-container";

function About() {
  return (
    <main className="flex flex-col lg:flex-row gap-[32px] items-center justify-around px-4 md:px-8 py-6 md:py-10">
      <div className="flex flex-col gap-[30px] md:gap-[60px] w-full lg:w-[40%] order-2 lg:order-1">
        <div className="flex flex-col  gap-[16px] md:gap-[32px]">
          <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold text-center lg:text-left uppercase text-white tracking-wider drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]">
            about us
          </h1>
          <TextContainer>
            At Learn With Eve, we believe that every Learner deserves
            personalized, high-quality education. That’s why we built Eve, a
            smart AI tutor that tailors study plans, offers real-time feedback,
            and guides learners to reach their fullest potential. Whether you’re
            preparing for exams, exploring new subjects, or enhancing
            professional skills, Eve is here to make learning accessible and
            efficient.
          </TextContainer>
        </div>
        <div className="flex flex-col sm:flex-row items-center sm:justify-between gap-8 sm:gap-6 w-full">
          <TextContainer>Join Us</TextContainer>
          <TextContainer>Explore</TextContainer>
        </div>
      </div>
      
      <div className="flex justify-center order-1 lg:order-2 lg:w-[40%] mb-6 lg:mb-0">
        <div className="">
          <div className="relative w-[400px] h-[400px]">
            <Image src={robot} alt="Robot with a Pen" fill className="" />
          </div>
        </div>
      </div>
    </main>
  );
}

export default About;