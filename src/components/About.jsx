import React from 'react'

const SkillCategory = ({ title, skills }) => {
    return (
        <div className="mb-6 last:mb-0">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">{title}</h3>
            <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                    <span 
                        key={index}
                        className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-lg text-sm font-medium text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700"
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
            "JavaScript",
            "TypeScript",
            "HTML5",
            "CSS",
            "C",
            "C++"
        ],
        frameworks: [
            "React.js",
            "Node.js/Express",
            "Next.js",
            "Flask",
            "Django",
            "Tailwind CSS",
            "JUnit",
            "Java Swing",
            "scikit-learn"
        ],
        tools: [
            "Unix/Linux",
            "Postman",
            "Docker",
            "Selenium",
            "Supabase",
            "Firebase",
            "Clerk",
            "PostgreSQL",
            "MySQL",
            "Vercel",
            "Figma"
        ],
        learning: [
            "R",
            "PyTorch",
            "TensorFlow",
            "Matplotlib",
            "Angular",
            "AWS EC2",
            "Kubernetes",
            "C#",
            "CI/CD"
        ]
    }

    return (
        <section id="about" className="py-20 px-6 scroll-mt-20">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-gray-900 dark:text-white">About Me</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
                    {/* Photo and Description */}
                    <div className="flex justify-center md:justify-start">
                        <img 
                            src={`${process.env.PUBLIC_URL}/me.png`}
                            alt="Caleb Hu"
                            className="rounded-2xl shadow-lg w-full max-w-md"
                        />
                    </div>

                    <div className="flex flex-col justify-center">
                        <div className="space-y-4 text-gray-700 dark:text-gray-300">
                            <p className="text-base leading-relaxed">
                                I'm a student studying computer science at the University of Washington, passionate about <strong>building innovative, impact-driven solutions</strong>. Growing up with amniotic band syndrome and being fitted for various <strong>prosthetics</strong> from a young age, I developed a deep appreciation for how technology can <strong>empower and transform lives</strong>. 
                            </p>
                            <p className="text-base leading-relaxed">
                                My journey in tech started in high school with game development, which evolved into a deep interest in <strong>full-stack development and machine learning</strong>. Today, I'm focused on creating <strong>scalable web applications</strong> and exploring the intersection of AR/VR with <strong>Human-AI interaction use cases</strong>.
                            </p>
                            <p className="text-base leading-relaxed">
                                Outside of coding, I enjoy playing basketball, hiking in the Pacific Northwest, and going to concerts.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Education Section */}
                <div className="mb-16">
                    <div className="bg-gray-50 dark:bg-gray-900 p-8 rounded-2xl border border-gray-200 dark:border-gray-800">
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Education</h3>
                        <div>
                            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                                <h4 className="text-xl font-semibold text-gray-900 dark:text-white">University of Washington</h4>
                                <span className="text-sm text-gray-600 dark:text-gray-400">Seattle, WA</span>
                            </div>
                            <p className="text-gray-700 dark:text-gray-300 mb-2">Bachelor of Science in Computer Science</p>
                            <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">Concentrations in ML & Data Science | GPA: 3.82/4.00 | Expected Jun 2027</p>
                            <p className="text-gray-600 dark:text-gray-400 text-sm">
                                <strong>Key Coursework:</strong> Machine Learning, Systems Engineering, Data Structures & Parallelism, Algorithms, Hardware/Software Interface
                            </p>
                        </div>
                    </div>
                </div>

                {/* Skills Section */}
                <div>
                    <div className="bg-gray-50 dark:bg-gray-900 p-8 rounded-2xl border border-gray-200 dark:border-gray-800">
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Technical Skills</h3>
                        <SkillCategory title="Languages (in order of proficiency)" skills={skills.languages} />
                        <SkillCategory title="Frameworks" skills={skills.frameworks} />
                        <SkillCategory title="Developer Tools" skills={skills.tools} />
                        <SkillCategory title="Currently Learning" skills={skills.learning} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
