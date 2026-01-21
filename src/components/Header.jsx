import React from 'react'

const Header = () => {
  return (
    <header className="border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 py-3 px-6">
      <div className="max-w-screen-2xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-4">
          <img 
            src={`${process.env.PUBLIC_URL}/headshot.jpg`}
            alt="Caleb Hu" 
            className="rounded-full border-2 border-gray-300 dark:border-gray-700 w-[60px] h-[60px]"
          />
          <div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Caleb Hu</h1>
            <p className="text-sm text-gray-600 dark:text-gray-400">CS @ UW | ML & Data Science | Software Engineer</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <a href="mailto:calebdhu@gmail.com" className="text-sm text-gray-700 dark:text-gray-300 hover:text-accent">calebdhu@gmail.com</a>
          <a href="tel:4257614686" className="text-sm text-gray-700 dark:text-gray-300 hover:text-accent">(425) 761-4686</a>
          <div className="flex gap-3 ml-2">
            <a href="https://www.github.com/hjlcaleb" target="_blank" rel="noopener noreferrer" className="opacity-70 hover:opacity-100">
              <img src={`${process.env.PUBLIC_URL}/github.png`} alt="github" className="dark:invert w-5 h-5" />
            </a>
            <a href="https://www.linkedin.com/in/calebhu" target="_blank" rel="noopener noreferrer" className="opacity-70 hover:opacity-100">
              <img src={`${process.env.PUBLIC_URL}/linkedin.png`} alt="linkedin" className="w-5 h-5" />
            </a>
          </div>
          <a 
            href={`${process.env.PUBLIC_URL}/Caleb-Hu-Resume.pdf`}
            target="_blank"
            className="px-4 py-2 bg-accent hover:bg-accent-dark text-white text-sm rounded-lg transition-colors"
          >
            Resume
          </a>
        </div>
      </div>
    </header>
  )
}

export default Header
