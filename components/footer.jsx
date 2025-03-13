import Image from "next/image";
import logo from '../public/robot_17604821.png';

function Footer() {
  return (
    <div className="flex items-center justify-around bg-blue-950 text-white p-8">
      <ul className="flex items-center gap-[50px]">
        <div>
            <li className="uppercase text-xl">about</li>
            <li className="uppercase text-xl">services</li>
        </div>
        <div>
            <li className="uppercase text-xl">system</li>
            <li className="uppercase text-xl">courses</li>
        </div>
        <div>
            <li className="uppercase text-xl">pathways</li>
            <li className="uppercase text-xl">our plans</li>
        </div>
        <div>
            <li className="uppercase text-xl">language</li>
            <li className="uppercase text-xl">contact us</li>
        </div>
      </ul>
      <div className="flex items-center gap-[10px]">
        <Image
          src={logo}
          alt="this is the home logo"
          width={60}
          height={60}
          className="object-contain rounded-full"
        />
        <p className="text-2xl">Learn With Eve</p>
      </div>
    </div>
  );
}

export default Footer;
