'use client';

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import logo from '../public/robot_17604821.png';
import language from '../public/globe.svg';
import profile from '../public/user_8370837.png'

function MainHeader(){
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    return(
        <header className="relative flex flex-wrap items-center justify-between py-[25px] px-4 md:px-6 lg:justify-around bg-transparent">
            <Link href='/' className="flex items-center gap-[10px] text-xl font-bold text-cyan-500">
                <Image src={logo} alt="this is the home logo" width={40} height={40} className="object-contain rounded-full"/>
                <span className="hidden sm:inline">Learn With Eve</span>
            </Link>
            
            <button 
                className="block lg:hidden text-white p-2" 
                onClick={toggleMobileMenu}
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    {mobileMenuOpen 
                        ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    }
                </svg>
            </button>
            
            <nav className="hidden lg:block">
                <ul className="flex items-center gap-[20px]">
                    <li>
                        <Link href='#about' className="text-lg text-white hover:text-cyan-500 transition-colors">About</Link>
                    </li>
                    <li>
                        <Link href='#services' className="text-lg text-white hover:text-cyan-500 transition-colors">Services</Link>
                    </li>
                    <li>
                        <Link href='#systems' className="text-lg text-white hover:text-cyan-500 transition-colors">Systems</Link>
                    </li>
                    <li>
                        <Link href='#courses' className="text-lg text-white hover:text-cyan-500 transition-colors">Courses</Link>
                    </li>
                    <li>
                        <Link href='#pathways' className="text-lg text-white hover:text-cyan-500 transition-colors">Pathways</Link>
                    </li>
                    <li>
                        <Link href='#contact' className="text-lg text-white hover:text-cyan-500 transition-colors">Contact</Link>
                    </li>
                </ul>
            </nav>
            
            <div className="hidden lg:flex items-center gap-[10px]">
                <Link href='#languages' className="flex items-center gap-[10px] text-lg text-white hover:text-cyan-500 transition-colors">
                    <div className="bg-cyan-500 rounded-full p-1">   
                        <Image src={language} alt="this is the language logo" width={25} height={25}/>
                    </div>
                    <span>Language</span>
                </Link>
                <Link href='#sign' className="flex items-center gap-[10px] text-lg text-white hover:text-cyan-500 transition-colors">
                    <div className="bg-cyan-500 rounded-full p-1">
                        <Image src={profile} alt="this is the profile logo" width={25} height={25}/>
                    </div>
                    <span>Sign up/ login</span>
                </Link>
            </div>
            
            {mobileMenuOpen && (
                <div className="absolute top-full left-0 right-0 bg-gray-900/30 z-50 p-4 lg:hidden md:w-full md:right-auto w-full">
                    <nav className="mb-4">
                        <ul className="flex flex-col space-y-3">
                            <li>
                                <Link href='#about' className="text-lg text-white block py-1 hover:text-cyan-500 transition-colors" onClick={toggleMobileMenu}>About</Link>
                            </li>
                            <li>
                                <Link href='#services' className="text-lg text-white block py-1 hover:text-cyan-500 transition-colors" onClick={toggleMobileMenu}>Services</Link>
                            </li>
                            <li>
                                <Link href='#systems' className="text-lg text-white block py-1 hover:text-cyan-500 transition-colors" onClick={toggleMobileMenu}>Systems</Link>
                            </li>
                            <li>
                                <Link href='#courses' className="text-lg text-white block py-1 hover:text-cyan-500 transition-colors" onClick={toggleMobileMenu}>Courses</Link>
                            </li>
                            <li>
                                <Link href='#pathways' className="text-lg text-white block py-1 hover:text-cyan-500 transition-colors" onClick={toggleMobileMenu}>Pathways</Link>
                            </li>
                            <li>
                                <Link href='#contact' className="text-lg text-white block py-1 hover:text-cyan-500 transition-colors" onClick={toggleMobileMenu}>Contact</Link>
                            </li>
                        </ul>
                    </nav>
                    <div className="flex flex-col space-y-3">
                        <Link href='#languages' className="flex items-center gap-[10px] text-lg text-white hover:text-cyan-500 transition-colors" onClick={toggleMobileMenu}>
                            <div className="bg-cyan-500 rounded-full p-1">   
                                <Image src={language} alt="this is the language logo" width={25} height={25}/>
                            </div>
                            Language
                        </Link>
                        <Link href='#sign' className="flex items-center gap-[10px] text-lg text-white hover:text-cyan-500 transition-colors" onClick={toggleMobileMenu}>
                            <div className="bg-cyan-500 rounded-full p-1">
                                <Image src={profile} alt="this is the profile logo" width={25} height={25}/>
                            </div>
                            Sign up/ login
                        </Link>
                    </div>
                </div>
            )}
        </header>
    );
}

export default MainHeader;