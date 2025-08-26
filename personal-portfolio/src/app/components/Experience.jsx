import React from 'react'
import Image from 'next/image'
import Button from './Button'

const ExperienceBlock = ({ title, company, date, description, skills, icon }) => {
    return (
        <div className="bg-white p-8 rounded-lg shadow-lg mb-8 w-full max-w-4xl border-l-4 border-teal-900 hover:shadow-xl transition-shadow">
            <div className="mb-4">
                <div className="flex justify-between items-center">
                    <h3 className="text-xl font-bold text-teal-900">{title}</h3>
                    <p className="text-gray-600">{date}</p>
                </div>
                <p className="text-.5xl text-gray-700 mt-1">{company}</p>
            </div>
            <p className="text-gray-700 mb-4">{description}</p>
            <div className="flex items-center gap-2 mt-2 w-full">
                <div className="flex flex-wrap gap-2">
                    {skills.map((skill, index) => (
                        <span 
                            key={index}
                            className={`px-3 py-1 rounded-full text-sm font-medium ${
                                skill.category === 'language' ? 'bg-blue-100 text-blue-800' :
                                skill.category === 'framework' ? 'bg-green-100 text-green-800' :
                                skill.category === 'tool' ? 'bg-purple-100 text-purple-800' :
                                skill.category === 'cloud' ? 'bg-orange-100 text-orange-800' :
                                'bg-gray-100 text-gray-800'
                            }`}
                        >
                            {skill.name}
                        </span>
                    ))}
                </div>
                {icon && (
                    <span className="ml-auto">
                        <Image src={icon} alt={`${company} logo`} width={48} height={48} className="rounded-lg" />
                    </span>
                )}
            </div>
        </div>
    )
}

const Experience = () => {
    const experiences = [
        {
            title: "Software Engineer Intern",
            company: "Mastertech.ai",
            date: "July 2025 - September 2025",
            description: "Launched fullstack prompt template feature to retrieve, store, and display vehicle recall data.",
            skills: [
                { name: "TypeScript", category: "language" },
                { name: "Python", category: "language"},
                { name: "Next.js", category: "framework" },
                { name: "Redux", category: "framework"},
                { name: "NHTSA API", category: "tool" },
            ]
        },
        {
            title: "Research Assistant - Computer Vision, AR/VR",
            company: "Makeability Lab, Paul G. Allen School of Computer Science & Engineering",
            date: "June 2025 - present",
            description: "Collaborating Google Research to develop PreviewAR, an image-to-3D tool for e-commerce furniture images.",
            skills: [
                { name: "C#", category: "language" },
                { name: ".NET", category: "framework" },
                { name: "Unity", category: "tool" },
                { name: "Hunyuan 3D-2", category: "tool"}
            ]
        },
        {
            title: "Research Assistant - Natural Language Processing (NLP)",
            company: "Department of Radiation Oncology, University of Washington Medical Center",
            date: "June 2024 - October 2024",
            description: "Applied 95,000+ NCI research abstracts to BERT LLM to analyze funding distribution and granularize topics.",
            skills: [
                { name: "Python", category: "language" },
                { name: "sklearn", category: "tool" },
                { name: "Hugging Face", category: "tool" },
                { name: "pandas", category: "tool" },
                { name: "Matplotlib", category: "tool" }
            ]
        }
    ]

    return (
        <section id="experience" className="min-h-screen py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <h1 className="text-6xl md:text-8xl font-bold mb-12 text-center text-teal-900 mt-20">Experience</h1>
                <div className="flex flex-col items-center">
                    {experiences.map((exp, index) => (
                        <ExperienceBlock key={index} {...exp} />
                    ))}
                    <Button 
                        bgColor="bg-teal-900" 
                        hoverBgColor="hover:bg-teal-700"
                        width="w-full max-w-4xl"
                        height="h-12"
                        className="flex items-center justify-center"
                        href="/Caleb-Hu-Resume.pdf" 
                        download
                    >
                        Download CV
                    </Button>
                </div>
            </div>
        </section>
    )
}

export default Experience
