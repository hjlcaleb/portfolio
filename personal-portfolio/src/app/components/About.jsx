import React from 'react'
import Image from 'next/image'

const SkillCategory = ({ title, skills }) => {
    return (
        <div className="mb-8 last:mb-0">
            <h3 className="text-2xl font-bold text-teal-900 mb-4">{title}</h3>
            <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                    <span 
                        key={index}
                        className="px-4 py-2 bg-white rounded-full text-sm font-medium border border-teal-900 text-teal-900"
                    >
                        {skill}
                    </span>
                ))}
            </div>
        </div>
    )
}

const About = () => {
    const skills = {
        languages: [
            "Java",
            "Python",
            "C",
            "C#",
            "JavaScript",
            "HTML/CSS"
        ],
        frameworks: [
            "React.js",
            "Next.js",
            "Flask",
            "Swing",
            "JUnit",
            "pandas",
            "sklearn",
            "Hugging Face",
            "NumPy",
            "Matplotlib",
            "SQLite",
        ],
        tools: [
            "Git",
            "Docker",
            "AWS Relational Database Service (RDS)",
            "Firebase",
          "Unity Game Engine",
          "Jupyter Notebook"
        ],

        interests: [
            "Accessibility",
            "Human-AI Interaction",
            "AR/VR",
            "Tech-Business Integrations"
        ]
    }

    return (
        <section id="about" className="min-h-screen py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <h1 className="text-6xl md:text-8xl font-bold mb-12 text-center text-teal-900 mt-20">About Me</h1>
                
                <div className="grid grid-cols-1 md:grid-cols-2 max-w-6xl mx-auto px-8">
                    {/* Photo and Description Side by Side */}
                    <div className="flex justify-start">
                        <Image 
                            src="/me.png"
                            alt="Caleb Hu"
                            width={500}
                            height={500}
                            className="rounded-lg shadow-lg"
                        />
                    </div>

                    <div className="prose prose-lg">
                        <div>
                            <p className="text-gray-700 mb-6 text-2xl sm:text-xl sm:mt-12">
                                I'm a student studying computer science at the University of Washington, passionate about <strong>building innovative, impact-driven solutions</strong>. Growing up with amniotic band syndrome and being fitted for various <strong>prosthetics</strong> from a young age, I developed a deep appreciation for how technology can <strong>empower and transform lives</strong>. 
                            </p>
                            <p className="text-gray-700 mb-6 text-2xl sm:text-xl">
                                My journey in tech started in high school with game development, which evolved into a deep interest in <strong>full-stack development and artificial intelligence</strong>. Today, I'm focused on creating <strong>scalable web applications</strong> and exploring the intersection of AR/VR with <strong>Human-AI interaction use cases</strong>.
                            </p>
                            <p className="text-gray-700 text-2xl sm:text-xl">
                                Outside of coding, I enjoy playing basketball, hiking in the Pacific Northwest, experimenting with new recipes, and contributing to pro-bono consulting projects.
                            </p>
                        </div>
                    </div>

                    {/* Skills Section - Full Width */}
                    <div className="md:col-span-2 mt-12">
                        <div className="bg-gray-100 p-8 rounded-lg shadow-lg">
                            <h2 className="text-3xl font-bold text-teal-900 mb-8">Skills & Interests</h2>
                            <SkillCategory title="Languages" skills={skills.languages} />
                            <SkillCategory title="Frameworks & Libraries" skills={skills.frameworks} />
                            <SkillCategory title="Tools & Technologies" skills={skills.tools} />
                            <SkillCategory title="Interests" skills={skills.interests} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
