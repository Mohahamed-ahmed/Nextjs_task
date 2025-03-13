import Image from "next/image";
import man from "../public/WhatsApp Image 2025-03-13 at 3.11.03 AM.jpeg";

function Pathways() {
  return (
    <div className="flex gap-[32px]  items-center sm:items-start">
      <div className="flex flex-col gap-[60px] w-[40%] z-50 ">
        <div className="flex flex-col gap-[32px]">
          <h1 className="text-6xl font-bold self-start sm:text-left uppercase text-white tracking-wider drop-shadow-[0_0_10px_rgba(255,255,255,0.8])">
            Pathways
          </h1>
          <button className="text-3xl font-bold text-white py-3 px-4 bg-pink-500 w-[50%] rounded-lg">
            Programming
          </button>
        </div>
      </div>
    </div>
  );
}

export default Pathways;
