import React from 'react'

const MainContent = () => {
    return (
        <main className="max-w-screen-2xl mx-auto px-6 py-6 grid grid-cols-3 gap-6 h-[calc(100vh-120px)]">
            {/* Left Column - About & Education */}
            <div className="space-y-4">
                <section className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-4">
                    <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-3 border-b border-gray-200 dark:border-gray-800 pb-2">About Me</h2>
                    <div className="text-xs text-gray-700 dark:text-gray-300 space-y-2 leading-relaxed">
                        <p>I'm a student studying computer science at the University of Washington, passionate about <strong>building innovative, impact-driven solutions</strong>.</p>
                        <p>Growing up with amniotic band syndrome and being fitted for various <strong>prosthetics</strong> from a young age, I developed a deep appreciation for how technology can <strong>empower and transform lives</strong>.</p>
                        <p>My journey in tech started in high school with game development, which evolved into a deep interest in <strong>full-stack development and artificial intelligence</strong>.</p>
                    </div>
                </section>

                <section className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-4">
                    <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-3 border-b border-gray-200 dark:border-gray-800 pb-2">Education</h2>
                    <div className="text-xs">
                        <h3 className="font-bold text-gray-900 dark:text-white">University of Washington</h3>
                        <p className="text-gray-600 dark:text-gray-400 mt-1">B.S. Computer Science | ML & Data Science</p>
                        <p className="text-gray-600 dark:text-gray-400">GPA: 3.82/4.00 | Expected Jun 2027</p>
                        <p className="text-gray-700 dark:text-gray-300 mt-2"><strong>Coursework:</strong> Machine Learning, Systems Engineering, Data Structures & Parallelism, Algorithms, Hardware/Software Interface</p>
                    </div>
                </section>

                <section className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-4">
                    <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-3 border-b border-gray-200 dark:border-gray-800 pb-2">Technical Skills</h2>
                    <div className="space-y-2 text-xs">
                        <div>
                            <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Languages</h3>
                            <p className="text-gray-700 dark:text-gray-300">Java, Python, JavaScript, TypeScript, HTML5, CSS, C, C++</p>
                        </div>
                        <div>
                            <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Frameworks</h3>
                            <p className="text-gray-700 dark:text-gray-300">React.js, Node.js/Express, Next.js, Flask, Django, Tailwind CSS, JUnit, scikit-learn</p>
                        </div>
                        <div>
                            <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Tools</h3>
                            <p className="text-gray-700 dark:text-gray-300">Unix/Linux, Docker, Selenium, Supabase, Firebase, PostgreSQL, MySQL, Vercel, Figma</p>
                        </div>
                    </div>
                </section>
            </div>

            {/* Middle Column - Experience & Leadership */}
            <div className="space-y-4 overflow-y-auto">
                <section className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-4">
                    <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-3 border-b border-gray-200 dark:border-gray-800 pb-2">Work Experience</h2>
                    <div className="space-y-3">
                        <div>
                            <div className="flex justify-between items-start mb-1">
                                <div>
                                    <h3 className="text-sm font-bold text-gray-900 dark:text-white">Researcher</h3>
                                    <p className="text-xs text-gray-700 dark:text-gray-300">Makeability Lab</p>
                                </div>
                                <span className="text-xs text-gray-600 dark:text-gray-400">Jun 2025 – present</span>
                            </div>
                            <ul className="list-disc list-inside text-xs text-gray-700 dark:text-gray-300 space-y-1 leading-tight">
                                <li>Engineered PreviewAR using PyTorch, Grounded SAM, and GPT-5 that converts 2D products into scaled 3D models for AR; to be presented at UIST 2026.</li>
                                <li>Developed modular web scraping system with Selenium extracting product specs, using GPT-5 vision models and Stable Diffusion.</li>
                            </ul>
                            <div className="flex flex-wrap gap-1 mt-2">
                                {["Python", "PyTorch", "Selenium", "GPT-5"].map(skill => (
                                    <span key={skill} className="px-2 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs text-gray-700 dark:text-gray-300">{skill}</span>
                                ))}
                            </div>
                        </div>

                        <div>
                            <div className="flex justify-between items-start mb-1">
                                <div>
                                    <h3 className="text-sm font-bold text-gray-900 dark:text-white">Software Engineer Intern</h3>
                                    <p className="text-xs text-gray-700 dark:text-gray-300">Mastertech.ai</p>
                                </div>
                                <span className="text-xs text-gray-600 dark:text-gray-400">Jul 2025 – Sep 2025</span>
                            </div>
                            <ul className="list-disc list-inside text-xs text-gray-700 dark:text-gray-300 space-y-1 leading-tight">
                                <li>Built LLM unit-testing system that raised input classification accuracy by 3% by exposing edge-case failures.</li>
                                <li>Designed and shipped prompt-template feature to retrieve, display, and store NHTSA recall data for 100+ technicians.</li>
                            </ul>
                            <div className="flex flex-wrap gap-1 mt-2">
                                {["TypeScript", "Redux", "REST APIs", "DynamoDB"].map(skill => (
                                    <span key={skill} className="px-2 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs text-gray-700 dark:text-gray-300">{skill}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                <section className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-4">
                    <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-3 border-b border-gray-200 dark:border-gray-800 pb-2">Leadership</h2>
                    <div className="space-y-3">
                        <div>
                            <div className="flex justify-between items-start mb-1">
                                <div>
                                    <h3 className="text-sm font-bold text-gray-900 dark:text-white">Undergraduate Teaching Assistant</h3>
                                    <p className="text-xs text-gray-700 dark:text-gray-300">Paul G. Allen School of CSE</p>
                                </div>
                                <span className="text-xs text-gray-600 dark:text-gray-400">Jan 2026 – present</span>
                            </div>
                            <ul className="list-disc list-inside text-xs text-gray-700 dark:text-gray-300 leading-tight">
                                <li>Supported 300+ students in introductory Java course series by leading weekly labs and teaching core programming concepts.</li>
                            </ul>
                        </div>

                        <div>
                            <div className="flex justify-between items-start mb-1">
                                <div>
                                    <h3 className="text-sm font-bold text-gray-900 dark:text-white">Technical Director; Senior Consulting Analyst</h3>
                                    <p className="text-xs text-gray-700 dark:text-gray-300">UWCA</p>
                                </div>
                                <span className="text-xs text-gray-600 dark:text-gray-400">Mar 2025 – present</span>
                            </div>
                            <ul className="list-disc list-inside text-xs text-gray-700 dark:text-gray-300 space-y-1 leading-tight">
                                <li>Built pipeline that automated internal communication and client sourcing for 10-member exec team.</li>
                                <li>Redesigned UWCA website with SEO and UX principles generating 176% increase in unique visits within 30 days.</li>
                            </ul>
                        </div>
                    </div>
                </section>
            </div>

            {/* Right Column - Projects */}
            <div className="space-y-4 overflow-y-auto">
                <section className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-4">
                    <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-3 border-b border-gray-200 dark:border-gray-800 pb-2">Projects</h2>
                    <div className="space-y-3">
                        <div>
                            <h3 className="text-sm font-bold text-gray-900 dark:text-white mb-1">CodeStepByStep.com</h3>
                            <p className="text-xs italic text-gray-600 dark:text-gray-400 mb-1">Free web app helping students learn coding concepts</p>
                            <ul className="list-disc list-inside text-xs text-gray-700 dark:text-gray-300 space-y-1 leading-tight">
                                <li>Devised GPT-powered teaching assistant offering coding support for 95,000+ students and teachers nationwide.</li>
                                <li>Programmed TypeScript throttle with countdown to prevent spamming and limit submissions for 1,000+ practice problems.</li>
                            </ul>
                            <div className="flex flex-wrap gap-1 mt-2">
                                {["TypeScript", "MySQL", "JavaEE", "LangChain4j"].map(skill => (
                                    <span key={skill} className="px-2 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs text-gray-700 dark:text-gray-300">{skill}</span>
                                ))}
                            </div>
                        </div>

                        <div>
                            <h3 className="text-sm font-bold text-gray-900 dark:text-white mb-1">CALEB</h3>
                            <p className="text-xs italic text-gray-600 dark:text-gray-400 mb-1">Proprietary outreach automation software for consulting organization</p>
                            <ul className="list-disc list-inside text-xs text-gray-700 dark:text-gray-300 space-y-1 leading-tight">
                                <li>Authored full-stack platform (React + Flask) used by 4-6 officers, reducing manual email time by 97.2% (6 hours to 10 minutes).</li>
                                <li>Implemented Gmail OAuth, contact directory, and Celery-based email queue enabling campaigns across 3,900+ contacts; helped source 13 clients.</li>
                            </ul>
                            <div className="flex flex-wrap gap-1 mt-2">
                                {["React.js", "Flask", "Docker", "Celery", "PostgreSQL"].map(skill => (
                                    <span key={skill} className="px-2 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs text-gray-700 dark:text-gray-300">{skill}</span>
                                ))}
                            </div>
                        </div>

                        <div>
                            <h3 className="text-sm font-bold text-gray-900 dark:text-white mb-1">NFL Team Score Prediction Model</h3>
                            <p className="text-xs italic text-gray-600 dark:text-gray-400 mb-1">Linear regression model predicting NFL game scores</p>
                            <ul className="list-disc list-inside text-xs text-gray-700 dark:text-gray-300 space-y-1 leading-tight">
                                <li>Architected Python pipeline using nflreadpy and Polars to ingest 11 seasons of data and compute 9 team-level features.</li>
                                <li>Trained and optimized scikit-learn model, achieving RMSE of 1.92 points on scoring averages in season's last 2 weeks.</li>
                            </ul>
                            <div className="flex flex-wrap gap-1 mt-2">
                                {["Python", "Polars", "scikit-learn", "NumPy"].map(skill => (
                                    <span key={skill} className="px-2 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs text-gray-700 dark:text-gray-300">{skill}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                <div className="text-center text-xs text-gray-600 dark:text-gray-400 py-2">
                    © 2025 Caleb Hu. All Rights Reserved.
                </div>
            </div>
        </main>
    )
}

export default MainContent
