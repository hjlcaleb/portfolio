import React from 'react'
import Image from 'next/image'
import Button from './Button'

const ExperienceBlock = ({ title, company, location, date, bullets, skills, icon }) => {
    return (
        <div className="bg-white dark:bg-gray-900 p-6 md:p-8 rounded-2xl border border-gray-200 dark:border-gray-800 mb-6 w-full max-w-4xl hover:shadow-lg transition-shadow">
            <div className="mb-4">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                    <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">{title}</h3>
                        <p className="text-base text-gray-700 dark:text-gray-300 mt-1">{company}</p>
                        {location && <p className="text-sm text-gray-600 dark:text-gray-400">{location}</p>}
                    </div>
                    <span className="text-sm text-gray-600 dark:text-gray-400 mt-2 md:mt-0">{date}</span>
                </div>
            </div>
            {bullets && (
                <ul className="list-disc list-inside space-y-2 mb-4 text-gray-700 dark:text-gray-300 text-sm">
                    {bullets.map((bullet, index) => (
                        <li key={index} className="leading-relaxed">{bullet}</li>
                    ))}
                </ul>
            )}
            <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                    <span 
                        key={index}
                        className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-lg text-xs font-medium text-gray-700 dark:text-gray-300"
                    >
                        {skill}
                    </span>
                ))}
            </div>
        </div>
    )
}

const Experience = () => {
    const experiences = [
        {
            title: "Researcher",
            company: "Makeability Lab",
            location: "Seattle, WA",
            date: "Jun 2025 – present",
            bullets: [
                "Engineered PreviewAR, a pipeline using PyTorch, Grounded SAM, and GPT-5 that converts 2D products into scaled 3D models for AR visualization; to be presented at UIST 2026 (ACM Symposium on User Interface Software and Technology).",
                "Developed a modular web scraping system with Selenium that extracts product specs from Amazon/eBay, uses GPT-5 vision models to select optimal product images, and applies ISNet + Stable Diffusion for background removal and image enhancement."
            ],
            skills: ["Python", "PyTorch", "Selenium", "OpenAI GPT-5", "Grounded SAM", "OpenCV", "Hunyuan 3D-2"]
        },
        {
            title: "Software Engineer Intern",
            company: "Mastertech.ai [VC-backed AI auto-repair startup]",
            location: "Kirkland, WA",
            date: "Jul 2025 – Sep 2025",
            bullets: [
                "Built an LLM unit-testing/evaluation system that raised input classification accuracy by 3% by exposing edge-case failures.",
                "Designed and shipped a prompt-template feature (TypeScript/Redux, REST APIs) to retrieve, display, and store National Highway Transportation and Safety Association (NHTSA) recall data, improving diagnostic transparency for 100+ technicians."
            ],
            skills: ["TypeScript", "Redux", "REST APIs", "DynamoDB"]
        }
    ]

    return (
        <section id="experience" className="py-20 px-6 scroll-mt-20 bg-gray-50 dark:bg-gray-900">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-gray-900 dark:text-white">Work Experience</h2>
                <div className="flex flex-col items-center">
                    {experiences.map((exp, index) => (
                        <ExperienceBlock key={index} {...exp} />
                    ))}
                    <Button 
                        bgColor="bg-accent" 
                        hoverBgColor="hover:bg-accent-dark"
                        width="w-full max-w-4xl"
                        height="h-12"
                        className="flex items-center justify-center"
                        href="/Caleb-Hu-Resume.pdf" 
                        isExternal={true}
                    >
                        Download Resume
                    </Button>
                </div>
            </div>
        </section>
    )
}

export default Experience
