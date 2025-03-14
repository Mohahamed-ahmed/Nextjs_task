import Image from "next/image";
import logo from '../public/robot_17604821.png';

function Footer() {
  return (
    <footer className="bg-blue-950 text-white p-4 md:p-6 lg:p-8">
      <div className="flex flex-col md:flex-row items-start md:items-center lg:items-center sm:items-center justify-between gap-8 md:gap-4 max-w-7xl mx-auto">
        <div className="w-full md:w-auto order-2 md:order-1">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-6 gap-y-4">
            <div>
              <ul className="space-y-2">
                <li className="uppercase text-base sm:text-lg lg:text-xl">about</li>
                <li className="uppercase text-base sm:text-lg lg:text-xl">services</li>
              </ul>
            </div>
            <div>
              <ul className="space-y-2">
                <li className="uppercase text-base sm:text-lg lg:text-xl">system</li>
                <li className="uppercase text-base sm:text-lg lg:text-xl">courses</li>
              </ul>
            </div>
            <div>
              <ul className="space-y-2">
                <li className="uppercase text-base sm:text-lg lg:text-xl">pathways</li>
                <li className="uppercase text-base sm:text-lg lg:text-xl">our plans</li>
              </ul>
            </div>
            <div>
              <ul className="space-y-2">
                <li className="uppercase text-base sm:text-lg lg:text-xl">language</li>
                <li className="uppercase text-base sm:text-lg lg:text-xl">contact us</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3 md:gap-[10px] order-1 md:order-2">
          <Image
            src={logo}
            alt="this is the home logo"
            width={60}
            height={60}
            className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-[60px] lg:h-[60px] object-contain rounded-full"
          />
          <p className="text-xl sm:text-2xl font-medium">Learn With Eve</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;