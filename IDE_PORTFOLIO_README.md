# IDE-Themed Portfolio - Complete

## 🎨 What Was Built

Your portfolio is now a **fully functional VS Code-inspired IDE** with:

### Core Features

1. **File Explorer Sidebar** (left)
   - Expandable/collapsible folders
   - File tree structure showing all your content
   - Active file highlighting
   - Hover states

2. **Tab Management System**
   - Multiple files open simultaneously
   - Active tab highlighting with blue border
   - Close tabs with × button or **Cmd/Ctrl + W**
   - Smooth tab switching

3. **Editor Pane**
   - Markdown rendering with full syntax highlighting
   - Code blocks with language-specific highlighting (Python, JavaScript, TypeScript, YAML, etc.)
   - Beautiful typography with proper spacing
   - Scrollable content area

4. **Title Bar**
   - Your name and contact links
   - Email, GitHub, LinkedIn quick access

5. **Status Bar** (bottom)
   - Current file path
   - File encoding and line ending info
   - Ready status indicator

## 📁 Content Structure

```
portfolio/
├── about/
│   └── README.md          # Your bio, skills, education
├── internships/
│   ├── makeability-lab.md  # Research position
│   └── mastertech-ai.md    # SWE internship
├── projects/
│   ├── codestepbystep.md   # Educational platform
│   ├── caleb-bot.md        # CALEB automation
│   └── nfl-prediction.md   # ML project
├── leadership/
│   ├── teaching-assistant.md
│   └── uwca-technical-director.md
└── resume/
    └── resume.pdf          # Links to your actual PDF
```

## 🎯 Key Features

### Design
- **Dark theme** inspired by VS Code (no copyrighted assets)
- Colors: `#1e1e1e` (background), `#252526` (sidebar), `#007acc` (accent blue)
- Monospace fonts: Consolas, Monaco, Courier New
- Smooth hover states and transitions
- Custom scrollbars matching VS Code style

### Functionality
- ✅ **Keyboard shortcuts**: Cmd/Ctrl + W to close tabs
- ✅ **Multiple tabs**: Open as many files as you want
- ✅ **Syntax highlighting**: Automatic language detection in code blocks
- ✅ **Responsive**: Works on all screen sizes
- ✅ **Deep content**: Each project/internship has detailed markdown with code examples
- ✅ **Professional**: Looks like a real development environment

### Content Highlights
- Each file includes:
  - YAML frontmatter-style metadata
  - Detailed descriptions
  - Code blocks with syntax highlighting
  - Tech stack lists
  - Key contributions and impact metrics
  - Links where relevant

## 🚀 How It Works

### State Management
- `openTabs`: Array of currently open file paths
- `activeTab`: Currently displayed file
- `expandedFolders`: Which folders are expanded in sidebar

### Components

```
IDELayout (Main)
├── Sidebar
│   └── File tree with click handlers
├── TabBar
│   └── Open tabs with close buttons
└── Editor
    └── Markdown renderer with syntax highlighting
```

### Data Model
All content is stored in `src/app/data/fileSystem.js` as structured markdown strings, making it easy to update or add new content.

## 📝 To Update Content

Edit `src/app/data/fileSystem.js`:

```javascript
export const fileSystem = {
  projects: {
    'new-project.md': {
      type: 'markdown',
      content: `# Your New Project
      
Content here...
\`\`\`python
# Code examples
\`\`\`
`
    }
  }
}
```

Then add to the tree structure:

```javascript
{
  name: 'projects',
  type: 'folder',
  children: [
    { name: 'new-project.md', type: 'file', path: 'projects/new-project.md' }
  ]
}
```

## 🎨 Design Tokens

```javascript
colors: {
  background: '#1e1e1e',    // Main editor
  sidebar: '#252526',       // Sidebar background
  hover: '#2a2d2e',         // Hover states
  border: '#3e3e42',        // Borders and dividers
  blue: '#007acc',          // Accent color
  selection: '#264f78',     // Text selection
}
```

## ✨ What Makes It Special

1. **Immediately recognizable** as a developer's portfolio
2. **Highly browsable** - recruiters can explore like browsing code
3. **Shows technical competence** through the interface itself
4. **All content accessible** in <60 seconds
5. **Clean, extensible codebase** with separated concerns
6. **Professional appearance** without being gimmicky

## 🔧 Tech Stack

- **Next.js 15** - React framework
- **react-markdown** - Markdown rendering
- **react-syntax-highlighter** - Code syntax highlighting
- **remark-gfm** - GitHub Flavored Markdown
- **Tailwind CSS** - Styling
- **VS Code Dark Plus** theme for syntax

## 📱 Live Now

Your dev server is running at **http://localhost:3000**

Open it to see your complete IDE-themed portfolio! Try:
- Clicking files in the sidebar
- Opening multiple tabs
- Closing tabs with × or Cmd/Ctrl + W
- Scrolling through the markdown content
- Checking out the syntax-highlighted code blocks

---

**All your resume content is now beautifully presented in an IDE-style interface that showcases both your projects AND your technical skills!** 🎉
