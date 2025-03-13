import Image from "next/image";
import robot from "../public/robot-with-tablet.jpg";
import CircleImage from "./UI/image";
import TextContainer from "./UI/text-container";

function Hero() {
  return (
    <main className="flex gap-[32px]  items-center sm:items-start justify-around">
      <div className="flex flex-col gap-[60px] w-[40%]">
        <div className="flex align-center flex-col gap-[32px]">
          <h1 className="text-6xl font-bold text-center sm:text-left uppercase text-white tracking-wider">
            learn with ai by eve
          </h1>
          <TextContainer>
            Eve is your personalized, Ai-driven study companion
          </TextContainer>
        </div>
        <div className="flex align-center justify-between">
          <TextContainer>More Info</TextContainer>
          <TextContainer>Explore</TextContainer>
        </div>
      </div>
      <CircleImage
        src={robot}
        alt="Robot with a tablet"
        width={400}
        height={400}
      />
    </main>
  );
}

export default Hero;
