import Image from 'next/image'
import React, {useState} from 'react'
import "tailwindcss";

const Footer = () => {
    
    const[menuOpen, setMenuOpen] = useState(false);

    const handleNavClick = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        setMenuOpen(false); // Close mobile menu if open
    };
        
    return (
        <footer className="sticky w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-center bg-teal-900 text-white">
            <h3 className="text-center w-full">© 2025 Caleb Hu. All Rights Reserved.</h3>
        </footer>
    )
    }

    export default Footer
