import Image from "next/image";
import robot from "../public/robot-writing-with-pen-removebg-preview.png";
import TextContainer from "./UI/text-container";

function About() {
  return (
    <div className="flex gap-[32px]  items-center sm:items-start justify-around">
      <div className="flex flex-col gap-[60px] w-[40%]">
        <div className="flex align-center flex-col gap-[32px]">
          <h1 className="text-6xl font-bold text-center sm:text-left uppercase text-white tracking-wider">
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
        <div className="flex align-center justify-between">
          <TextContainer>Join Us</TextContainer>
          <TextContainer>Explore</TextContainer>          
        </div>
      </div>
      <div className="">
        <div className="relative w-[400px] h-[400px]">
          <Image src={robot} alt="Robot with a Pen" fill className="" />
        </div>
      </div>
    </div>
  );
}

export default About;
