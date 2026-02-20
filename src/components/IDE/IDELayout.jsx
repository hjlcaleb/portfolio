import { useState, useEffect, useCallback } from 'react'
import Sidebar from './Sidebar'
import TabBar from './TabBar'
import Editor from './Editor'
import Fireworks from './Fireworks'

export default function IDELayout() {
  const [openTabs, setOpenTabs] = useState(['README.md'])
  const [activeTab, setActiveTab] = useState('README.md')
  const [showMessage, setShowMessage] = useState(false)
  const [sidebarWidth, setSidebarWidth] = useState(256)
  const [isResizing, setIsResizing] = useState(false)
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [fireworksActive, setFireworksActive] = useState(false)
  const [fireworksKey, setFireworksKey] = useState(0)

  const handleWindowControl = () => {
    setShowMessage(true)
    setTimeout(() => setShowMessage(false), 2000)
  }

  const handleFileSelect = useCallback((filePath) => {
    if (!openTabs.includes(filePath)) {
      setOpenTabs(prev => [...prev, filePath])
    }
    setActiveTab(filePath)
    setSidebarOpen(false) // close drawer on mobile after selection
  }, [openTabs])

  const handleCloseTab = useCallback((filePath) => {
    const newTabs = openTabs.filter(tab => tab !== filePath)
    setOpenTabs(newTabs)
    if (filePath === activeTab) {
      if (newTabs.length > 0) {
        const currentIndex = openTabs.indexOf(filePath)
        const nextTab = newTabs[Math.max(0, currentIndex - 1)]
        setActiveTab(nextTab)
      } else {
        setActiveTab(null)
      }
    }
  }, [openTabs, activeTab])

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'w') {
        e.preventDefault()
        handleCloseTab(activeTab)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [activeTab, handleCloseTab])

  const handleMouseDown = () => setIsResizing(true)

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (isResizing) {
        const newWidth = e.clientX
        if (newWidth >= 180 && newWidth <= 500) setSidebarWidth(newWidth)
      }
    }
    const handleMouseUp = () => setIsResizing(false)
    if (isResizing) {
      document.addEventListener('mousemove', handleMouseMove)
      document.addEventListener('mouseup', handleMouseUp)
    }
    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseup', handleMouseUp)
    }
  }, [isResizing])

  return (
    <div className="h-screen flex flex-col bg-[#1e1e1e] text-white overflow-hidden font-sans">

      <Fireworks key={fireworksKey} active={fireworksActive} onComplete={() => setFireworksActive(false)} />

      {showMessage && (
        <div className="absolute top-16 left-1/2 transform -translate-x-1/2 z-50 bg-[#007acc] text-white px-6 py-3 rounded-lg shadow-lg animate-bounce">
          <span className="text-sm font-semibold">don't leave! :(</span>
        </div>
      )}

      {/* Title Bar */}
      <div className="h-8 bg-[#323233] border-b border-[#1e1e1e] flex items-center px-4 text-xs text-gray-400 flex-shrink-0">
        <div className="flex items-center gap-2">
          {/* Hamburger — mobile only */}
          <button
            className="md:hidden text-gray-400 hover:text-white text-base leading-none p-0.5"
            onClick={() => setSidebarOpen(o => !o)}
            aria-label="Toggle sidebar"
          >
            ☰
          </button>
          {/* Traffic lights — desktop only */}
          <div className="hidden md:flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-[#ff5f56] hover:bg-[#ff5f56]/80 cursor-pointer transition-all active:scale-90"
              onClick={handleWindowControl} />
            <div className="w-3 h-3 rounded-full bg-[#ffbd2e] hover:bg-[#ffbd2e]/80 cursor-pointer transition-all active:scale-90"
              onClick={handleWindowControl} />
            <div className="w-3 h-3 rounded-full bg-[#27c93f] hover:bg-[#27c93f]/80 cursor-pointer transition-all active:scale-90"
              onClick={() => { setFireworksKey(k => k + 1); setFireworksActive(true) }} />
          </div>
        </div>
        {/* Center title — desktop only */}
        <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 text-sm text-gray-300">
          <strong>caleb hu - software engineer</strong>
        </div>
        {/* Active file label — mobile only */}
        <span className="md:hidden ml-2 text-gray-300 text-xs font-medium truncate">
          {activeTab || 'caleb hu'}
        </span>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex overflow-hidden relative">

        {/* Mobile backdrop */}
        {sidebarOpen && (
          <div
            className="md:hidden fixed inset-0 z-30 bg-black/50"
            onClick={() => setSidebarOpen(false)}
          />
        )}

        {/* Sidebar — drawer on mobile, inline on desktop */}
        <div
          className={`
            fixed top-8 bottom-6 left-0 z-40
            md:relative md:top-auto md:bottom-auto md:z-auto
            flex-shrink-0 transition-transform duration-200
            ${sidebarOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
          `}
          style={{ width: `${sidebarWidth}px` }}
        >
          <Sidebar onFileSelect={handleFileSelect} activeFile={activeTab} />
          {/* Resize handle — desktop only */}
          <div
            className="hidden md:block absolute top-0 right-0 w-1 h-full cursor-col-resize hover:bg-[#007acc] transition-colors"
            onMouseDown={handleMouseDown}
            style={{ userSelect: 'none' }}
          />
        </div>

        {/* Editor Area */}
        <div className="flex-1 flex flex-col overflow-hidden">
          {openTabs.length > 0 && (
            <TabBar openTabs={openTabs} activeTab={activeTab}
              onTabClick={setActiveTab} onTabClose={handleCloseTab} />
          )}
          <div className="flex-1 overflow-hidden">
            <Editor filePath={activeTab} />
          </div>
        </div>
      </div>

      {/* Status Bar */}
      <div className="h-6 bg-[#007acc] border-t border-[#005a9e] flex items-center justify-between px-4 text-xs text-white flex-shrink-0">
        <div className="flex items-center gap-4">
          <span>✓ Ready</span>
          {activeTab && <span className="text-white/80 hidden sm:inline">{activeTab}</span>}
        </div>
        {/* Contact links — desktop only */}
        <div className="hidden md:flex items-center gap-4 text-white/90">
          <a href="mailto:calebdhu@gmail.com" className="hover:text-white transition-colors">calebdhu@gmail.com</a>
          <a href="https://github.com/hjlcaleb" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">github.com/hjlcaleb</a>
          <a href="https://linkedin.com/in/calebhu" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">linkedin.com/in/calebhu</a>
        </div>
      </div>

    </div>
  )
}
