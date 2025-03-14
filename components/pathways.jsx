import Image from "next/image";

function Pathways() {
  return (
    <div className="flex flex-col lg:flex-row gap-4 md:gap-[32px] items-center lg:items-start px-4 md:px-8 py-6 md:py-10">
      <div className="flex flex-col gap-[30px] md:gap-[60px] w-full lg:w-[40%] z-10">
        <div className="flex flex-col gap-[16px] md:gap-[32px]">
          <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold text-left uppercase text-white tracking-wider drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]">
            Pathways
          </h1>
          <button className="text-xl sm:text-2xl lg:text-3xl font-bold text-white py-4 px-4 bg-pink-500 w-[50%] rounded-lg">
            Programming
          </button>
        </div>
      </div>
    </div>
  );
}

export default Pathways;