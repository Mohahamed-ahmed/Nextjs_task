import robot from "../public/robot-with-tablet.jpg";
import CircleImage from "./UI/image";
import TextContainer from "./UI/text-container";

function Hero() {
  return (
    <main className="flex flex-col lg:flex-row gap-[32px] items-center justify-around px-4 md:px-8 py-6 md:py-10">
      <div className="flex flex-col gap-[30px] md:gap-[60px] w-full lg:w-[40%] order-2 lg:order-1">
        <div className="flex flex-col  gap-[16px] md:gap-[32px]">
          <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold text-center lg:text-left uppercase text-white tracking-wider drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]">
            learn with ai by eve
          </h1>
          <TextContainer>
            Eve is your personalized, Ai-driven study companion
          </TextContainer>
        </div>
        <div className="flex flex-col sm:flex-row items-center sm:justify-between gap-8 sm:gap-6 w-full">
          <TextContainer>More Info</TextContainer>
          <TextContainer>Explore</TextContainer>
        </div>
      </div>
      
      <div className="flex justify-center order-1 lg:order-2 lg:w-[40%] mb-6 lg:mb-0">
        <CircleImage
          src={robot}
          alt="Robot with a tablet"
          width={300}
          height={300}
          className="w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] md:w-[350px] md:h-[350px] lg:w-[400px] lg:h-[400px]"
        />
      </div>
    </main>
  );
}

export default Hero;