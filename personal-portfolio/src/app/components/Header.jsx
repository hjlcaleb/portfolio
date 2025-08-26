import React from 'react'
import Image from 'next/image'
import Typewriter from './Typewriter'
import Button from './Button'

const Header = () => {
  const titles = ["Computer Science Student", "Software Developer", "Researcher"];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-white">
      <div className="flex items-center gap-48">
        <div className="hidden md:flex">
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
              href="https://drive.google.com/file/d/114Dqk8M5d-bN_Ow-PsowCL49Cl3sWWXR/view?usp=sharing"
              isExternal={true}
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
              href="#contact"
            >
              Contact Me
            </Button>
          </div>
          <div className="items-center grid grid-cols-3 gap-2 mt-10">
            <a className="flex flex-col items-center" href="https://www.github.com/hjlcaleb" target="_blank" rel="noopener noreferrer">
                              <Image src="/github.png" alt="github" width={50} height={50} />
                              <h3 className="text-2xl font-black mt-2">Github</h3>
            </a>
            <a className="flex flex-col items-center" href="mailto:chu552@cs.washington.edu" target="_blank" rel="noopener noreferrer">
              <Image src="/mail.svg" alt="mail" width={50} height={50} className="rounded-full bg-teal-900 border-teal-900 shadow-lg" />
              <h3 className="text-2xl font-black mt-2">Email</h3>
            </a>

            <a className="flex flex-col items-center" href="https://www.linkedin.com/in/calebhu" target="_blank" rel="noopener noreferrer">
              <Image src="/linkedin.png" alt="linkedin" width={50} height={50} className="rounded-full border-2 bg-teal-900 border-teal-900 shadow-lg" />
              <h3 className="text-2xl font-black mt-2">LinkedIn</h3>
            </a>
          </div>
          
          
        </div>
      </div>
    </section>
  )
}

export default Header
