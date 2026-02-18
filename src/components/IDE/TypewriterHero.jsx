import { useState, useEffect, useRef } from 'react'

const EXTRA_CSS = `
  @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }
`

function SoftwareEngineerText({ text }) {
  return (
    <span style={{
      color: '#00ff41',
      fontFamily: '"Courier New", Courier, monospace',
      fontSize: '1.15rem',
      letterSpacing: '0.04em',
    }}>
      <span style={{ opacity: 0.45, marginRight: '0.4em' }}>&gt;_</span>
      {text}
      <span style={{ animation: 'blink 1s step-end infinite' }}>█</span>
    </span>
  )
}

function CVResearcherText({ text, total }) {
  const cx = 15
  const cy = 20
  const maxBeamLen = 220
  const svgW = 250

  const targetLen = total > 0 ? (text.length / total) * maxBeamLen : 0
  const [beamLen, setBeamLen] = useState(0)
  const animRef = useRef(null)
  const currentLen = useRef(0)

  useEffect(() => {
    cancelAnimationFrame(animRef.current)
    const target = targetLen
    const tick = () => {
      const diff = target - currentLen.current
      if (Math.abs(diff) < 0.3) {
        currentLen.current = target
        setBeamLen(target)
        return
      }
      currentLen.current += diff * 0.18
      setBeamLen(currentLen.current)
      animRef.current = requestAnimationFrame(tick)
    }
    animRef.current = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(animRef.current)
  }, [targetLen])
  const beamSpreads = [-30, -25, -20, -15, -10, -5, 5, 10, 15, 20, 25, 30]
  const outerRad = 30 * Math.PI / 180
  const gridStep = 20

  // vertical grid lines spanning top-to-bottom beam at regular x intervals
  const gridLines = []
  for (let d = gridStep; d + gridStep <= beamLen; d += gridStep) {
    const x = cx + d
    const halfH = d * Math.tan(outerRad)
    gridLines.push({ x, y1: cy - halfH, y2: cy + halfH, key: d })
  }

  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', position: 'relative' }}>
      {/* Headset — static */}
      <img
        src={`${process.env.PUBLIC_URL}/introIcons/headset.png`}
        alt=""
        style={{
          width: 28, height: 28, flexShrink: 0, position: 'relative', zIndex: 2,
        }}
      />
      {/* Beams SVG — covers headset + text area, sits behind both */}
      <svg
        width={svgW} height={40}
        viewBox={`0 0 ${svgW} 40`}
        style={{
          position: 'absolute', left: 0, top: '50%', transform: 'translateY(-50%)',
          zIndex: 1, overflow: 'visible', pointerEvents: 'none',
        }}
      >
        {/* Radial beams — no middle */}
        {beamSpreads.map((spread, i) => {
          const rad = (spread * Math.PI) / 180
          const ex = cx + beamLen * Math.cos(rad)
          const ey = cy + beamLen * Math.sin(rad)
          const opacity = (1 - Math.abs(spread) / 38) * 0.75
          return (
            <line key={i} x1={cx} y1={cy} x2={ex} y2={ey}
              stroke="#93c5fd"
              strokeWidth={Math.abs(spread) === 20 ? 0.9 : 0.6}
              opacity={opacity}
            />
          )
        })}
        {/* Vertical grid lines */}
        {gridLines.map(({ x, y1, y2, key }) => (
          <line key={`v${key}`} x1={x} y1={y1} x2={x} y2={y2}
            stroke="#93c5fd" strokeWidth="0.6" opacity="0.35" />
        ))}
      </svg>
      {/* Text on top */}
      <span style={{
        color: '#60a5fa', fontSize: '1.1rem',
        position: 'relative', zIndex: 3,
        marginLeft: '0.75rem',
      }}>
        {text}
      </span>
    </span>
  )
}

function SeahawksFanText({ text }) {
  const textRef = useRef(null)
  const imgRef = useRef(null)
  const animRef = useRef(null)
  const currentX = useRef(0)
  const targetX = useRef(0)

  useEffect(() => {
    if (textRef.current) targetX.current = textRef.current.offsetWidth
  }, [text])

  useEffect(() => {
    const tick = () => {
      const diff = targetX.current - currentX.current
      if (Math.abs(diff) > 0.1) {
        currentX.current += diff * 0.15
        if (imgRef.current)
          imgRef.current.style.transform = `translateY(-50%) translateX(${currentX.current + 4}px)`
      }
      animRef.current = requestAnimationFrame(tick)
    }
    animRef.current = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(animRef.current)
  }, [])

  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', position: 'relative', paddingRight: 30, height: '2rem' }}>
      <span ref={textRef} style={{ color: '#9ca3af', fontSize: '1.2rem', fontFamily: "'Oswald', sans-serif", fontWeight: 700, letterSpacing: '0.05em', lineHeight: '2rem' }}>{text}</span>
      <img
        ref={imgRef}
        src={`${process.env.PUBLIC_URL}/introIcons/seahawk.png`}
        alt=""
        style={{
          width: 24, height: 24, objectFit: 'contain',
          position: 'absolute', top: '50%', left: 0,
          transform: 'translateY(-50%) translateX(4px)',
          willChange: 'transform',
        }}
      />
    </span>
  )
}

function F1EnjoyerText({ fullText }) {
  const imgRef = useRef(null)
  const animRef = useRef(null)
  const startTime = useRef(null)

  useEffect(() => {
    startTime.current = null
    cancelAnimationFrame(animRef.current)

    const DURATION = 950
    const END_X = 460

    const tick = (ts) => {
      if (!startTime.current) startTime.current = ts
      const t = Math.min((ts - startTime.current) / DURATION, 1)
      const x = t * t * END_X
      const opacity = t < 0.68 ? 1 : 1 - (t - 0.68) / 0.32

      if (imgRef.current) {
        imgRef.current.style.transform = `translateY(-50%) translateX(${x}px) rotate(180deg)`
        imgRef.current.style.opacity = opacity
      }

      if (t < 1) animRef.current = requestAnimationFrame(tick)
    }

    animRef.current = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(animRef.current)
  }, [])

  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', position: 'relative' }}>
      <span style={{
        color: '#dc2626',
        fontSize: '1.2rem',
        fontFamily: "'Titillium Web', sans-serif",
        fontWeight: 700,
        fontStyle: 'italic',
        letterSpacing: '0.06em',
      }}>
        {fullText || 'F1 (LeClerc) Enthusiast'}
      </span>
      <img
        ref={imgRef}
        src={`${process.env.PUBLIC_URL}/introIcons/ferrari.png`}
        alt=""
        style={{
          width: 44, height: 44, objectFit: 'contain',
          position: 'absolute', top: '50%', left: 0,
          transform: 'translateY(-50%) translateX(0px) rotate(180deg)',
          willChange: 'transform, opacity',
          mixBlendMode: 'screen',
          pointerEvents: 'none',
        }}
      />
    </span>
  )
}

const RENDERERS = {
  'Software Engineer': SoftwareEngineerText,
  'CV Researcher': CVResearcherText,
  'Seahawks Fan': SeahawksFanText,
  'F1 (LeClerc) Enthusiast': F1EnjoyerText,
}

export default function TypewriterHero({ greeting, identities, photo, bio }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [displayText, setDisplayText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [isPaused, setIsPaused] = useState(false)
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    if (isPaused) return
    const current = identities[currentIndex]
    const isF1 = current === 'F1 (LeClerc) Enthusiast'
    const delay = isDeleting ? (isF1 ? 20 : 45) : (isF1 ? 18 : 80)

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < current.length) {
          setDisplayText(current.slice(0, displayText.length + 1))
        } else {
          setIsPaused(true)
          setTimeout(() => {
            setIsPaused(false)
            setIsDeleting(true)
          }, 1800)
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(current.slice(0, displayText.length - 1))
        } else {
          setIsPaused(true)
          setIsVisible(false)
          setTimeout(() => {
            setIsDeleting(false)
            setCurrentIndex((currentIndex + 1) % identities.length)
            setIsPaused(false)
            setIsVisible(true)
          }, 400)
        }
      }
    }, delay)

    return () => clearTimeout(timeout)
  }, [displayText, isDeleting, isPaused, currentIndex, identities])

  const photoSrc = photo
    ? (photo.startsWith('http') ? photo : `${process.env.PUBLIC_URL}${photo}`)
    : null

  const currentIdentity = identities[currentIndex]
  const Renderer = RENDERERS[currentIdentity]

  return (
    <div className="mb-10 flex flex-col md:flex-row md:items-start gap-6">
      {/* Photo — top on mobile, right side on desktop */}
      {photoSrc && (
        <img
          src={photoSrc}
          alt=""
          className="self-center md:self-start md:order-last"
          style={{ width: 'clamp(120px, 35vw, 250px)', height: 'clamp(120px, 35vw, 250px)', borderRadius: '50%', objectFit: 'cover', flexShrink: 0, boxShadow: '0 4px 6px rgba(0,0,0,0.3)' }}
        />
      )}
      <div className="flex-1 min-w-0">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-3 border-none">{greeting}</h1>
        <div className="flex items-center mb-5" style={{ height: '2rem', overflow: 'visible', opacity: isVisible ? 1 : 0, transition: 'opacity 0.25s ease' }}>
          {Renderer ? (
            <Renderer text={displayText} total={currentIdentity.length} fullText={currentIdentity} />
          ) : (
            <span className="text-xl text-gray-400">
              {displayText}
              <span className="ml-0.5 text-blue-400" style={{ animation: 'blink 1s step-end infinite' }}>|</span>
            </span>
          )}
        </div>
        {bio && bio.length > 0 && (
          <div>
            <h2 className="text-2xl font-semibold text-white mt-6 mb-2">TLDR</h2>
            <ul className="space-y-1">
              {bio.map((item, i) => (
                <li key={i} className="text-gray-400 text-sm flex items-start gap-2">
                  <span className="text-blue-400 leading-5">▸</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap items-center gap-2 mt-4">
              {[
                {
                  label: 'Resume',
                  href: `${process.env.PUBLIC_URL}/Caleb-Hu-Resume.pdf`,
                  icon: (
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/>
                    </svg>
                  ),
                },
                {
                  label: 'Email',
                  href: 'mailto:calebdhu@gmail.com',
                  icon: (
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
                    </svg>
                  ),
                },
                {
                  label: 'GitHub',
                  href: 'https://github.com/hjlcaleb',
                  icon: (
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                    </svg>
                  ),
                },
                {
                  label: 'LinkedIn',
                  href: 'https://linkedin.com/in/calebhu',
                  icon: (
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  ),
                },
              ].map(({ label, href, icon }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('mailto') ? undefined : '_blank'}
                  rel={href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                  className="flex items-center gap-1.5 px-2.5 py-1 rounded text-[11px] font-medium text-gray-400 hover:text-white bg-[#2d2d30] hover:bg-[#3e3e42] border border-[#3e3e42] hover:border-[#555] no-underline"
                  style={{ textDecoration: 'none' }}
                >
                  {icon}
                  {label}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
      <style>{EXTRA_CSS}</style>
    </div>
  )
}
