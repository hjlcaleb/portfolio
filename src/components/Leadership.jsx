import React from 'react'

const LeadershipBlock = ({ title, organization, location, date, bullets }) => {
    return (
        <div className="bg-white dark:bg-gray-900 p-6 md:p-8 rounded-2xl border border-gray-200 dark:border-gray-800 mb-6 w-full max-w-4xl hover:shadow-lg transition-shadow">
            <div className="mb-4">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                    <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">{title}</h3>
                        <p className="text-base text-gray-700 dark:text-gray-300 mt-1">{organization}</p>
                        {location && <p className="text-sm text-gray-600 dark:text-gray-400">{location}</p>}
                    </div>
                    <span className="text-sm text-gray-600 dark:text-gray-400 mt-2 md:mt-0">{date}</span>
                </div>
            </div>
            {bullets && (
                <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 text-sm">
                    {bullets.map((bullet, index) => (
                        <li key={index} className="leading-relaxed">{bullet}</li>
                    ))}
                </ul>
            )}
        </div>
    )
}

const Leadership = () => {
    const leadership = [
        {
            title: "Undergraduate Teaching Assistant",
            organization: "Paul G. Allen School of Computer Science and Engineering",
            location: "Seattle, WA",
            date: "Jan 2026 – present",
            bullets: [
                "Supported 300+ students in introductory Java course series by leading weekly labs and teaching core programming concepts."
            ]
        },
        {
            title: "Technical Director; Senior Consulting Analyst",
            organization: "UWCA (University of Washington Consulting Association)",
            location: "Seattle, WA",
            date: "Mar 2025 – present",
            bullets: [
                "Built a pipeline that automated internal communication and client sourcing processes for a 10-member exec team.",
                "Redesigned the UWCA website, leveraging SEO and UX principles to generate a 176% increase in unique visits within 30 days."
            ]
        }
    ]

    return (
        <section id="leadership" className="py-20 px-6 scroll-mt-20">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-gray-900 dark:text-white">Leadership</h2>
                <div className="flex flex-col items-center">
                    {leadership.map((item, index) => (
                        <LeadershipBlock key={index} {...item} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Leadership
