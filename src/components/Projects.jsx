import React from 'react'
import Button from './Button'

const ProjectBlock = ({ title, subtitle, bullets, skills, githubLink, liveLink }) => {
    return (
        <div className="bg-white dark:bg-gray-900 p-6 md:p-8 rounded-2xl border border-gray-200 dark:border-gray-800 hover:shadow-lg transition-shadow h-full flex flex-col">
            <div className="mb-4">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{title}</h3>
                {subtitle && <p className="text-sm text-gray-600 dark:text-gray-400 italic mb-3">{subtitle}</p>}
            </div>
            {bullets && (
                <ul className="list-disc list-inside space-y-2 mb-4 text-gray-700 dark:text-gray-300 text-sm flex-1">
                    {bullets.map((bullet, index) => (
                        <li key={index} className="leading-relaxed">{bullet}</li>
                    ))}
                </ul>
            )}
            <div className="flex flex-wrap gap-2 mb-4">
                {skills.map((skill, index) => (
                    <span 
                        key={index}
                        className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-lg text-xs font-medium text-gray-700 dark:text-gray-300"
                    >
                        {skill}
                    </span>
                ))}
            </div>
            {(githubLink || liveLink) && (
                <div className="flex flex-row gap-3">
                    {liveLink && (
                        <Button 
                            bgColor="bg-accent" 
                            hoverBgColor="hover:bg-accent-dark" 
                            href={liveLink} 
                            isExternal={true}
                            width="w-auto"
                            height="h-10"
                            textSize="text-sm"
                            className="flex-1"
                        >
                            View Project
                        </Button>
                    )}
                    {githubLink && (
                        <Button 
                            bgColor="bg-transparent" 
                            borderColor="border-gray-300 dark:border-gray-700" 
                            hoverBgColor="hover:bg-gray-100 dark:hover:bg-gray-800" 
                            textColor="text-gray-900 dark:text-white" 
                            href={githubLink} 
                            isExternal={true}
                            width="w-auto"
                            height="h-10"
                            textSize="text-sm"
                            className="flex-1"
                        >
                            GitHub
                        </Button>
                    )}
                </div>
            )}
        </div>
    )
}

const Projects = () => {
    const projects = [
        {
            title: "CodeStepByStep.com",
            subtitle: "A free web application that helps students at the middle school, high school, and university levels learn fundamental coding concepts.",
            bullets: [
                "Devised and scaled a GPT-powered teaching assistant to offer coding support for 95,000+ students and teachers nationwide.",
                "Programmed a TypeScript throttle with a countdown to prevent spamming and limit submissions for 1,000+ practice problems."
            ],
            skills: ["TypeScript", "MySQL", "JavaEE", "LangChain4j", "ChromaDB"],
            liveLink: "https://www.codestepbystep.com"
        },
        {
            title: "CALEB",
            subtitle: "Consulting Association's LinkedIn and Email Bot — Proprietary outreach automation software for emailing internal memos to members and sourcing clients for consulting projects.",
            bullets: [
                "Authored a full-stack outreach automation platform (React website + Flask backend) used by 4-6 officers to send internal emails to a 40+ student consulting organization and source clients, reducing manual email time by 97.2% (6 hours to 10 minutes).",
                "Implemented Gmail OAuth, secure contact directory, and Celery-based scheduled email queue (RabbitMQ/Redis), enabling reliable, large-scale personalized email campaigns across 3,900+ contacts; helped source 13 high-profile consulting clients."
            ],
            skills: ["React.js", "Flask", "Docker", "Celery", "RabbitMQ/Redis", "PostgreSQL"]
        },
        {
            title: "NFL Team Score Prediction Model",
            subtitle: "A linear regression model that predicts the scores (points per game) of the remaining matchups in the 2025-26 NFL season.",
            bullets: [
                "Architected a Python data pipeline using nflreadpy and Polars to ingest 11 seasons of play-by-play data and compute 9 team-level features (e.g., 20+ yard offensive plays, redzone TD%); preprocessed features with MinMaxScaler and one-hot encodings.",
                "Trained and optimized a scikit-learn model, achieving an RMSE of 1.92 points on scoring averages in the season's last 2 weeks."
            ],
            skills: ["Python", "Polars", "scikit-learn", "Pandas", "NumPy", "Jupyter Lab"],
            githubLink: "https://github.com/hjlcaleb"
        }
    ]

    return (
        <section id="projects" className="py-20 px-6 scroll-mt-20">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-gray-900 dark:text-white">Projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                    {projects.map((proj, index) => (
                        <ProjectBlock key={index} {...proj} />
                    ))}
                </div>
                <div className="flex justify-center">
                    <Button 
                        bgColor="bg-accent" 
                        hoverBgColor="hover:bg-accent-dark"
                        width="w-auto"
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
