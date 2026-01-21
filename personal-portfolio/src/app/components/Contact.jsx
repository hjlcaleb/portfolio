import React from 'react'
import Image from 'next/image'

const Contact = () => {
    return (
       <section id="contact" className="py-20 px-6 scroll-mt-20">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-4xl md:text-5xl font-bold mb-12 text-gray-900 dark:text-white">Let's Connect!</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
                    <div className="flex flex-col items-center">
                        <div className="w-20 h-20 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center mb-4">
                            <Image src="/loc.png" alt="location" width={40} height={40} className="dark:invert opacity-70" />
                        </div>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">Location</h3>
                        <p className="text-gray-600 dark:text-gray-400">Seattle, WA</p>
                    </div>

                    <a className="flex flex-col items-center group" href="mailto:calebdhu@gmail.com" target="_blank" rel="noopener noreferrer">
                        <div className="w-20 h-20 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center mb-4 group-hover:bg-accent group-hover:dark:bg-accent transition-colors">
                            <Image src="/mail.svg" alt="email" width={40} height={40} className="dark:invert opacity-70 group-hover:opacity-100 group-hover:invert transition-all" />
                        </div>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">Email</h3>
                        <p className="text-gray-600 dark:text-gray-400 group-hover:text-accent dark:group-hover:text-accent transition-colors">calebdhu@gmail.com</p>
                    </a>

                    <a className="flex flex-col items-center group" href="https://www.linkedin.com/in/calebhu" target="_blank" rel="noopener noreferrer">
                        <div className="w-20 h-20 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center mb-4 group-hover:bg-accent group-hover:dark:bg-accent transition-colors">
                            <Image src="/linkedin.png" alt="linkedin" width={40} height={40} className="opacity-70 group-hover:opacity-100 transition-opacity" />
                        </div>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">LinkedIn</h3>
                        <p className="text-gray-600 dark:text-gray-400 group-hover:text-accent dark:group-hover:text-accent transition-colors">linkedin.com/in/calebhu</p>
                    </a>
                </div>

                <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800">
                    <p className="text-gray-600 dark:text-gray-400 mb-4">Also find me on:</p>
                    <div className="flex justify-center gap-6">
                        <a href="https://github.com/hjlcaleb" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-accent dark:hover:text-accent transition-colors">
                            <Image src="/github.png" alt="github" width={32} height={32} className="dark:invert opacity-70 hover:opacity-100 transition-opacity" />
                        </a>
                        <a href="https://calebhu.vercel.app" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-accent dark:hover:text-accent transition-colors">
                            <Image src="/globe.svg" alt="website" width={32} height={32} className="dark:invert opacity-70 hover:opacity-100 transition-opacity" />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact
