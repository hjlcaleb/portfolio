// File system data model
export const fileSystem = {
  'about.md': {
    type: 'markdown',
    content: `# About Me

<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 5rem; align-items: start;">
<div>

\`\`\`javascript
const developer = {
  name: "Caleb Hu",
  location: "Seattle, WA",
  education: "University of Washington",
  major: "Computer Science",
  gpa: 3.82,
  expectedGraduation: "June 2027",
  email: "calebdhu@gmail.com",
  phone: "(425) 761-4686"
};
\`\`\`

</div>
<div>

<img src="/delcampo.jpg" alt="Del Campo Peak" style="width: 100%; max-width: 230px; aspect-ratio: 1/1; object-fit: cover; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);" />

</div>
</div>

## Bio

I'm a student studying computer science at the University of Washington, passionate about **building innovative, impact-driven solutions**. Growing up with amniotic band syndrome and being fitted for various prosthetics from a young age, I developed a deep appreciation for how technology can empower and transform lives.

My journey in tech started in high school with game development, which evolved into a deep interest in **full-stack development and machine learning**. Today, I'm focused on creating scalable web applications and exploring the intersection of AR/VR with Human-AI interaction use cases.

## Skills

### Languages
\`\`\`
Java | Python | JavaScript | TypeScript | HTML5 | CSS | C | C++
\`\`\`

### Frameworks & Libraries
\`\`\`
React.js | Node.js/Express | Next.js | Flask | Django
Tailwind CSS | JUnit | Java Swing | scikit-learn
\`\`\`

### Developer Tools
\`\`\`
Unix/Linux | Docker | Postman | Selenium | Supabase
Firebase | Clerk | PostgreSQL | MySQL | Vercel | Figma
\`\`\`

### Currently Learning
\`\`\`
R | PyTorch | TensorFlow | Matplotlib | Angular
AWS EC2 | Kubernetes | C# | CI/CD
\`\`\`

## Education

**University of Washington** - Seattle, WA  
Bachelor of Science in Computer Science  
Concentrations in ML & Data Science | GPA: 3.82/4.00  
Expected Graduation: June 2027

**Key Coursework:**  
Machine Learning, Systems Engineering, Data Structures & Parallelism, Algorithms, Hardware/Software Interface

`
  },
  'internships.md': {
    type: 'markdown',
    content: `# Work Experience

## Makeability Lab - Researcher

**Seattle, WA** | June 2025 - Present

Engineered PreviewAR, a pipeline using PyTorch, Grounded SAM, and GPT-5 that converts 2D products into scaled 3D models for AR visualization; to be presented at UIST 2026. Developed a modular web scraping system with Selenium that extracts product specs from Amazon/eBay and uses GPT-5 vision models for optimal image selection.

**Tech Stack:** Python, PyTorch, Selenium, OpenAI GPT-5, Grounded SAM, OpenCV, Hunyuan 3D-2

---

## Mastertech.ai - Software Engineer Intern

**Kirkland, WA** | July 2025 - September 2025

Built an LLM unit-testing/evaluation system that raised input classification accuracy by 3% by exposing edge-case failures. Designed and shipped a prompt-template feature to retrieve, display, and store NHTSA recall data, improving diagnostic transparency for 100+ technicians at this VC-backed AI auto-repair startup.

**Tech Stack:** TypeScript, Redux, REST APIs, DynamoDB
`
  },
  'projects.md': {
    type: 'markdown',
    content: `# Projects

## CodeStepByStep.com

Devised and scaled a GPT-powered teaching assistant to offer coding support for 95,000+ students and teachers nationwide. Programmed a TypeScript throttle with countdown to prevent spamming and limit submissions for 1,000+ practice problems.

**Tech Stack:** TypeScript, MySQL, JavaEE, LangChain4j, ChromaDB  
**Links:** [Visit Site](https://www.codestepbystep.com)

---

## CALEB - Outreach Automation Bot

Authored a full-stack outreach automation platform (React website + Flask backend) used by 4-6 officers to send internal emails to a 40+ student consulting organization and source clients, reducing manual email time by 97.2%. Implemented Gmail OAuth, secure contact directory, and Celery-based scheduled email queue enabling campaigns across 3,900+ contacts.

**Tech Stack:** React.js, Flask, Docker, Celery, RabbitMQ/Redis, PostgreSQL

---

## NFL Team Score Prediction Model

Architected a Python data pipeline using nflreadpy and Polars to ingest 11 seasons of play-by-play data and compute 9 team-level features. Trained and optimized a scikit-learn model, achieving an RMSE of 1.92 points on scoring averages in the season's last 2 weeks.

**Tech Stack:** Python, Polars, scikit-learn, Pandas, NumPy, Jupyter Lab  
**Links:** [View on GitHub](https://github.com/hjlcaleb)
`
  },
  'leadership.md': {
    type: 'markdown',
    content: `# Leadership

## Undergraduate Teaching Assistant

**Paul G. Allen School of Computer Science and Engineering**  
University of Washington, Seattle | January 2026 - Present

Supported 300+ students in introductory Java course series by leading weekly labs and teaching core programming concepts.

---

## UWCA Technical Director & Senior Consulting Analyst

**University of Washington Consulting Association (UWCA)**  
Seattle, WA | March 2025 - Present

Built a pipeline that automated internal communication and client sourcing processes for a 10-member exec team. Redesigned the UWCA website, leveraging SEO and UX principles to generate a 176% increase in unique visits within 30 days.
`
  },
  'resume.pdf': {
    type: 'pdf',
    url: '/Caleb-Hu-Resume.pdf'
  }
};

export const fileSystemTree = [
  { name: 'about.md', type: 'file', path: 'about.md' },
  { name: 'internships.md', type: 'file', path: 'internships.md' },
  { name: 'projects.md', type: 'file', path: 'projects.md' },
  { name: 'leadership.md', type: 'file', path: 'leadership.md' }
];

export function getFileContent(path) {
  return fileSystem[path] || null;
}
