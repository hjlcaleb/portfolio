import { useState, useEffect, useCallback } from 'react'
import Sidebar from './Sidebar'
import TabBar from './TabBar'
import Editor from './Editor'

export default function IDELayout() {
  const [openTabs, setOpenTabs] = useState(['about.md'])
  const [activeTab, setActiveTab] = useState('about.md')
  const [showMessage, setShowMessage] = useState(false)
  const [sidebarWidth, setSidebarWidth] = useState(256)
  const [isResizing, setIsResizing] = useState(false)

  const handleWindowControl = (action) => {
    setShowMessage(true)
    setTimeout(() => setShowMessage(false), 2000)
  }

  const handleFileSelect = (filePath) => {
    // Add to tabs if not already open
    if (!openTabs.includes(filePath)) {
      setOpenTabs([...openTabs, filePath])
    }
    // Set as active tab
    setActiveTab(filePath)
  }

  const handleCloseTab = useCallback((filePath) => {
    const newTabs = openTabs.filter(tab => tab !== filePath)
    setOpenTabs(newTabs)
    
    // If closing active tab, switch to another tab
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

  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e) => {
      // Cmd/Ctrl + W to close tab
      if ((e.metaKey || e.ctrlKey) && e.key === 'w') {
        e.preventDefault()
        handleCloseTab(activeTab)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [activeTab, handleCloseTab])

  // Sidebar resize handlers
  const handleMouseDown = () => {
    setIsResizing(true)
  }

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (isResizing) {
        const newWidth = e.clientX
        if (newWidth >= 180 && newWidth <= 500) {
          setSidebarWidth(newWidth)
        }
      }
    }

    const handleMouseUp = () => {
      setIsResizing(false)
    }

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
      {/* "Don't Leave" Message */}
      {showMessage && (
        <div className="absolute top-16 left-1/2 transform -translate-x-1/2 z-50 bg-[#007acc] text-white px-6 py-3 rounded-lg shadow-lg animate-bounce">
          <span className="text-sm font-semibold">no, don't leave! :(</span>
        </div>
      )}

      {/* Title Bar - macOS Style */}
      <div className="h-8 bg-[#323233] border-b border-[#1e1e1e] flex items-center px-4 text-xs text-gray-400">
        {/* macOS Window Controls */}
        <div className="flex items-center gap-2 mr-auto">
          <div 
            className="w-3 h-3 rounded-full bg-[#ff5f56] hover:bg-[#ff5f56]/80 cursor-pointer transition-all active:scale-90"
            onClick={() => handleWindowControl('close')}
          ></div>
          <div 
            className="w-3 h-3 rounded-full bg-[#ffbd2e] hover:bg-[#ffbd2e]/80 cursor-pointer transition-all active:scale-90"
            onClick={() => handleWindowControl('minimize')}
          ></div>
          <div className="w-3 h-3 rounded-full bg-[#27c93f] hover:bg-[#27c93f]/80 cursor-pointer transition-all active:scale-90"></div>
        </div>
        
        {/* Center Title */}
        <div className="absolute left-1/2 transform -translate-x-1/2 text-sm text-gray-300">
          <strong>caleb hu - software engineer</strong>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex overflow-hidden">
        {/* Sidebar */}
        <div className="relative flex-shrink-0" style={{ width: `${sidebarWidth}px` }}>
          <Sidebar
            onFileSelect={handleFileSelect}
            activeFile={activeTab}
          />
          {/* Resize Handle */}
          <div
            className="absolute top-0 right-0 w-1 h-full cursor-col-resize hover:bg-[#007acc] transition-colors"
            onMouseDown={handleMouseDown}
            style={{ userSelect: 'none' }}
          />
        </div>

        {/* Editor Area */}
        <div className="flex-1 flex flex-col overflow-hidden">
          {/* Tab Bar */}
          {openTabs.length > 0 && (
            <TabBar
              openTabs={openTabs}
              activeTab={activeTab}
              onTabClick={setActiveTab}
              onTabClose={handleCloseTab}
            />
          )}

          {/* Editor */}
          <div className="flex-1 overflow-hidden">
            <Editor filePath={activeTab} />
          </div>
        </div>
      </div>

      {/* Status Bar */}
      <div className="h-6 bg-[#007acc] border-t border-[#005a9e] flex items-center justify-between px-4 text-xs text-white">
        <div className="flex items-center gap-4">
          <span>✓ Ready</span>
          {activeTab && (
            <span className="text-white/80">{activeTab}</span>
          )}
        </div>
        <div className="flex items-center gap-4 text-white/90">
          <a href="mailto:calebdhu@gmail.com" className="hover:text-white transition-colors">
            calebdhu@gmail.com
          </a>
          <a href="https://github.com/hjlcaleb" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
            github.com/hjlcaleb
          </a>
          <a href="https://linkedin.com/in/calebhu" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
            linkedin.com/in/calebhu
          </a>
          425-761-4686
        </div>
      </div>
    </div>
  )
}
