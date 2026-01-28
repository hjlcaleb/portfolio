
export default function TabBar({ openTabs, activeTab, onTabClick, onTabClose }) {
  const getFileName = (path) => {
    return path.split('/').pop()
  }

  const getFileIcon = (fileName) => {
    const iconMap = {
      'about.md': { src: `${process.env.PUBLIC_URL}/me.png`, rounded: true },
      'internships.md': { src: `${process.env.PUBLIC_URL}/internships.png`, rounded: false },
      'projects.md': { src: `${process.env.PUBLIC_URL}/projects.png`, rounded: false },
      'leadership.md': { src: `${process.env.PUBLIC_URL}/leadership.png`, rounded: false }
    }

    if (iconMap[fileName]) {
      return (
        <img 
          src={iconMap[fileName].src}
          alt={fileName} 
          className={`w-4 h-4 ${iconMap[fileName].rounded ? 'rounded-full' : ''}`}
        />
      )
    }

    if (fileName.endsWith('.md')) return <span className="text-xs">📄</span>
    if (fileName.endsWith('.pdf')) return <span className="text-xs">📋</span>
    return <span className="text-xs">📄</span>
  }

  return (
    <div className="h-9 bg-[#252526] border-b border-[#1e1e1e] flex items-center overflow-x-auto">
      {openTabs.map((tab) => {
        const fileName = getFileName(tab)
        return (
          <div
            key={tab}
            className={`h-full px-2 flex items-center gap-2 text-sm cursor-pointer border-r border-[#1e1e1e] group ${
              activeTab === tab
                ? 'bg-[#1e1e1e] text-white'
                : 'bg-[#2d2d30] text-gray-400 hover:bg-[#323233]'
            }`}
            onClick={() => onTabClick(tab)}
          >
            {getFileIcon(fileName)}
            <span className="whitespace-nowrap">{fileName}</span>
            <button
              className="ml-2 opacity-0 group-hover:opacity-100 hover:bg-[#3e3e42] rounded-sm w-5 h-5 flex items-center justify-center text-lg leading-none"
              onClick={(e) => {
                e.stopPropagation()
                onTabClose(tab)
              }}
            >
              ×
            </button>
          </div>
        )
      })}
    </div>
  )
}
