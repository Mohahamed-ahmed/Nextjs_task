import Image from "next/image";
import Link from "next/link";
import logo from '../public/robot_17604821.png';
import language from '../public/globe.svg';
import file from '../public/file.svg';
import profile from '../public/user_8370837.png'

function MainHeader(){
    return(
        <header className="flex items-center justify-around py-[25px] px-[4px] bg-transparent">
            <Link href='/' className="flex items-center gap-[10px] text-xl font-bold text-cyan-500">
                <Image src={logo} alt="this is the home logo" width={40} height={40} className="object-contain rounded-full"/>
                Learn With Eve
            </Link>
            <nav>
                <ul className="flex items-center gap-[20px]">
                    <li>
                        <Link href='#about' className="text-lg text-white">About</Link>
                    </li>
                    <li>
                        <Link href='#services' className="text-lg text-white">Services</Link>
                    </li>
                    <li>
                        <Link href='#systems' className="text-lg text-white">Systems</Link>
                    </li>
                    <li>
                        <Link href='#courses' className="text-lg text-white">Courses</Link>
                    </li>
                    <li>
                        <Link href='#pathways' className="text-lg text-white">Pathways</Link>
                    </li>
                    <li>
                        <Link href='#contact' className="text-lg text-white">Contact</Link>
                    </li>
                </ul>
            </nav>
            <div className="flex items-center gap-[10px]">
                <Link href='#languages' className="flex items-center gap-[10px] text-lg text-white">
                    <div className="bg-cyan-500 rounded-full p-1">   
                        <Image src={language} alt="this is the language logo" width={25} height={25}/>
                    </div>
                    Language
                </Link>
                <Link href='#sign' className="flex items-center gap-[10px] text-lg text-white">
                    <div className="bg-cyan-500 rounded-full p-1">
                        <Image src={profile} alt="this is the profile logo" width={25} height={25}/>
                    </div>
                    Sign up/ login
                </Link>
            </div>
        </header>
    )

}

export default MainHeader;