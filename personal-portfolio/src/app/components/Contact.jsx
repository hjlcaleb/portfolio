import React from 'react'
import Image from 'next/image'

const Contact = () => {
    return (
       
       <section id="contact" className="min-h-screen flex items-center justify-center bg-white transition-smooth">
            <div className="flex flex-col items-center">
                
            <h1 className="text-8xl font-bold mb-4 whitespace-nowrap text-teal-900 hidden md:flex">Let's Connect!</h1>
                {/*----- normal view */}
                <div className="hidden md:flex">
                
                    <div className="flex flex-row gap-48 mt-20">
                        <a className="flex flex-col items-center">
                            <Image src="/loc.png" alt="loc" width={200} height={200} className="rounded-full border-2 bg-teal-900 border-teal-900 shadow-lg" />
                            <h3 className="text-2xl font-black mt-8">Seattle, WA</h3>
                        </a>

                        <a className="flex flex-col items-center" href="mailto:chu552@cs.washington.edu" target="_blank" rel="noopener noreferrer">
                            <Image src="/mail.svg" alt="mail" width={200} height={200} className="rounded-full border-2 bg-teal-900 border-teal-900 shadow-lg" />
                            <h3 className="text-2xl font-black mt-8">chu552@cs.washington.edu</h3>
                        </a>

                        <a className="flex flex-col items-center" href="https://www.linkedin.com/in/calebhu" target="_blank" rel="noopener noreferrer">
                            <Image src="/linkedin.png" alt="linkedin" width={200} height={200} className="rounded-full border-2 bg-teal-900 border-teal-900 shadow-lg" />
                            <h3 className="text-2xl font-black mt-8">LinkedIn</h3>
                        </a>
                    </div>
                </div>

                {/*----- mobile view -----*/}
                <div className="md:hidden lg:hidden">
                    <h1 className="text-6xl font-bold mb-4 text-center text-teal-900 mt-25">Let's Connect!</h1>
                    <div className="flex flex-col gap-12 items-center mt-20 mb-20">
                    <a className="flex flex-col items-center">
                            <Image src="/loc.png" alt="loc" width={100} height={100} className="rounded-full border-2 bg-teal-900 border-teal-900 shadow-lg" />
                            <h3 className="text-2xl font-black mt-8">Seattle, WA</h3>
                        </a>

                        <a className="flex flex-col items-center" href="mailto:chu552@cs.washington.edu" target="_blank" rel="noopener noreferrer">
                            <Image src="/mail.svg" alt="mail" width={100} height={100} className="rounded-full border-2 bg-teal-900 border-teal-900 shadow-lg" />
                            <h3 className="text-2xl font-black mt-8">chu552@cs.washington.edu</h3>
                        </a>

                        <a className="flex flex-col items-center" href="https://www.linkedin.com/in/calebhu" target="_blank" rel="noopener noreferrer">
                            <Image src="/linkedin.png" alt="linkedin" width={100} height={100} className="rounded-full border-2 bg-teal-900 border-teal-900 shadow-lg" />
                            <h3 className="text-2xl font-black mt-8">LinkedIn</h3>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact
