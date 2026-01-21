'use client'
import Image from 'next/image'
import { fileSystemTree } from '../../data/fileSystem'

export default function Sidebar({ onFileSelect, activeFile }) {
  const getFileIcon = (fileName) => {
    const iconMap = {
      'about.md': { src: '/me.png', rounded: true },
      'internships.md': { src: '/internships.png', rounded: false },
      'projects.md': { src: '/projects.png', rounded: false },
      'leadership.md': { src: '/leadership.png', rounded: false }
    }

    if (iconMap[fileName]) {
      return (
        <Image 
          src={iconMap[fileName].src}
          alt={fileName} 
          width={18} 
          height={18} 
          className={iconMap[fileName].rounded ? 'rounded-full' : ''}
        />
      )
    }

    if (fileName.endsWith('.md')) return <span className="text-lg">📄</span>
    if (fileName.endsWith('.pdf')) return <span className="text-lg">📋</span>
    return <span className="text-lg">📄</span>
  }

  return (
    <div className="w-64 bg-[#252526] border-r border-[#1e1e1e] h-full flex flex-col font-sans">
      <div className="px-4 py-2 text-xs font-semibold text-gray-400 uppercase tracking-wider border-b border-[#1e1e1e]">
        Portfolio
      </div>
      <div className="flex-1 overflow-y-auto">
        {fileSystemTree.map((file) => (
          <div
            key={file.path}
            className={`px-4 py-1.5 flex items-center gap-2 cursor-pointer text-[13px] ${
              activeFile === file.path
                ? 'bg-[#37373d] text-white'
                : 'text-gray-300 hover:bg-[#2a2d2e]'
            }`}
            onClick={() => onFileSelect(file.path)}
          >
            {getFileIcon(file.name)}
            <span>{file.name}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
