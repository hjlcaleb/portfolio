import { useState } from 'react'

export default function ExperienceCard({ icon, iconType, title, subtitle, description, devicons, techStack, links }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center gap-3 p-4 text-left hover:bg-[#2a2a2a]"
      >
        {icon && (iconType === 'video' ? (
          <video
            src={icon}
            style={{ width: 40, height: 40, objectFit: 'cover', borderRadius: 4, flexShrink: 0 }}
            autoPlay loop muted playsInline
          />
        ) : (
          <img
            src={icon}
            alt=""
            style={{ width: 40, height: 40, objectFit: 'contain', borderRadius: 4, flexShrink: 0 }}
          />
        ))}
        <div className="flex-1 min-w-0">
          {title.includes(' | ') ? (
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-0.5 sm:gap-4">
              <div className="flex items-center gap-1 min-w-0">
                <div className="text-white font-semibold text-base md:text-lg leading-tight truncate">{title.split(' | ')[0]}</div>
                <svg
                  className={`w-4 h-4 text-gray-400 flex-shrink-0 ${isOpen ? '' : '-rotate-90'}`}
                  fill="none" viewBox="0 0 24 24" stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
              <div className="text-gray-400 text-xs sm:text-sm flex-shrink-0">{title.split(' | ')[1]}</div>
            </div>
          ) : (
            <div className="flex items-center gap-1">
              <div className="text-white font-semibold text-base md:text-lg leading-tight">{title}</div>
              <svg
                className={`w-4 h-4 text-gray-400 flex-shrink-0 ${isOpen ? '' : '-rotate-90'}`}
                fill="none" viewBox="0 0 24 24" stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          )}
          {subtitle && <div className="text-gray-400 text-xs md:text-sm mt-0.5">{subtitle}</div>}
        </div>
      </button>
      {isOpen && (
        <div className="px-4 pb-4 pt-3 border-t border-[#3e3e42]">
          {devicons && devicons.length > 0 ? (
            <div className="flex flex-wrap gap-4 py-1 mb-2">
              {devicons.map((d, i) => (
                <div key={i} className="flex flex-col items-center gap-1">
                  <i className={`${d.cls} text-3xl`} />
                  <span className="text-gray-400 text-xs">{d.label}</span>
                </div>
              ))}
            </div>
          ) : Array.isArray(description) ? (
            <ul className="space-y-1.5 mb-2">
              {description.map((item, i) => (
                <li key={i} className="text-gray-300 text-sm flex items-start gap-2">
                  <span className="text-white flex-shrink-0 leading-5">▸</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-300 leading-relaxed mb-2">{description}</p>
          )}
          {techStack && (
            <p className="text-gray-300 text-sm">
              <span className="text-white font-semibold">Tech Stack:</span> {techStack}
            </p>
          )}
          {links && links.length > 0 && (
            <div className="mt-2 flex gap-3">
              {links.map((link, i) => (
                <a
                  key={i}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 text-sm"
                >
                  {link.label}
                </a>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  )
}
