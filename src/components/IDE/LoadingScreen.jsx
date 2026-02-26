import { useState, useEffect, useCallback } from 'react'

export default function LoadingScreen({ onDone }) {
  const [fading, setFading] = useState(false)

  const finish = useCallback(() => {
    setFading(true)
    setTimeout(onDone, 600)
  }, [onDone])

  useEffect(() => {
    let minDone = false
    let windowLoaded = false

    const tryFinish = () => {
      if (minDone && windowLoaded) finish()
    }

    const timer = setTimeout(() => {
      minDone = true
      tryFinish()
    }, 1400)

    if (document.readyState === 'complete') {
      windowLoaded = true
    } else {
      const onLoad = () => { windowLoaded = true; tryFinish() }
      window.addEventListener('load', onLoad)
      return () => {
        clearTimeout(timer)
        window.removeEventListener('load', onLoad)
      }
    }

    return () => clearTimeout(timer)
  }, [finish])

  return (
    <div
      className="fixed inset-0 z-50 bg-[#1e1e1e] flex flex-col items-center justify-center"
      style={{
        transition: 'opacity 0.6s ease',
        opacity: fading ? 0 : 1,
        pointerEvents: fading ? 'none' : 'auto',
      }}
    >
      {/* Spinner + image */}
      <div className="relative flex items-center justify-center w-36 h-36">
        {/* Spinning ring */}
        <div
          className="absolute inset-0 rounded-full animate-spin"
          style={{
            border: '3px solid #2a2a2a',
            borderTopColor: '#007acc',
            willChange: 'transform',
          }}
        />
        <img
          src="/favicon copy.png"
          alt="Caleb Hu"
          width={128}
          height={128}
          className="w-32 h-32 rounded-full object-cover shadow-2xl"
        />
      </div>
      <p className="mt-5 text-gray-400 text-sm tracking-widest animate-pulse">
        caleb hu
      </p>
    </div>
  )
}
