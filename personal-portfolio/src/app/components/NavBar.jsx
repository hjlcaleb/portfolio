import Image from 'next/image'
import React, {useState} from 'react'
import "tailwindcss";

const NavBar = () => {
    
    const[menuOpen, setMenuOpen] = useState(false);

    const handleNavClick = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        setMenuOpen(false); // Close mobile menu if open
    };
        
    return (
        <nav className="w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between bg-teal-900 text-white">
        {/* Mobile logo */}
        <a href="#home" className="cursor-pointer mr-14 font-bold text-4xl whitespace-nowrap md:hidden" onClick={(e) => { e.preventDefault(); handleNavClick('home'); }}>
            Caleb Hu
        </a>

        {/* Desktop logo */}
        <a href="#home" className="cursor-pointer mr-14 font-bold text-6xl whitespace-nowrap hidden md:flex" onClick={(e) => { e.preventDefault(); handleNavClick('home'); }}>
            Caleb Hu
        </a>

        <ul className="hidden md:flex gap-6 text-sm font-medium ml-auto text-xl">
            <li><a href="#home" onClick={(e) => { e.preventDefault(); handleNavClick('home'); }}>Home</a></li>
            <li><a href="#about" onClick={(e) => { e.preventDefault(); handleNavClick('about'); }}>About</a></li>
            <li><a href="#experience" onClick={(e) => { e.preventDefault(); handleNavClick('experience'); }}>Experience</a></li>
            <li><a href="#projects" onClick={(e) => { e.preventDefault(); handleNavClick('projects'); }}>Projects</a></li>
            <li><a href="#contact" onClick={(e) => { e.preventDefault(); handleNavClick('contact'); }}>Contact</a></li>
        </ul>
        

            {/* Hamburger Button */}
            <button
                className="block md:hidden ml-auto z-50"
                onClick={() => setMenuOpen(prev => !prev)}
                aria-label="Toggle mobile menu"
                >
                <Image 
                    src={menuOpen ? "/xblack.png" : "/navIconWhite.png"} 
                    alt={menuOpen ? "Close menu" : "Open menu"} 
                    width={30} 
                    height={30} 
                    className="cursor-pointer" 
                />
            </button>
            
            {/*------ mobile menu ------ */}
                <ul 
                style={{color: 'white'}}
                className={`bg-gray-300 font-bold text-black fixed top-0 right-0 h-screen w-64 flex flex-col gap-6 py-20 px-10 z-40 transform transition-transform duration-300 ease-in-out ${
            menuOpen ? 'translate-x-0' : 'translate-x-full'
                }`}>

                    <li><a href="#home" onClick={(e) => { e.preventDefault(); handleNavClick('home'); }} style={{color: 'black'}}>Home</a></li>
                    <li><a href="#about" onClick={(e) => { e.preventDefault(); handleNavClick('about'); }} style={{color: 'black'}}>About</a></li>
                    <li><a href="#experience" onClick={(e) => { e.preventDefault(); handleNavClick('experience'); }} style={{color: 'black'}}>Experience</a></li>
                    <li><a href="#projects" onClick={(e) => { e.preventDefault(); handleNavClick('projects'); }} style={{color: 'black'}}>Projects</a></li>
                    <li><a href="#contact" onClick={(e) => { e.preventDefault(); handleNavClick('contact'); }} style={{color: 'black'}}>Contact</a></li>
                </ul>
            
        

        </nav>
    )
    }

    export default NavBar
