import React, {useState} from 'react'

const NavBar = () => {
    
    const[menuOpen, setMenuOpen] = useState(false);

    const handleNavClick = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        setMenuOpen(false);
    };
        
    return (
        <nav className="w-full fixed top-0 z-50 px-6 lg:px-12 py-4 flex items-center justify-between bg-white/80 dark:bg-gray-950/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
        {/* Logo */}
        <a href="#home" className="cursor-pointer font-bold text-2xl md:text-3xl whitespace-nowrap text-gray-900 dark:text-white hover:text-accent dark:hover:text-accent transition-colors" onClick={(e) => { e.preventDefault(); handleNavClick('home'); }}>
            Caleb Hu
        </a>

        {/* Desktop Nav */}
        <ul className="hidden md:flex gap-8 text-sm font-medium ml-auto">
            <li><a href="#home" className="text-gray-700 dark:text-gray-300 hover:text-accent dark:hover:text-accent transition-colors" onClick={(e) => { e.preventDefault(); handleNavClick('home'); }}>Home</a></li>
            <li><a href="#about" className="text-gray-700 dark:text-gray-300 hover:text-accent dark:hover:text-accent transition-colors" onClick={(e) => { e.preventDefault(); handleNavClick('about'); }}>About</a></li>
            <li><a href="#experience" className="text-gray-700 dark:text-gray-300 hover:text-accent dark:hover:text-accent transition-colors" onClick={(e) => { e.preventDefault(); handleNavClick('experience'); }}>Experience</a></li>
            <li><a href="#projects" className="text-gray-700 dark:text-gray-300 hover:text-accent dark:hover:text-accent transition-colors" onClick={(e) => { e.preventDefault(); handleNavClick('projects'); }}>Projects</a></li>
            <li><a href="#leadership" className="text-gray-700 dark:text-gray-300 hover:text-accent dark:hover:text-accent transition-colors" onClick={(e) => { e.preventDefault(); handleNavClick('leadership'); }}>Leadership</a></li>
            <li><a href="#contact" className="text-gray-700 dark:text-gray-300 hover:text-accent dark:hover:text-accent transition-colors" onClick={(e) => { e.preventDefault(); handleNavClick('contact'); }}>Contact</a></li>
        </ul>
        
        {/* Hamburger Button */}
        <button
            className="block md:hidden ml-auto z-50"
            onClick={() => setMenuOpen(prev => !prev)}
            aria-label="Toggle mobile menu"
            >
            <img 
                src={menuOpen ? `${process.env.PUBLIC_URL}/xblack.png` : `${process.env.PUBLIC_URL}/navIcon.png`}
                alt={menuOpen ? "Close menu" : "Open menu"} 
                className="cursor-pointer dark:invert w-[30px] h-[30px]" 
            />
        </button>
        
        {/* Mobile menu */}
        <ul className={`bg-white dark:bg-gray-900 font-medium fixed top-0 right-0 h-screen w-64 flex flex-col gap-6 py-20 px-10 z-40 transform transition-transform duration-300 ease-in-out border-l border-gray-200 dark:border-gray-800 ${
            menuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}>
            <li><a href="#home" className="text-gray-900 dark:text-white hover:text-accent dark:hover:text-accent transition-colors" onClick={(e) => { e.preventDefault(); handleNavClick('home'); }}>Home</a></li>
            <li><a href="#about" className="text-gray-900 dark:text-white hover:text-accent dark:hover:text-accent transition-colors" onClick={(e) => { e.preventDefault(); handleNavClick('about'); }}>About</a></li>
            <li><a href="#experience" className="text-gray-900 dark:text-white hover:text-accent dark:hover:text-accent transition-colors" onClick={(e) => { e.preventDefault(); handleNavClick('experience'); }}>Experience</a></li>
            <li><a href="#projects" className="text-gray-900 dark:text-white hover:text-accent dark:hover:text-accent transition-colors" onClick={(e) => { e.preventDefault(); handleNavClick('projects'); }}>Projects</a></li>
            <li><a href="#leadership" className="text-gray-900 dark:text-white hover:text-accent dark:hover:text-accent transition-colors" onClick={(e) => { e.preventDefault(); handleNavClick('leadership'); }}>Leadership</a></li>
            <li><a href="#contact" className="text-gray-900 dark:text-white hover:text-accent dark:hover:text-accent transition-colors" onClick={(e) => { e.preventDefault(); handleNavClick('contact'); }}>Contact</a></li>
        </ul>

        </nav>
    )
    }

    export default NavBar
