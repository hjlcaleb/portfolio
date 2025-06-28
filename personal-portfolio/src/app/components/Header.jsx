import React from 'react'
import Image from 'next/image'
import Typewriter from './Typewriter'
import Button from './Button'

const Header = () => {
  const titles = ["Computer Science Student", "Software Developer", "Researcher"];

  const onResumeClick = () => {
    // Open resume in new tab
    window.open('https://drive.google.com/file/d/1wb5CGK2xlKyJco1oNshLHaeqppv-39sB/view?usp=sharing', '_blank');
  };

  const onContactClick = () => {
    // Scroll to contact section
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-white">
      <div className="flex items-center gap-48">
        <div>
          <Image  
            src="/headshot.jpg" 
            alt="Caleb Hu headshot" 
            width={400} 
            height={400} 
            className="rounded-full border-2 border-teal-900 shadow-lg ml-10"
          />
        </div>
        <div className="flex flex-col items-center justify-between">
          <h2 className="text-4xl font-bold mb-4">Hi! I'm</h2>
          <h1 className="text-8xl font-bold mb-4 whitespace-nowrap text-teal-900">Caleb Hu</h1>
          <Typewriter words={titles} speed={150} deleteSpeed={50} delay={1000} />
          <div className="flex flex-row gap-4 mt-8">
            <Button 
              width="w-55" 
              height="h-12" 
              textSize="text-lg" 
              bgColor="bg-teal-900" 
              hoverBgColor="hover:bg-teal-700"
              hoverTextColor="hover:text-gray-100"
              onClick={onResumeClick}
            >
              Resume/CV
            </Button>
            <Button 
              width="w-55" 
              height="h-12" 
              textSize="text-lg" 
              textColor="text-teal-900"
              bgColor="bg-white" 
              borderColor="border-teal-900"
              hoverBgColor="hover:bg-teal-700"
              hoverTextColor="hover:text-gray-100"
              onClick={onContactClick}
            >
              Contact Me
            </Button>
          </div>
          
        </div>
      </div>
    </section>
  )
}

export default Header
