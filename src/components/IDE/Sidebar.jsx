import { fileSystemTree } from '../../data/fileSystem'

export default function Sidebar({ onFileSelect, activeFile }) {
  const getFileIcon = (fileName) => {
    const iconMap = {
      'README.md': { src: `${process.env.PUBLIC_URL}/me.png`, rounded: false },
      'internships.md': { src: `${process.env.PUBLIC_URL}/internships.png`, rounded: false },
      'projects.md': { src: `${process.env.PUBLIC_URL}/projects.png`, rounded: false },
      'leadership.md': { src: `${process.env.PUBLIC_URL}/leadership.png`, rounded: false }
    }

    if (iconMap[fileName]) {
      return (
        <img 
          src={iconMap[fileName].src}
          alt={fileName} 
          className={`w-[16px] h-[16px] ${iconMap[fileName].rounded ? 'rounded-full' : ''}`}
        />
      )
    }

    if (fileName.endsWith('.md')) return <span className="text-lg">📄</span>
    if (fileName.endsWith('.pdf')) return <span className="text-lg">📋</span>
    return <span className="text-lg">📄</span>
  }

  return (
    <div className="w-full bg-[#252526] border-r border-[#1e1e1e] h-full flex flex-col font-sans">
      <div className="px-4 py-1 flex items-center justify-between text-xs font-semibold text-gray-400 uppercase tracking-wider border-b border-[#1e1e1e]">
        <span>Portfolio</span>
        <div className="flex items-center gap-2">
          <a
            href="mailto:calebdhu@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-3.5 h-3.5 opacity-60 hover:opacity-100 transition-opacity"
            title="Email"
          >
            <img 
              src={`${process.env.PUBLIC_URL}/email.png`}
              alt="Email"
              className="w-full h-full"
            />
          </a>
          <a
            href="https://github.com/hjlcaleb"
            target="_blank"
            rel="noopener noreferrer"
            className="w-3.5 h-3.5 opacity-60 hover:opacity-100 transition-opacity"
            title="GitHub"
          >
            <img 
              src={`${process.env.PUBLIC_URL}/github.png`}
              alt="GitHub"
              className="w-full h-full"
            />
          </a>
          <a
            href="https://linkedin.com/in/calebhu"
            target="_blank"
            rel="noopener noreferrer"
            className="w-3.5 h-3.5 opacity-60 hover:opacity-100 transition-opacity"
            title="LinkedIn"
          >
            <img 
              src={`${process.env.PUBLIC_URL}/linkedin.png`}
              alt="LinkedIn"
              className="w-full h-full"
            />
          </a>
        </div>
      </div>
      <div className="flex-1">
        {fileSystemTree.map((file) => (
          <div
            key={file.path}
            className={`px-4 py-2 md:py-1 flex items-center gap-2 cursor-pointer text-[13px] transition-none border ${
              activeFile === file.path
                ? 'bg-[#03395e] text-white border-[#027fd4]'
                : 'text-gray-300 hover:bg-[#2a2d2e] border-transparent'
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
