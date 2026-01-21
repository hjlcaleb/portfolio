import ReactMarkdown from 'react-markdown'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism'
import remarkGfm from 'remark-gfm'
import rehypeRaw from 'rehype-raw'
import { getFileContent } from '../../data/fileSystem'

export default function Editor({ filePath }) {
  if (!filePath) {
    return (
      <div className="h-full flex items-center justify-center bg-[#1e1e1e] text-gray-500">
        <div className="text-center">
          <div className="mb-6">
            <img 
              src={`${process.env.PUBLIC_URL}/headshot.jpg`}
              alt="Caleb Hu" 
              className="rounded-full mx-auto border-2 border-gray-700 w-[120px] h-[120px]"
            />
          </div>
          <div className="text-xl font-semibold mb-2 text-gray-300">Caleb Hu - Portfolio</div>
          <div className="text-sm">Select a file from the explorer to get started</div>
        </div>
      </div>
    )
  }

  const fileContent = getFileContent(filePath)

  if (!fileContent) {
    return (
      <div className="h-full flex items-center justify-center bg-[#1e1e1e] text-gray-500">
        File not found
      </div>
    )
  }

  if (fileContent.type === 'pdf') {
    const pdfUrl = fileContent.url.startsWith('http') ? fileContent.url : `${process.env.PUBLIC_URL}${fileContent.url}`;
    return (
      <div className="h-full bg-[#1e1e1e] flex flex-col">
        <div className="p-4 border-b border-[#3e3e42] flex items-center justify-between">
          <h2 className="text-lg font-semibold text-white">Resume Preview</h2>
          <a
            href={pdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm rounded transition-colors"
          >
            Open in New Tab
          </a>
        </div>
        <div className="flex-1 overflow-hidden">
          <iframe
            src={pdfUrl}
            className="w-full h-full border-0"
            title="Resume PDF"
          />
        </div>
      </div>
    )
  }

  return (
    <div className="h-full bg-[#1e1e1e] overflow-y-auto">
      <div className="max-w-4xl mx-auto p-8">
        <div className="prose prose-invert prose-pre:bg-[#1e1e1e] prose-pre:border prose-pre:border-[#3e3e42] max-w-none">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeRaw]}
            components={{
              code({ node, inline, className, children, ...props }) {
                const match = /language-(\w+)/.exec(className || '')
                const language = match ? match[1] : ''
                
                return !inline && language ? (
                  <SyntaxHighlighter
                    style={vscDarkPlus}
                    language={language}
                    PreTag="div"
                    customStyle={{
                      margin: 0,
                      borderRadius: '4px',
                      fontSize: '14px'
                    }}
                    {...props}
                  >
                    {String(children).replace(/\n$/, '')}
                  </SyntaxHighlighter>
                ) : (
                  <code className="bg-[#2d2d30] px-1.5 py-0.5 rounded text-sm" {...props}>
                    {children}
                  </code>
                )
              },
              h1: ({ children }) => (
                <h1 className="text-3xl font-bold text-white mb-4 pb-2 border-b border-[#3e3e42]">
                  {children}
                </h1>
              ),
              h2: ({ children }) => (
                <h2 className="text-2xl font-semibold text-white mt-8 mb-3">
                  {children}
                </h2>
              ),
              h3: ({ children }) => (
                <h3 className="text-xl font-semibold text-gray-200 mt-6 mb-2">
                  {children}
                </h3>
              ),
              p: ({ children }) => (
                <p className="text-gray-300 leading-relaxed mb-4">
                  {children}
                </p>
              ),
              img: ({ src, alt, ...props }) => (
                <img
                  src={src?.startsWith('http') ? src : `${process.env.PUBLIC_URL}${src}`}
                  alt={alt}
                  {...props}
                />
              ),
              a: ({ href, children }) => (
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 hover:underline"
                >
                  {children}
                </a>
              ),
              ul: ({ children }) => (
                <ul className="list-disc list-inside text-gray-300 mb-4 space-y-1">
                  {children}
                </ul>
              ),
              ol: ({ children }) => (
                <ol className="list-decimal list-inside text-gray-300 mb-4 space-y-1">
                  {children}
                </ol>
              ),
              strong: ({ children }) => (
                <strong className="text-white font-semibold">
                  {children}
                </strong>
              ),
              table: ({ children }) => (
                <div className="overflow-x-auto mb-4">
                  <table className="min-w-full border border-[#3e3e42]">
                    {children}
                  </table>
                </div>
              ),
              th: ({ children }) => (
                <th className="border border-[#3e3e42] px-4 py-2 bg-[#252526] text-white text-left">
                  {children}
                </th>
              ),
              td: ({ children }) => (
                <td className="border border-[#3e3e42] px-4 py-2 text-gray-300">
                  {children}
                </td>
              ),
              blockquote: ({ children }) => (
                <blockquote className="border-l-4 border-blue-500 pl-4 italic text-gray-400 my-4">
                  {children}
                </blockquote>
              ),
            }}
          >
            {fileContent.content}
          </ReactMarkdown>
        </div>
      </div>
    </div>
  )
}
