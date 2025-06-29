import React from 'react'
import Image from 'next/image'
import Button from './Button'

const ProjectBlock = ({ title, imagePreview, description, skills, githubLink, liveLink }) => {
    return (
        
        <div className="bg-white p-8 rounded-lg shadow-lg mb-8 w-full max-w-150 border-l-4 border-teal-900 hover:shadow-2xl transition-shadow">
            <div className="mb-4">
                <div className="flex justify-center mb-8 w-full">
                    <Image 
                        src={imagePreview} 
                        alt={title} 
                        width={1920} 
                        height={1080}
                        className="w-full h-auto object-cover" 
                    />
                </div>
                <div className="flex justify-between items-center">
                    <h3 className="text-xl font-bold text-teal-900">{title}</h3>
                </div>
            </div>
            <p className="text-gray-700 mb-4">{description}</p>
            <div className="flex flex-row gap-4 items-center mb-4">
                <Button 
                    bgColor="bg-teal-900" 
                    hoverBgColor="hover:bg-teal-700" 
                    href={liveLink} 
                    isExternal={true}
                    className="flex items-center justify-center min-w-[120px]"
                >
                    View Project
                </Button>
                <Button 
                    bgColor="white" 
                    borderColor="border-teal-900" 
                    hoverBgColor="hover:bg-teal-700" 
                    textColor="text-teal-900" 
                    hoverTextColor="hover:text-white" 
                    href={githubLink} 
                    isExternal={true}
                    className="flex items-center justify-center min-w-[120px]"
                >
                    Github
                </Button>
            </div>
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
            
        </div>
         
    )
}

const Projects = () => {
    const projects = [
        {
            title: "Space Invaders",
            imagePreview: "/space-invaders-demo.png",
            description: "Desktop rendition of 1970s Space Invaders-style video game.",
            skills: [
                { name: "Java", category: "language" },
                { name: "Java Swing", category: "framework" },
                
            ],
            githubLink: "https://github.com/hjlcaleb/space-invaders",
            liveLink: "https://nickblendz.com"
        },
        {
            title: "Yoka Tea Website",
            imagePreview: "/yoka-tea-demo.png",
            description: "Full-stack website for a local boba tea shop in Seattle, WA.",
            skills: [
                { name: "JavaScript", category: "language" },
                { name: "HTML", category: "language" },
                { name: "CSS", category: "language" },
                { name: "React.js", category: "framework" },
                { name: "Firebase", category: "cloud" }
                
            ],
            githubLink: "https://github.com/webimpactuw/yoka-tea",
            liveLink: ""
        },
        {
            title: "Nick Blendz Website",
            imagePreview: "/nick-blendz-demo.png",
            description: "Full-stack website for a local barber with 30-40 clients.",
            skills: [
                { name: "TypeScript", category: "language" },
                { name: "Next.js", category: "framework" },
                { name: "Tailwind CSS", category: "tool" },
                { name: "EmailJS", category: "tool" },
                { name: "Amazon Web Services (AWS) RDS", category: "cloud" },
                { name: "Amazon Web Services (AWS) S3", category: "cloud" }
                
            ],
            githubLink: "https://github.com/hjlcaleb/nick-blendz",
            liveLink: "https://nickblendz.com"
        }
    ]
    return (
        <section id="projects" className="min-h-screen flex justify-center transition-smooth bg-gray-50">
            <div className="container mx-auto px-4">
                <h1 className="text-6xl md:text-8xl font-bold mb-12 text-center text-teal-900 mt-40">Projects</h1>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                    {projects.map((proj, index) => (
                        <ProjectBlock key={index} {...proj} />
                    ))}
                </div>
                <div className="flex justify-center mb-20">
                    <Button 
                        bgColor="bg-teal-900" 
                        hoverBgColor="hover:bg-teal-700"
                        width="w-full max-w-md"
                        height="h-12"
                        className="flex items-center justify-center"
                        href="https://github.com/hjlcaleb"
                        isExternal={true}
                    >
                        View My GitHub
                    </Button>
                </div>
            </div>
        </section>
    )
}

export default Projects
